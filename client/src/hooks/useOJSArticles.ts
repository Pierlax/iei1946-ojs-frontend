import { useState, useEffect } from "react";

export interface OJSArticle {
  id: number;
  title: string;
  authors: string[];
  abstract: string;
  doi?: string;
  publicationDate: string;
  volume?: string;
  issue?: string;
  pages?: string;
  keywords?: string[];
  category?: string;
  url?: string;
  pdfUrl?: string;
}

interface UseOJSArticlesOptions {
  ojsBaseUrl?: string;
  journalPath?: string;
  limit?: number;
  offset?: number;
}

/**
 * Hook for fetching articles from OJS API
 * 
 * OJS exposes REST API at: {baseUrl}/api/v1/journals/{journalPath}/articles
 * 
 * Example usage:
 * const { articles, loading, error } = useOJSArticles({
 *   ojsBaseUrl: 'https://ojs.iei1946.it',
 *   journalPath: 'iei'
 * });
 */
export function useOJSArticles(options: UseOJSArticlesOptions = {}) {
  const [articles, setArticles] = useState<OJSArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const {
    ojsBaseUrl = process.env.REACT_APP_OJS_BASE_URL || "https://ojs.iei1946.it",
    journalPath = "iei",
    limit = 20,
    offset = 0,
  } = options;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        setError(null);

        const apiUrl = `${ojsBaseUrl}/api/v1/journals/${journalPath}/articles?limit=${limit}&offset=${offset}`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`Failed to fetch articles: ${response.statusText}`);
        }

        const data = await response.json();

        // Transform OJS API response to our interface
        const transformedArticles: OJSArticle[] = data.items?.map((item: any) => ({
          id: item.id,
          title: item.title?.en || item.title || "",
          authors: item.authors?.map((a: any) => a.fullName) || [],
          abstract: item.abstract?.en || item.abstract || "",
          doi: item.doiObject?.doi,
          publicationDate: item.datePublished || item.dateSubmitted,
          volume: item.section?.title || "",
          issue: item.issue?.number || "",
          pages: item.pages || "",
          keywords: item.keywords?.en || item.keywords || [],
          category: item.section?.title,
          url: `${ojsBaseUrl}/index.php/${journalPath}/article/view/${item.id}`,
          pdfUrl: item.galleys?.[0]?.file?.downloadUrl,
        })) || [];

        setArticles(transformedArticles);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Unknown error"));
        console.error("Error fetching OJS articles:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [ojsBaseUrl, journalPath, limit, offset]);

  return { articles, loading, error };
}

/**
 * Hook for fetching a single article from OJS API
 */
export function useOJSArticle(articleId: number | null, options: UseOJSArticlesOptions = {}) {
  const [article, setArticle] = useState<OJSArticle | null>(null);
  const [loading, setLoading] = useState(!!articleId);
  const [error, setError] = useState<Error | null>(null);

  const {
    ojsBaseUrl = process.env.REACT_APP_OJS_BASE_URL || "https://ojs.iei1946.it",
    journalPath = "iei",
  } = options;

  useEffect(() => {
    if (!articleId) {
      setArticle(null);
      setLoading(false);
      return;
    }

    const fetchArticle = async () => {
      try {
        setLoading(true);
        setError(null);

        const apiUrl = `${ojsBaseUrl}/api/v1/journals/${journalPath}/articles/${articleId}`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`Failed to fetch article: ${response.statusText}`);
        }

        const data = await response.json();

        const transformedArticle: OJSArticle = {
          id: data.id,
          title: data.title?.en || data.title || "",
          authors: data.authors?.map((a: any) => a.fullName) || [],
          abstract: data.abstract?.en || data.abstract || "",
          doi: data.doiObject?.doi,
          publicationDate: data.datePublished || data.dateSubmitted,
          volume: data.section?.title || "",
          issue: data.issue?.number || "",
          pages: data.pages || "",
          keywords: data.keywords?.en || data.keywords || [],
          category: data.section?.title,
          url: `${ojsBaseUrl}/index.php/${journalPath}/article/view/${data.id}`,
          pdfUrl: data.galleys?.[0]?.file?.downloadUrl,
        };

        setArticle(transformedArticle);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Unknown error"));
        console.error("Error fetching OJS article:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [articleId, ojsBaseUrl, journalPath]);

  return { article, loading, error };
}
