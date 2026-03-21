// ============================================================
// OJS REST API Integration Layer
// Connects to OJS 3.4 backend via REST API
// Uses VITE_ prefixed env vars for Vite compatibility
// ============================================================

const OJS_BASE_URL = import.meta.env.VITE_OJS_BASE_URL || "https://ojs.iei1946.it";
const JOURNAL_PATH = import.meta.env.VITE_OJS_JOURNAL_PATH || "iei";

// OJS API response types
export interface OJSSubmission {
  id: number;
  fullTitle?: Record<string, string>;
  title?: Record<string, string>;
  subtitle?: Record<string, string>;
  abstract?: Record<string, string>;
  authors: OJSAuthor[];
  datePublished?: string;
  dateSubmitted?: string;
  doi?: string;
  doiObject?: { doi: string };
  galleys?: OJSGalley[];
  issueId?: number;
  keywords?: Record<string, string[]>;
  pages?: string;
  sectionId?: number;
  status?: number;
  subjects?: Record<string, string[]>;
}

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
  file?: {
    id: number;
    downloadUrl: string;
  };
}

export interface OJSIssue {
  id: number;
  volume: number;
  number: string;
  year: number;
  datePublished: string;
  title?: Record<string, string>;
  description?: Record<string, string>;
  articles?: OJSSubmission[];
}

// Fetch helpers
async function ojsFetch<T>(endpoint: string, params?: Record<string, string>): Promise<T> {
  const url = new URL(`${OJS_BASE_URL}/api/v1/${endpoint}`);
  if (params) {
    Object.entries(params).forEach(([key, value]) => url.searchParams.set(key, value));
  }
  const response = await fetch(url.toString(), {
    headers: { "Accept": "application/json" },
  });
  if (!response.ok) {
    throw new Error(`OJS API Error: ${response.status} ${response.statusText}`);
  }
  return response.json();
}

// API functions
export async function getIssues(count = 20, offset = 0) {
  return ojsFetch<{ items: OJSIssue[]; itemsMax: number }>(
    `_journals/${JOURNAL_PATH}/issues`,
    { count: String(count), offset: String(offset) }
  );
}

export async function getIssue(issueId: number) {
  return ojsFetch<OJSIssue>(`_journals/${JOURNAL_PATH}/issues/${issueId}`);
}

export async function getCurrentIssue() {
  return ojsFetch<OJSIssue>(`_journals/${JOURNAL_PATH}/issues/current`);
}

export async function getSubmissions(count = 20, offset = 0, status = 3) {
  return ojsFetch<{ items: OJSSubmission[]; itemsMax: number }>(
    `_journals/${JOURNAL_PATH}/submissions`,
    { count: String(count), offset: String(offset), status: String(status) }
  );
}

export async function getSubmission(submissionId: number) {
  return ojsFetch<OJSSubmission>(`_journals/${JOURNAL_PATH}/submissions/${submissionId}`);
}

export async function searchArticles(query: string, count = 20) {
  return ojsFetch<{ items: OJSSubmission[]; itemsMax: number }>(
    `_journals/${JOURNAL_PATH}/submissions`,
    { searchPhrase: query, count: String(count), status: "3" }
  );
}

// Transform OJS data to our internal format
export function transformAuthor(author: OJSAuthor): { name: string; affiliation?: string } {
  const name = author.fullName || `${author.givenName?.en || author.givenName?.en_US || ""} ${author.familyName?.en || author.familyName?.en_US || ""}`.trim();
  const affiliation = author.affiliation?.en || author.affiliation?.en_US;
  return { name, affiliation };
}

export function getLocalized(field: Record<string, string> | string | undefined, locale = "en"): string {
  if (!field) return "";
  if (typeof field === "string") return field;
  return field[locale] || field["en_US"] || field["en"] || Object.values(field)[0] || "";
}

export function getLocalizedArray(field: Record<string, string[]> | string[] | undefined, locale = "en"): string[] {
  if (!field) return [];
  if (Array.isArray(field)) return field;
  return field[locale] || field["en_US"] || field["en"] || Object.values(field)[0] || [];
}

// Get the public article URL on OJS
export function getArticleUrl(articleId: number): string {
  return `${OJS_BASE_URL}/index.php/${JOURNAL_PATH}/article/view/${articleId}`;
}

// Get the PDF galley URL
export function getPdfUrl(galleys?: OJSGalley[]): string | undefined {
  if (!galleys || galleys.length === 0) return undefined;
  const pdfGalley = galleys.find((g) => g.label.toLowerCase() === "pdf") || galleys[0];
  return pdfGalley?.file?.downloadUrl;
}
