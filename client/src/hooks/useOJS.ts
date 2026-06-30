// React hooks that wrap the OJS REST API client.
// Stateful: { data, loading, error }. No external query lib to keep deps small.

import { useEffect, useState } from "react";
import {
  getCurrentIssue,
  getIssue,
  getIssues,
  getSubmission,
  getSubmissions,
  normalizeSubmission,
  type OJSIssue,
  type OJSSubmission,
  type OJSListResponse,
  type NormalizedArticle,
} from "@/lib/ojs-api";

interface AsyncState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

function useAsync<T>(fn: () => Promise<T>, deps: unknown[]): AsyncState<T> {
  const [state, setState] = useState<AsyncState<T>>({ data: null, loading: true, error: null });

  useEffect(() => {
    let cancelled = false;
    setState((s) => ({ ...s, loading: true, error: null }));
    fn()
      .then((data) => { if (!cancelled) setState({ data, loading: false, error: null }); })
      .catch((error: Error) => { if (!cancelled) setState({ data: null, loading: false, error }); });
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return state;
}

export function useCurrentIssue() {
  return useAsync<OJSIssue>(() => getCurrentIssue(), []);
}

export function useIssues(count = 20, offset = 0) {
  return useAsync<OJSListResponse<OJSIssue>>(() => getIssues(count, offset), [count, offset]);
}

export function useIssue(issueId: number | undefined) {
  return useAsync<OJSIssue>(
    () => (issueId ? getIssue(issueId) : Promise.reject(new Error("Missing issueId"))),
    [issueId],
  );
}

export function useSubmission(id: number | undefined) {
  return useAsync<OJSSubmission>(
    () => (id ? getSubmission(id) : Promise.reject(new Error("Missing submission id"))),
    [id],
  );
}

export function useSubmissions(params: { count?: number; offset?: number; searchPhrase?: string; issueIds?: number } = {}) {
  const key = JSON.stringify(params);
  return useAsync<OJSListResponse<OJSSubmission>>(
    () => getSubmissions(params),
    [key],
  );
}

// Convenience: current issue already hydrated as normalized articles.
export function useCurrentIssueArticles(): AsyncState<{ issue: OJSIssue; articles: NormalizedArticle[] }> {
  const [state, setState] = useState<AsyncState<{ issue: OJSIssue; articles: NormalizedArticle[] }>>({
    data: null, loading: true, error: null,
  });

  useEffect(() => {
    let cancelled = false;
    setState({ data: null, loading: true, error: null });

    (async () => {
      try {
        const issue = await getCurrentIssue();
        const submissions = issue.articles || issue.publishedSubmissions || [];
        let hydrated = submissions;
        if (submissions.length && !submissions[0].publications) {
          hydrated = await Promise.all(submissions.map((s) => getSubmission(s.id).catch(() => s)));
        }
        const articles = hydrated.map((s) => normalizeSubmission(s, issue));
        if (!cancelled) setState({ data: { issue, articles }, loading: false, error: null });
      } catch (error) {
        if (!cancelled) setState({ data: null, loading: false, error: error as Error });
      }
    })();

    return () => { cancelled = true; };
  }, []);

  return state;
}

// Convenience: a single article with its parent issue context.
export function useArticle(id: string | number | undefined): AsyncState<NormalizedArticle> {
  const numericId = id != null ? Number(id) : undefined;
  const [state, setState] = useState<AsyncState<NormalizedArticle>>({ data: null, loading: true, error: null });

  useEffect(() => {
    if (!numericId || Number.isNaN(numericId)) {
      setState({ data: null, loading: false, error: new Error("Invalid article id") });
      return;
    }
    let cancelled = false;
    setState({ data: null, loading: true, error: null });

    (async () => {
      try {
        const submission = await getSubmission(numericId);
        let issue: OJSIssue | undefined;
        const pub = submission.publications?.find((p) => p.id === submission.currentPublicationId)
          || submission.publications?.[submission.publications.length - 1];
        if (pub?.issueId) {
          issue = await getIssue(pub.issueId).catch(() => undefined);
        }
        const article = normalizeSubmission(submission, issue);
        if (!cancelled) setState({ data: article, loading: false, error: null });
      } catch (error) {
        if (!cancelled) setState({ data: null, loading: false, error: error as Error });
      }
    })();

    return () => { cancelled = true; };
  }, [numericId]);

  return state;
}
