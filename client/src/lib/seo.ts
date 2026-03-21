/**
 * SEO Configuration for Economia Internazionale
 * Helps with search engine optimization and social media sharing
 */

export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: "website" | "article";
  author?: string;
  publishedDate?: string;
  modifiedDate?: string;
}

export const defaultSEO: SEOMetadata = {
  title: "Economia Internazionale / International Economics",
  description:
    "A peer-reviewed, open access journal committed to advancing scholarly research on the economics of open economies. Published by the Chamber of Commerce of Genova since 1948.",
  keywords: [
    "international economics",
    "open access journal",
    "peer-reviewed",
    "international trade",
    "macroeconomics",
    "international finance",
    "economic policy",
  ],
  type: "website",
};

export function generateMetaTags(seo: SEOMetadata): Record<string, string> {
  return {
    "og:title": seo.title,
    "og:description": seo.description,
    "og:type": seo.type || "website",
    "og:image": seo.image || "",
    "og:url": seo.url || "",
    "twitter:card": "summary_large_image",
    "twitter:title": seo.title,
    "twitter:description": seo.description,
    "twitter:image": seo.image || "",
    "article:author": seo.author || "",
    "article:published_time": seo.publishedDate || "",
    "article:modified_time": seo.modifiedDate || "",
  };
}

export function updatePageMeta(seo: SEOMetadata): void {
  // Update title
  document.title = seo.title;

  // Update or create meta tags
  const metaTags = generateMetaTags(seo);
  Object.entries(metaTags).forEach(([name, content]) => {
    if (!content) return;

    let element = document.querySelector(`meta[property="${name}"]`);
    if (!element) {
      element = document.createElement("meta");
      element.setAttribute("property", name);
      document.head.appendChild(element);
    }
    element.setAttribute("content", content);
  });

  // Update keywords
  if (seo.keywords && seo.keywords.length > 0) {
    let keywordsElement = document.querySelector('meta[name="keywords"]');
    if (!keywordsElement) {
      keywordsElement = document.createElement("meta");
      keywordsElement.setAttribute("name", "keywords");
      document.head.appendChild(keywordsElement);
    }
    keywordsElement.setAttribute("content", seo.keywords.join(", "));
  }
}
