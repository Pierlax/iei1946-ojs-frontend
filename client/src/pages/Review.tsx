// ============================================================
// Review Page - IEI 1946
// Current issue, full archive, recent articles — all from OJS.
// ============================================================

import { useMemo, useState } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import {
  JOURNAL,
  EDITORIAL_BOARD,
  REVIEW_METRICS,
  AIMS_AND_SCOPE,
  CALL_FOR_PAPERS,
  EDITORS_NOTE,
  FOUNDERS,
  INDEXING,
  type Article,
} from "@/lib/data";
import { useCurrentIssueArticles, useIssues, useRecentArticles } from "@/hooks/useOJS";
import {
  Calendar,
  Download,
  ExternalLink,
  Search,
  ArrowRight,
  Send,
} from "lucide-react";

export default function Review() {
  const [activeTab, setActiveTab] = useState<"current" | "recent">("current");
  const [archiveYear, setArchiveYear] = useState<string>("");
  const [searchYear, setSearchYear] = useState("");
  const [searchAuthor, setSearchAuthor] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");

  const { data: liveIssue, loading: issueLoading } = useCurrentIssueArticles();
  const { data: issuesList, loading: issuesLoading } = useIssues(100, 0);
  const { data: recentArticlesRaw, loading: recentLoading } = useRecentArticles(10);

  const currentArticles: Article[] = (liveIssue?.articles || []) as unknown as Article[];
  const recentArticles: Article[] = (recentArticlesRaw || []) as unknown as Article[];

  const currentIssueLabel = liveIssue?.issue
    ? `${liveIssue.issue.datePublished ? new Date(liveIssue.issue.datePublished).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }) : ""} — Vol. ${liveIssue.issue.volume ?? ""}${liveIssue.issue.number ? ` Issue ${liveIssue.issue.number}` : ""}`
    : "—";

  const archiveYears = useMemo<number[]>(() => {
    const years = new Set<number>();
    issuesList?.items?.forEach((it) => { if (it.year) years.add(it.year); });
    return Array.from(years).sort((a, b) => b - a);
  }, [issuesList]);

  const archiveIssues = (issuesList?.items || []).filter(
    (it) => !archiveYear || String(it.year) === archiveYear,
  );

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchYear) params.set("year", searchYear);
    if (searchAuthor) params.set("author", searchAuthor);
    if (searchKeyword) params.set("keyword", searchKeyword);
    window.location.href = `/review?${params.toString()}`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <div className="bg-white border-b border-gray-200">
        <div className="container flex items-center gap-4 py-2 text-sm overflow-x-auto">
          <Link href="/" className="text-gray-500 hover:text-[#009e8e] whitespace-nowrap">Home</Link>
          <span className="text-border">|</span>
          <a href="#latest-issue" className="text-gray-500 hover:text-[#009e8e] whitespace-nowrap">Latest Issue</a>
          <span className="text-border">|</span>
          <a href="#archive" className="text-gray-500 hover:text-[#009e8e] whitespace-nowrap">Archive</a>
          <span className="text-border">|</span>
          <Link href="/submission-guidelines" className="text-gray-500 hover:text-[#009e8e] whitespace-nowrap">Submit a Paper</Link>
          <span className="text-border">|</span>
          <a href={JOURNAL.registerUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#009e8e] whitespace-nowrap">Register</a>
          <span className="text-border">|</span>
          <a href={JOURNAL.loginUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#009e8e] whitespace-nowrap">Authors Login</a>
        </div>
      </div>

      <section className="bg-[#1b3a5c] py-12 lg:py-16">
        <div className="container">
          <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white">The Review</h1>
          <p className="text-white/70 mt-3 text-sm leading-relaxed max-w-3xl">
            Since 1948 an important scientific context for economists all over the world published by
            the Chamber of Commerce of Genova, now published in open access.
          </p>
        </div>
      </section>

      <section className="bg-white border-b border-gray-200">
        <div className="container py-4">
          <div className="flex flex-col sm:flex-row items-stretch gap-2">
            <div className="flex items-center gap-2 text-sm text-gray-500 px-2">
              <Search size={16} />
              <span className="font-medium whitespace-nowrap">Search:</span>
            </div>
            <input type="text" placeholder="Year" value={searchYear} onChange={(e) => setSearchYear(e.target.value)} className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-md bg-input focus:outline-none focus:ring-2 focus:ring-[#009e8e]/30" />
            <input type="text" placeholder="Author" value={searchAuthor} onChange={(e) => setSearchAuthor(e.target.value)} className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-md bg-input focus:outline-none focus:ring-2 focus:ring-[#009e8e]/30" />
            <input type="text" placeholder="Keyword" value={searchKeyword} onChange={(e) => setSearchKeyword(e.target.value)} className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-md bg-input focus:outline-none focus:ring-2 focus:ring-[#009e8e]/30" />
            <button onClick={handleSearch} className="px-5 py-2 bg-[#009e8e] text-white text-sm font-semibold rounded hover:bg-[#008a7c] transition-colors">Search</button>
          </div>
        </div>
      </section>

      <main className="flex-1">
        <div className="container py-10 lg:py-16">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex-1">
              <section className="mb-10">
                <h2 className="font-serif text-2xl font-bold text-[#1b3a5c] mb-4">Aims & Scope</h2>
                <p className="text-sm text-gray-600 leading-relaxed text-justify">
                  {AIMS_AND_SCOPE.split("\n\n")[0]}
                </p>
                <Link href="/about" className="inline-flex items-center gap-1 text-sm text-[#009e8e] mt-3 hover:underline">
                  Read more <ArrowRight size={14} />
                </Link>
              </section>

              <section className="mb-10">
                <h2 className="font-serif text-2xl font-bold text-[#1b3a5c] mb-4">Call for Papers</h2>
                <p className="text-sm text-gray-600 leading-relaxed text-justify">
                  {CALL_FOR_PAPERS.split("\n\n")[0]}
                </p>
                <p className="text-xs text-gray-500 mt-3">
                  Indexed in: {INDEXING.join(" · ")}
                </p>
              </section>

              <section className="mb-10 bg-white border border-gray-200 p-6">
                <h3 className="font-serif text-lg font-bold text-[#1b3a5c] mb-4">Review Metrics</h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {Object.values(REVIEW_METRICS).map((metric) => (
                    <div key={metric.label} className="text-center">
                      <span className="font-serif text-2xl font-bold text-[#009e8e]">{metric.value}</span>
                      <span className="text-xs text-gray-500 ml-1">{metric.unit}</span>
                      <p className="text-xs text-gray-500 mt-1">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="latest-issue" className="mb-10 scroll-mt-24">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-serif text-2xl font-bold text-[#1b3a5c]">
                    Latest Issue
                  </h2>
                  <span className="text-sm text-gray-500">
                    <Calendar size={14} className="inline mr-1" />
                    {currentIssueLabel}
                  </span>
                </div>
                <div className="space-y-4">
                  {issueLoading && (
                    <p className="text-sm text-gray-400 italic">Loading latest issue from OJS…</p>
                  )}
                  {!issueLoading && currentArticles.length === 0 && (
                    <div className="border border-dashed border-gray-200 rounded p-6 text-center">
                      <p className="text-sm text-gray-500">No issue has been published yet.</p>
                      <p className="text-xs text-gray-400 mt-1">
                        Publish an issue from OJS to display it here.
                      </p>
                    </div>
                  )}
                  {currentArticles.map((article) => (
                    <ArticleCard key={article.id} article={article} variant="featured" />
                  ))}
                </div>
              </section>

              <section id="archive" className="mb-10 scroll-mt-24">
                <h2 className="font-serif text-2xl font-bold text-[#1b3a5c] mb-4">Archive</h2>
                <div className="bg-white border border-gray-200 p-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                    <div>
                      <h3 className="text-sm font-semibold text-[#1b3a5c]">Browse the archive</h3>
                      <p className="text-xs text-gray-500 mt-1">
                        {issuesLoading
                          ? "Loading issues from OJS…"
                          : `${issuesList?.itemsMax ?? archiveIssues.length} published issues`}
                      </p>
                    </div>
                    {archiveYears.length > 0 && (
                      <select
                        value={archiveYear}
                        onChange={(e) => setArchiveYear(e.target.value)}
                        className="px-3 py-2 text-sm border border-gray-200 rounded-md bg-input focus:outline-none focus:ring-2 focus:ring-[#009e8e]/30"
                      >
                        <option value="">All years</option>
                        {archiveYears.map((year) => (
                          <option key={year} value={year}>{year}</option>
                        ))}
                      </select>
                    )}
                  </div>

                  {archiveYears.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => setArchiveYear("")}
                        className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                          archiveYear === ""
                            ? "bg-[#009e8e] text-white"
                            : "bg-gray-100 text-gray-600 hover:bg-[#009e8e]/10"
                        }`}
                      >
                        All
                      </button>
                      {archiveYears.map((year) => (
                        <button
                          key={year}
                          onClick={() => setArchiveYear(String(year))}
                          className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                            archiveYear === String(year)
                              ? "bg-[#009e8e] text-white"
                              : "bg-gray-100 text-gray-600 hover:bg-[#009e8e]/10"
                          }`}
                        >
                          {year}
                        </button>
                      ))}
                    </div>
                  )}

                  {!issuesLoading && archiveIssues.length === 0 && (
                    <p className="text-sm text-gray-400 italic mt-4">
                      No issues in the archive yet.
                    </p>
                  )}

                  {archiveIssues.length > 0 && (
                    <div className="mt-6 border-t border-gray-200 pt-4 space-y-2">
                      {archiveIssues.map((it) => (
                        <a
                          key={it.id}
                          href={`${JOURNAL.ojsBaseUrl}/index.php/${JOURNAL.ojsJournalPath}/issue/view/${it.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-sm text-[#1b3a5c] hover:text-[#009e8e] transition-colors"
                        >
                          Vol. {it.volume ?? "?"}{it.number ? `, No. ${it.number}` : ""}
                          {it.year ? ` · ${it.year}` : ""}
                          {it.identification ? ` — ${it.identification}` : ""}
                          <ExternalLink size={11} className="inline ml-1 text-gray-400" />
                        </a>
                      ))}
                    </div>
                  )}

                  <div className="mt-6 border-t border-gray-200 pt-4">
                    <h3 className="text-sm font-semibold text-[#1b3a5c] mb-2">Historical archive (1984–2015)</h3>
                    <a
                      href="https://ideas.repec.org/s/ris/ecoint.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-[#009e8e] hover:underline"
                    >
                      View on RePEc <ExternalLink size={12} />
                    </a>
                  </div>

                  <div className="mt-6 border-t border-gray-200 pt-4">
                    <h3 className="text-sm font-semibold text-[#1b3a5c] mb-2">Editor's Archiving Policy</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Authors can archive pre-print (i.e. pre-refereeing) and post-print (i.e. final draft post-refereeing)
                      versions of their articles. Authors can also archive the publisher's version/PDF.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="font-serif text-2xl font-bold text-[#1b3a5c] mb-4">Editor's Note</h2>
                {EDITORS_NOTE.split("\n\n").map((p, i) => (
                  <p key={i} className="text-sm text-gray-600 leading-relaxed mb-4 text-justify italic">{p}</p>
                ))}
                <p className="text-sm font-semibold text-[#1b3a5c]">{EDITORIAL_BOARD.editorInChief}, Editor in Chief</p>
              </section>

              <section className="mb-10">
                <h2 className="font-serif text-2xl font-bold text-[#1b3a5c] mb-4">Founders</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {FOUNDERS.map((f) => (
                    <div key={f.name} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#009e8e] shrink-0" />
                      <span className="text-gray-600">
                        {f.name}
                        {f.role && <span className="text-gray-500 ml-1">({f.role})</span>}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-10">
                <h2 className="font-serif text-2xl font-bold text-[#1b3a5c] mb-4">Referees</h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  The Editors of <em>{JOURNAL.fullName}</em> would like to thank all the referees who
                  contributed to the review process during the past year.
                </p>
                <button className="inline-flex items-center gap-2 px-4 py-2 bg-[#009e8e] text-white text-sm font-semibold rounded hover:bg-[#008a7c] transition-colors">
                  <Download size={14} /> Download Referees List (PDF)
                </button>
              </section>

              <section className="mb-10">
                <div className="flex items-center gap-1 border-b border-gray-200 mb-6">
                  {[
                    { key: "current", label: "Current Issue" },
                    { key: "recent", label: "Recent Articles" },
                  ].map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => setActiveTab(tab.key as typeof activeTab)}
                      className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                        activeTab === tab.key
                          ? "border-[#009e8e] text-[#009e8e]"
                          : "border-transparent text-gray-500 hover:text-[#1b3a5c]"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
                <div className="space-y-4">
                  {activeTab === "current" && (
                    <>
                      {issueLoading && (
                        <p className="text-sm text-gray-400 italic">Loading…</p>
                      )}
                      {!issueLoading && currentArticles.length === 0 && (
                        <p className="text-sm text-gray-400 italic">No articles in the current issue.</p>
                      )}
                      {currentArticles.map((a) => (
                        <ArticleCard key={a.id} article={a} />
                      ))}
                    </>
                  )}
                  {activeTab === "recent" && (
                    <>
                      {recentLoading && (
                        <p className="text-sm text-gray-400 italic">Loading…</p>
                      )}
                      {!recentLoading && recentArticles.length === 0 && (
                        <p className="text-sm text-gray-400 italic">No published articles yet.</p>
                      )}
                      {recentArticles.map((a) => (
                        <ArticleCard key={a.id} article={a} />
                      ))}
                    </>
                  )}
                </div>
              </section>
            </div>

            <aside className="lg:w-80 shrink-0 space-y-6">
              <div className="bg-[#009e8e] rounded p-5 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Send size={18} />
                  <h3 className="font-serif text-lg font-bold">Submit a Paper</h3>
                </div>
                <p className="text-white/90 text-xs mt-1">No APCs. Free submission.</p>
                <a href={JOURNAL.submissionUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full gap-2 mt-3 px-4 py-2.5 bg-white text-[#009e8e] text-sm font-bold rounded hover:bg-white/90 transition-colors">
                  SUBMIT <ExternalLink size={14} />
                </a>
              </div>

              <div className="bg-white border border-gray-200 p-5">
                <h3 className="font-serif text-lg font-bold text-[#1b3a5c] mb-2">Register Your Account</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  First-time users should click on "Register" and enter the requested information.
                </p>
                <a href={JOURNAL.registerUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full gap-2 px-4 py-2.5 bg-[#009e8e] text-white text-sm font-bold rounded hover:bg-[#008a7c] transition-colors">
                  REGISTER <ExternalLink size={14} />
                </a>
              </div>

              <div className="bg-white border border-gray-200 p-5">
                <h3 className="font-serif text-lg font-bold text-[#1b3a5c] mb-2">Authors' Login</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  Use the assigned user ID and password to login.
                </p>
                <a href={JOURNAL.loginUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full gap-2 px-4 py-2.5 bg-[#1b3a5c] text-white text-sm font-bold rounded hover:bg-[#152e4a] transition-colors">
                  LOGIN <ExternalLink size={14} />
                </a>
              </div>

              <div className="bg-white border border-gray-200 p-5">
                <h3 className="font-serif text-base font-bold text-[#1b3a5c] mb-3">Quick Search by Author</h3>
                <div className="flex flex-wrap gap-1">
                  {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => (
                    <Link
                      key={letter}
                      href={`/review?author=${letter}`}
                      className="w-7 h-7 flex items-center justify-center text-xs font-medium text-[#1b3a5c] hover:bg-[#009e8e] hover:text-white rounded transition-colors border border-gray-200"
                    >
                      {letter}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
