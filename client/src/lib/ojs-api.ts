// ============================================================
// OJS REST API Integration Layer
// Calls go through the Vercel serverless proxy at /api/ojs/*,
// which hides the API token and bridges HTTPS->HTTP to OJS.
// In dev (no proxy), VITE_OJS_DIRECT=1 makes the client hit OJS directly.
// ============================================================

const DIRECT = import.meta.env.VITE_OJS_DIRECT === "1";
const OJS_BASE_URL = (import.meta.env.VITE_OJS_BASE_URL || "http://204.216.215.234/ojs").replace(/\/$/, "");
const JOURNAL_PATH = import.meta.env.VITE_OJS_JOURNAL_PATH || "iei";
const DIRECT_TOKEN = import.meta.env.VITE_OJS_API_TOKEN || "";

export interface OJSAuthor {
  id: number;
  givenName: Record<string, string>;
  familyName: Record<string, string>;
  fullName?: string;
  affiliation?: Record<string, string>;
  email?: string;
  orcid?: string;
}

export interface OJSGalley {
  id: number;
  label: string;
  locale: string;
  file?: { id: number; downloadUrl: string };
  urlPublished?: string;
}

export interface OJSPublication {
  id: number;
  fullTitle?: Record<string, string>;
  title?: Record<string, string>;
  subtitle?: Record<string, string>;
  abstract?: Record<string, string>;
  authors?: OJSAuthor[];
  authorsString?: string;
  datePublished?: string;
  doiObject?: { doi: string };
  galleys?: OJSGalley[];
  issueId?: number;
  keywords?: Record<string, string[]>;
  pages?: string;
  sectionId?: number;
  subjects?: Record<string, string[]>;
  status?: number;
  urlPublished?: string;
}

export interface OJSSubmission {
  id: number;
  contextId?: number;
  currentPublicationId?: number;
  publications?: OJSPublication[];
  status?: number;
  dateLastActivity?: string;
  dateSubmitted?: string;
  urlPublished?: string;
}

export interface OJSIssue {
  id: number;
  volume?: number;
  number?: string;
  year?: number;
  datePublished?: string;
  identification?: string;
  title?: Record<string, string>;
  description?: Record<string, string>;
  articles?: OJSSubmission[];
  publishedSubmissions?: OJSSubmission[];
  urlPublished?: string;
  isCurrent?: boolean;
}

export interface OJSListResponse<T> {
  items: T[];
  itemsMax: number;
}

function buildUrl(endpoint: string, params?: Record<string, string | number | undefined>): string {
  const base = DIRECT
    ? `${OJS_BASE_URL}/index.php/${JOURNAL_PATH}/api/v1`
    : `/api/ojs`;
  const url = new URL(`${base}/${endpoint}`, typeof window !== "undefined" ? window.location.origin : "http://localhost");
  if (params) {
    for (const [k, v] of Object.entries(params)) {
      if (v !== undefined && v !== null && v !== "") url.searchParams.set(k, String(v));
    }
  }
  if (DIRECT && DIRECT_TOKEN) url.searchParams.set("apiToken", DIRECT_TOKEN);
  return DIRECT ? url.toString() : `${url.pathname}${url.search}`;
}

async function ojsFetch<T>(endpoint: string, params?: Record<string, string | number | undefined>): Promise<T> {
  const url = buildUrl(endpoint, params);
  const response = await fetch(url, { headers: { Accept: "application/json" } });
  if (!response.ok) {
    const text = await response.text().catch(() => "");
    throw new Error(`OJS API ${response.status}: ${text.slice(0, 200) || response.statusText}`);
  }
  return response.json() as Promise<T>;
}

export async function getCurrentIssue(): Promise<OJSIssue> {
  return ojsFetch<OJSIssue>("issues/current");
}

export async function getIssues(count = 20, offset = 0): Promise<OJSListResponse<OJSIssue>> {
  return ojsFetch<OJSListResponse<OJSIssue>>("issues", { count, offset });
}

export async function getIssue(issueId: number): Promise<OJSIssue> {
  return ojsFetch<OJSIssue>(`issues/${issueId}`);
}

export async function getSubmissions(params: {
  count?: number;
  offset?: number;
  status?: number;
  searchPhrase?: string;
  issueIds?: number;
  orderBy?: string;
  orderDirection?: "ASC" | "DESC";
} = {}): Promise<OJSListResponse<OJSSubmission>> {
  return ojsFetch<OJSListResponse<OJSSubmission>>("submissions", {
    status: 3,
    count: 20,
    ...params,
  });
}

export async function getSubmission(submissionId: number): Promise<OJSSubmission> {
  return ojsFetch<OJSSubmission>(`submissions/${submissionId}`);
}

export async function searchArticles(query: string, count = 20): Promise<OJSListResponse<OJSSubmission>> {
  return getSubmissions({ searchPhrase: query, count });
}

export function getLocalized(field: Record<string, string> | string | undefined, locale = "en"): string {
  if (!field) return "";
  if (typeof field === "string") return field;
  return field[locale] || field["en_US"] || field["en"] || field["it_IT"] || field["it"] || Object.values(field)[0] || "";
}

export function getLocalizedArray(field: Record<string, string[]> | string[] | undefined, locale = "en"): string[] {
  if (!field) return [];
  if (Array.isArray(field)) return field;
  return field[locale] || field["en_US"] || field["en"] || field["it_IT"] || field["it"] || Object.values(field)[0] || [];
}

export function transformAuthor(author: OJSAuthor): { name: string; affiliation?: string; orcid?: string } {
  const given = getLocalized(author.givenName);
  const family = getLocalized(author.familyName);
  const name = author.fullName?.trim() || `${given} ${family}`.trim();
  const affiliation = getLocalized(author.affiliation) || undefined;
  return { name, affiliation, orcid: author.orcid };
}

export function getCurrentPublication(submission: OJSSubmission): OJSPublication | undefined {
  if (!submission.publications || submission.publications.length === 0) return undefined;
  if (submission.currentPublicationId) {
    const match = submission.publications.find((p) => p.id === submission.currentPublicationId);
    if (match) return match;
  }
  return submission.publications[submission.publications.length - 1];
}

export function getArticleUrl(submissionId: number): string {
  return `${OJS_BASE_URL}/index.php/${JOURNAL_PATH}/article/view/${submissionId}`;
}

export function getPdfUrl(galleys?: OJSGalley[]): string | undefined {
  if (!galleys || galleys.length === 0) return undefined;
  const pdfGalley = galleys.find((g) => g.label?.toLowerCase() === "pdf") || galleys[0];
  return pdfGalley?.urlPublished || pdfGalley?.file?.downloadUrl;
}

// Adapter: OJS submission -> internal Article shape used by existing components.
export interface NormalizedArticle {
  id: number;
  title: string;
  authors: { name: string; affiliation?: string }[];
  abstract: string;
  doi?: string;
  doiUrl?: string;
  volume: number;
  issue: number;
  year: number;
  month: string;
  pages: string;
  jel?: string[];
  keywords?: string[];
  pdfUrl?: string;
  ojsUrl: string;
}

const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];

export function normalizeSubmission(submission: OJSSubmission, issue?: OJSIssue): NormalizedArticle {
  const publication: Partial<OJSPublication> = getCurrentPublication(submission) || {};
  const title = getLocalized(publication.fullTitle) || getLocalized(publication.title) || `Article #${submission.id}`;
  const abstractHtml = getLocalized(publication.abstract);
  const abstract = abstractHtml.replace(/<[^>]*>/g, "").trim();
  const authors = (publication.authors || []).map(transformAuthor);
  const doi = publication.doiObject?.doi;
  const keywords = getLocalizedArray(publication.keywords);
  const subjects = getLocalizedArray(publication.subjects);

  let year = 0;
  let month = "";
  const dateSource = publication.datePublished || issue?.datePublished;
  if (dateSource) {
    const d = new Date(dateSource);
    if (!isNaN(d.getTime())) {
      year = d.getFullYear();
      month = MONTHS[d.getMonth()];
    }
  }
  if (!year && issue?.year) year = issue.year;

  return {
    id: submission.id,
    title,
    authors,
    abstract,
    doi,
    doiUrl: doi ? `https://doi.org/${doi}` : undefined,
    volume: issue?.volume ?? 0,
    issue: issue?.number ? Number(issue.number) || 0 : 0,
    year,
    month,
    pages: publication.pages ?? "",
    keywords: keywords.length ? keywords : (subjects.length ? subjects : undefined),
    pdfUrl: getPdfUrl(publication.galleys),
    ojsUrl: publication.urlPublished || getArticleUrl(submission.id),
  };
}
