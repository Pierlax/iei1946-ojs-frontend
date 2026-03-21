// ============================================================
// ArticleDetail Page - IEI 1946
// Shows full article metadata, abstract, DOI, keywords, JEL
// Uses static data first, falls back to OJS API
// ============================================================

import { useRoute, Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  CURRENT_ISSUE,
  EDITORS_CHOICE,
  type Article,
} from "@/lib/data";
import {
  ArrowLeft,
  FileText,
  Download,
  ExternalLink,
  BookOpen,
  Share2,
  ChevronRight,
} from "lucide-react";

function findArticle(id: string): Article | undefined {
  const allArticles = [
    ...CURRENT_ISSUE.articles,
    ...EDITORS_CHOICE,

  ];
  return allArticles.find((a) => String(a.id) === id);
}

export default function ArticleDetail() {
  const [, params] = useRoute("/article/:id");
  const id = params?.id;
  const article = id ? findArticle(id) : undefined;

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 container py-16">
          <div className="max-w-2xl mx-auto text-center">
            <FileText size={48} className="mx-auto text-muted-foreground mb-4" />
            <h1 className="font-serif text-2xl font-bold text-[#1a3c5e] mb-3">
              Article Not Found
            </h1>
            <p className="text-muted-foreground mb-6">
              The article you are looking for could not be found. It may have been
              removed or the URL may be incorrect.
            </p>
            <Link
              href="/review"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#00b4a0] text-white text-sm font-semibold rounded-md hover:bg-[#00a090] transition-colors"
            >
              <BookOpen size={16} /> Browse the Review
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const authorNames = article.authors.map((a) => a.name).join(", ");
  const volumeInfo = `Volume ${article.volume} - Issue ${article.issue}, ${article.month} ${article.year}`;
  const doiUrl = article.doi ? `https://doi.org/${article.doi}` : undefined;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-border">
        <div className="container py-3">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-[#00b4a0] transition-colors">
              Home
            </Link>
            <ChevronRight size={14} />
            <Link href="/review" className="hover:text-[#00b4a0] transition-colors">
              Review
            </Link>
            <ChevronRight size={14} />
            <span className="text-foreground truncate max-w-xs">
              {article.title}
            </span>
          </nav>
        </div>
      </div>

      <main className="flex-1">
        <div className="container py-10 lg:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* Sidebar */}
            <aside className="lg:col-span-1 order-2 lg:order-1 space-y-5">
              {/* Submit a Paper */}
              <div className="bg-[#00b4a0] rounded-lg p-5 text-white">
                <h3 className="font-serif text-lg font-bold">Submit a Paper</h3>
                <p className="text-white/80 text-sm mt-2">
                  No APCs. Free submission.
                </p>
                <a
                  href="https://ojs.iei1946.it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full gap-2 mt-3 px-4 py-2 bg-white text-[#00b4a0] text-sm font-bold rounded-md hover:bg-white/90 transition-colors"
                >
                  SUBMIT <ExternalLink size={14} />
                </a>
              </div>

              {/* Recent Articles */}
              <div className="bg-white rounded-lg border border-border p-5">
                <h3 className="font-serif text-base font-bold text-[#1a3c5e] mb-3">
                  Recent Articles
                </h3>
                <div className="space-y-3">
                  {CURRENT_ISSUE.articles
                    .filter((a) => String(a.id) !== id)
                    .slice(0, 4)
                    .map((a) => (
                      <Link
                        key={a.id}
                        href={`/article/${a.id}`}
                        className="block group"
                      >
                        <p className="text-sm font-medium text-[#1a3c5e] group-hover:text-[#00b4a0] transition-colors leading-snug">
                          {a.title}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {a.authors.map((au) => au.name.split(" ").pop()).join(", ")}
                        </p>
                      </Link>
                    ))}
                </div>
                <Link
                  href="/review"
                  className="inline-flex items-center gap-1 text-sm font-medium text-[#00b4a0] mt-4 hover:underline"
                >
                  GO TO THE SECTION
                </Link>
              </div>

              {/* Review's Choice */}
              <div className="bg-white rounded-lg border border-border p-5">
                <h3 className="font-serif text-base font-bold text-[#1a3c5e] mb-3">
                  Review's Choice
                </h3>
                <div className="space-y-3">
                  {EDITORS_CHOICE.slice(0, 3).map((a) => (
                    <Link
                      key={a.id}
                      href={`/article/${a.id}`}
                      className="block group"
                    >
                      <p className="text-sm font-medium text-[#1a3c5e] group-hover:text-[#00b4a0] transition-colors leading-snug">
                        {a.title}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {a.authors.map((au) => au.name.split(" ").pop()).join(", ")}
                      </p>
                    </Link>
                  ))}
                </div>
                <Link
                  href="/review"
                  className="inline-flex items-center gap-1 text-sm font-medium text-[#00b4a0] mt-4 hover:underline"
                >
                  GO TO THE SECTION
                </Link>
              </div>
            </aside>

            {/* Main content */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              {/* Back button */}
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-[#00b4a0] transition-colors mb-6"
              >
                <ArrowLeft size={16} /> Back
              </button>

              {/* Corresponding Author */}
              {article.authors[0] && (
                <p className="text-sm text-muted-foreground mb-4">
                  Corresponding Author:{" "}
                  <span className="text-[#00b4a0] font-medium">
                    {article.authors[0].name}
                  </span>
                  {article.authors[0].affiliation && (
                    <span>, {article.authors[0].affiliation}</span>
                  )}
                </p>
              )}

              {/* Title */}
              <h1 className="font-serif text-3xl lg:text-4xl font-bold text-[#1a3c5e] leading-tight mb-4">
                {article.title}
              </h1>

              {/* Volume info */}
              <p className="text-sm text-foreground/70 mb-1">{volumeInfo}</p>
              {article.pages && (
                <p className="text-sm text-foreground/70 mb-2">
                  (pp. {article.pages})
                </p>
              )}

              {/* JEL */}
              {article.jel && article.jel.length > 0 && (
                <p className="text-sm text-foreground/70 mb-1">
                  JEL classification:{" "}
                  <strong className="text-[#1a3c5e]">
                    {article.jel.join("; ")}
                  </strong>
                </p>
              )}

              {/* DOI */}
              {doiUrl && (
                <p className="text-sm mb-1">
                  Doi:{" "}
                  <a
                    href={doiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00b4a0] hover:underline"
                  >
                    {article.doi}
                  </a>
                </p>
              )}

              {/* Keywords */}
              {article.keywords && article.keywords.length > 0 && (
                <p className="text-sm text-foreground/70 mb-6">
                  Keywords:{" "}
                  <strong className="text-[#1a3c5e]">
                    {article.keywords.join("; ")}
                  </strong>
                </p>
              )}

              {/* Abstract */}
              {article.abstract && (
                <section className="mt-8 mb-8">
                  <h2 className="font-serif text-2xl font-bold text-[#1a3c5e] mb-4">
                    Abstract
                  </h2>
                  <p className="text-sm text-foreground/80 leading-relaxed text-justify">
                    {article.abstract}
                  </p>
                </section>
              )}

              {/* Download section */}
              <section className="bg-secondary/30 rounded-lg p-6 mt-8">
                <h3 className="font-serif text-xl font-bold text-[#1a3c5e] mb-2">
                  Read the Full Article
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Download the article in PDF format to read and print.
                </p>
                <button
                  onClick={() => {
                    if (article.pdfUrl) {
                      window.open(article.pdfUrl, "_blank");
                    } else {
                      // Fallback to OJS article view
                      window.open(
                        `https://ojs.iei1946.it/index.php/iei/article/view/${article.id}`,
                        "_blank"
                      );
                    }
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#00b4a0] text-white text-sm font-bold rounded-md hover:bg-[#00a090] transition-colors"
                >
                  <Download size={16} /> DOWNLOAD
                </button>
              </section>

              {/* Share */}
              <div className="flex items-center gap-3 mt-6">
                <span className="text-sm text-muted-foreground">Share:</span>
                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: article.title,
                        url: window.location.href,
                      });
                    } else {
                      navigator.clipboard.writeText(window.location.href);
                    }
                  }}
                  className="p-2 rounded-md hover:bg-secondary transition-colors text-muted-foreground hover:text-[#00b4a0]"
                  title="Share"
                >
                  <Share2 size={16} />
                </button>
                {doiUrl && (
                  <a
                    href={doiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-md hover:bg-secondary transition-colors text-muted-foreground hover:text-[#00b4a0]"
                    title="View DOI"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
