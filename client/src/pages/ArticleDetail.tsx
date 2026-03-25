// ============================================================
// ArticleDetail Page - Elsevier/ScienceDirect Style
// Clean academic layout, navy #1b3a5c, teal #009e8e
// ============================================================

import { useRoute, Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  CURRENT_ISSUE,
  EDITORS_CHOICE,
  JOURNAL,
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
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1 container py-16">
          <div className="max-w-2xl mx-auto text-center">
            <FileText size={48} className="mx-auto text-gray-300 mb-4" />
            <h1 className="font-serif text-2xl font-bold text-[#1b3a5c] mb-3">
              Article Not Found
            </h1>
            <p className="text-gray-500 mb-6">
              The article you are looking for could not be found. It may have been
              removed or the URL may be incorrect.
            </p>
            <Link
              href="/review"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#009e8e] text-white text-sm font-semibold rounded hover:bg-[#008a7c] transition-colors"
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
  const volumeInfo = `Volume ${article.volume}${article.issue ? `, Issue ${article.issue}` : ""}, ${article.month} ${article.year}`;
  const doiUrl = article.doi ? `https://doi.org/${article.doi}` : undefined;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Breadcrumb - Elsevier style */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container py-3">
          <nav className="flex items-center gap-2 text-xs text-gray-500">
            <Link href="/" className="hover:text-[#009e8e] transition-colors">
              Home
            </Link>
            <ChevronRight size={12} />
            <Link href="/review" className="hover:text-[#009e8e] transition-colors">
              Review
            </Link>
            <ChevronRight size={12} />
            <span className="text-gray-700 truncate max-w-xs font-medium">
              {article.title}
            </span>
          </nav>
        </div>
      </div>

      <main className="flex-1">
        <div className="container py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* Sidebar */}
            <aside className="lg:col-span-1 order-2 lg:order-1 space-y-5">
              {/* Submit a Paper */}
              <div className="bg-[#1b3a5c] rounded p-5 text-white">
                <h3 className="font-serif text-base font-bold">Submit a Paper</h3>
                <p className="text-white/70 text-xs mt-2 leading-relaxed">
                  No APCs. Free submission.
                </p>
                <a
                  href={JOURNAL.submissionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full gap-2 mt-3 px-4 py-2 bg-[#009e8e] text-white text-sm font-bold rounded hover:bg-[#008a7c] transition-colors"
                >
                  SUBMIT <ExternalLink size={14} />
                </a>
              </div>

              {/* Recent Articles */}
              <div className="border border-gray-200 rounded p-5">
                <h3 className="font-serif text-sm font-bold text-[#1b3a5c] mb-3">
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
                        <p className="text-xs font-medium text-[#1b3a5c] group-hover:text-[#009e8e] transition-colors leading-snug">
                          {a.title}
                        </p>
                        <p className="text-xs text-gray-400 mt-0.5">
                          {a.authors.map((au) => au.name.split(" ").pop()).join(", ")}
                        </p>
                      </Link>
                    ))}
                </div>
                <Link
                  href="/review"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#009e8e] mt-4 hover:underline"
                >
                  GO TO THE SECTION
                </Link>
              </div>

              {/* Editor's Choice */}
              <div className="border border-gray-200 rounded p-5">
                <h3 className="font-serif text-sm font-bold text-[#1b3a5c] mb-3">
                  Editor's Choice
                </h3>
                <div className="space-y-3">
                  {EDITORS_CHOICE.slice(0, 3).map((a) => (
                    <Link
                      key={a.id}
                      href={`/article/${a.id}`}
                      className="block group"
                    >
                      <p className="text-xs font-medium text-[#1b3a5c] group-hover:text-[#009e8e] transition-colors leading-snug">
                        {a.title}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {a.authors.map((au) => au.name.split(" ").pop()).join(", ")}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>

            {/* Main content */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              {/* Back button */}
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-2 text-xs text-gray-500 hover:text-[#009e8e] transition-colors mb-6"
              >
                <ArrowLeft size={14} /> Back
              </button>

              {/* Article type badge */}
              <div className="mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#009e8e]">
                  Research Article
                </span>
              </div>

              {/* Title */}
              <h1 className="font-serif text-2xl lg:text-3xl font-bold text-[#1b3a5c] leading-tight mb-4">
                {article.title}
              </h1>

              {/* Authors with affiliations */}
              <div className="mb-4">
                {article.authors.map((author, i) => (
                  <span key={author.name} className="text-sm text-[#1b3a5c]/80">
                    {author.name}
                    {author.affiliation && (
                      <span className="text-xs text-gray-400 ml-1">({author.affiliation})</span>
                    )}
                    {i < article.authors.length - 1 && <span className="text-gray-300 mx-1">&middot;</span>}
                  </span>
                ))}
              </div>

              {/* Metadata bar */}
              <div className="bg-gray-50 border border-gray-200 rounded p-4 mb-6">
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                  <div>
                    <span className="text-gray-400 text-xs">Volume</span>
                    <p className="text-[#1b3a5c] font-medium text-sm">{volumeInfo}</p>
                  </div>
                  {article.pages && (
                    <div>
                      <span className="text-gray-400 text-xs">Pages</span>
                      <p className="text-[#1b3a5c] font-medium text-sm">{article.pages}</p>
                    </div>
                  )}
                  {article.doi && (
                    <div>
                      <span className="text-gray-400 text-xs">DOI</span>
                      <p>
                        <a
                          href={doiUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#009e8e] text-sm font-medium hover:underline"
                        >
                          {article.doi}
                        </a>
                      </p>
                    </div>
                  )}
                </div>
                {article.jel && article.jel.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <span className="text-gray-400 text-xs">JEL Classification</span>
                    <p className="text-[#1b3a5c] font-medium text-sm mt-0.5">{article.jel.join(", ")}</p>
                  </div>
                )}
                {article.keywords && article.keywords.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <span className="text-gray-400 text-xs">Keywords</span>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {article.keywords.map((kw) => (
                        <span key={kw} className="px-2.5 py-0.5 text-xs bg-white border border-gray-200 text-gray-600 rounded">
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Abstract */}
              {article.abstract && (
                <section className="mb-8">
                  <h2 className="font-serif text-xl font-bold text-[#1b3a5c] mb-3 pb-2 border-b border-gray-200">
                    Abstract
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed text-justify">
                    {article.abstract}
                  </p>
                </section>
              )}

              {/* Download section */}
              <section className="bg-gray-50 border border-gray-200 rounded p-6 mt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#009e8e]/10 rounded flex items-center justify-center shrink-0">
                    <Download size={20} className="text-[#009e8e]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-lg font-bold text-[#1b3a5c]">
                      Read the Full Article
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 mb-3">
                      Download the article in PDF format to read and print.
                    </p>
                    <button
                      onClick={() => {
                        if (article.pdfUrl) {
                          window.open(article.pdfUrl, "_blank");
                        } else {
                          window.open(
                            `${JOURNAL.ojsBaseUrl}/index.php/iei/article/view/${article.id}`,
                            "_blank"
                          );
                        }
                      }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#009e8e] text-white text-sm font-bold rounded hover:bg-[#008a7c] transition-colors"
                    >
                      <Download size={16} /> DOWNLOAD PDF
                    </button>
                  </div>
                </div>
              </section>

              {/* Share */}
              <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200">
                <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Share:</span>
                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({ title: article.title, url: window.location.href });
                    } else {
                      navigator.clipboard.writeText(window.location.href);
                    }
                  }}
                  className="p-2 rounded hover:bg-gray-100 transition-colors text-gray-400 hover:text-[#009e8e]"
                  title="Share"
                >
                  <Share2 size={16} />
                </button>
                {doiUrl && (
                  <a
                    href={doiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded hover:bg-gray-100 transition-colors text-gray-400 hover:text-[#009e8e]"
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
