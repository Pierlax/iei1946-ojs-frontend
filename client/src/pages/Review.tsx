// ============================================================
// Review Page - IEI 1946
// Current Issue, Archive, Editor's Choice, Referees
// ============================================================

import { useState } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import {
  JOURNAL,
  EDITORIAL_BOARD,
  CURRENT_ISSUE,
  EDITORS_CHOICE,
  REVIEW_METRICS,
  AIMS_AND_SCOPE,
  CALL_FOR_PAPERS,
  EDITORS_NOTE,
  FOUNDERS,
  INDEXING,
} from "@/lib/data";
import {
  BookOpen,
  Calendar,
  Download,
  ExternalLink,
  Search,
  ArrowRight,
  Send,
  FileText,
} from "lucide-react";

const ARCHIVE_YEARS = Array.from({ length: 11 }, (_, i) => 2026 - i); // 2026 to 2016

export default function Review() {
  const [activeTab, setActiveTab] = useState<"current" | "editors" | "recent">("current");
  const [archiveYear, setArchiveYear] = useState("2026");
  const [searchYear, setSearchYear] = useState("");
  const [searchAuthor, setSearchAuthor] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Sub-navigation */}
      <div className="bg-white border-b border-border">
        <div className="container flex items-center gap-4 py-2 text-sm overflow-x-auto">
          <Link href="/" className="text-muted-foreground hover:text-[#00b4a0] whitespace-nowrap">Home</Link>
          <span className="text-border">|</span>
          <a href="#latest-issue" className="text-muted-foreground hover:text-[#00b4a0] whitespace-nowrap">Latest Issue</a>
          <span className="text-border">|</span>
          <a href="#archive" className="text-muted-foreground hover:text-[#00b4a0] whitespace-nowrap">Archive</a>
          <span className="text-border">|</span>
          <Link href="/submission-guidelines" className="text-muted-foreground hover:text-[#00b4a0] whitespace-nowrap">Submit a Paper</Link>
          <span className="text-border">|</span>
          <a href={JOURNAL.submissionUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#00b4a0] whitespace-nowrap">Register</a>
          <span className="text-border">|</span>
          <a href={JOURNAL.submissionUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#00b4a0] whitespace-nowrap">Authors Login</a>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-[#1a3c5e] py-12 lg:py-16">
        <div className="container">
          <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white">The Review</h1>
          <p className="text-white/70 mt-3 text-sm leading-relaxed max-w-3xl">
            Since 1948 an important scientific context for economists all over the world published by
            the Chamber of Commerce of Genova, now published in open access.
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="bg-white border-b border-border">
        <div className="container py-4">
          <div className="flex flex-col sm:flex-row items-stretch gap-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground px-2">
              <Search size={16} />
              <span className="font-medium whitespace-nowrap">Search:</span>
            </div>
            <input type="text" placeholder="Year" value={searchYear} onChange={(e) => setSearchYear(e.target.value)} className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-input focus:outline-none focus:ring-2 focus:ring-[#00b4a0]/30" />
            <input type="text" placeholder="Author" value={searchAuthor} onChange={(e) => setSearchAuthor(e.target.value)} className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-input focus:outline-none focus:ring-2 focus:ring-[#00b4a0]/30" />
            <input type="text" placeholder="Keyword" value={searchKeyword} onChange={(e) => setSearchKeyword(e.target.value)} className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-input focus:outline-none focus:ring-2 focus:ring-[#00b4a0]/30" />
            <button className="px-5 py-2 bg-[#00b4a0] text-white text-sm font-semibold rounded-md hover:bg-[#00a090] transition-colors">Search</button>
          </div>
        </div>
      </section>

      <main className="flex-1">
        <div className="container py-10 lg:py-16">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Main content */}
            <div className="flex-1">
              {/* Aims & Scope */}
              <section className="mb-10">
                <h2 className="font-serif text-2xl font-bold text-[#1a3c5e] mb-4">Aims & Scope</h2>
                <p className="text-sm text-foreground/80 leading-relaxed text-justify">
                  {AIMS_AND_SCOPE.split("\n\n")[0]}
                </p>
                <Link href="/about" className="inline-flex items-center gap-1 text-sm text-[#00b4a0] mt-3 hover:underline">
                  Read more <ArrowRight size={14} />
                </Link>
              </section>

              {/* Call for Papers */}
              <section className="mb-10">
                <h2 className="font-serif text-2xl font-bold text-[#1a3c5e] mb-4">Call for Papers</h2>
                <p className="text-sm text-foreground/80 leading-relaxed text-justify">
                  {CALL_FOR_PAPERS.split("\n\n")[0]}
                </p>
                <p className="text-xs text-muted-foreground mt-3">
                  Indexed in: {INDEXING.join(" \u00b7 ")}
                </p>
              </section>

              {/* Review Metrics */}
              <section className="mb-10 bg-white rounded-lg border border-border p-6">
                <h3 className="font-serif text-lg font-bold text-[#1a3c5e] mb-4">Review Metrics</h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {Object.values(REVIEW_METRICS).map((metric) => (
                    <div key={metric.label} className="text-center">
                      <span className="font-serif text-2xl font-bold text-[#00b4a0]">{metric.value}</span>
                      <span className="text-xs text-muted-foreground ml-1">{metric.unit}</span>
                      <p className="text-xs text-muted-foreground mt-1">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Latest Issue */}
              <section id="latest-issue" className="mb-10 scroll-mt-24">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-serif text-2xl font-bold text-[#1a3c5e]">
                    Latest Issue
                  </h2>
                  <span className="text-sm text-muted-foreground">
                    <Calendar size={14} className="inline mr-1" />
                    {CURRENT_ISSUE.publicationDate} &mdash; {CURRENT_ISSUE.volume} Issue {CURRENT_ISSUE.issue}
                  </span>
                </div>
                <div className="space-y-4">
                  {CURRENT_ISSUE.articles.map((article) => (
                    <ArticleCard key={article.id} article={article} variant="featured" />
                  ))}
                </div>
              </section>

              {/* Archive */}
              <section id="archive" className="mb-10 scroll-mt-24">
                <h2 className="font-serif text-2xl font-bold text-[#1a3c5e] mb-4">Archive</h2>
                <div className="bg-white rounded-lg border border-border p-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                    <div>
                      <h3 className="text-sm font-semibold text-[#1a3c5e]">Browse articles from 2016 to 2026</h3>
                      <p className="text-xs text-muted-foreground mt-1">Select a year to browse the archive</p>
                    </div>
                    <select
                      value={archiveYear}
                      onChange={(e) => setArchiveYear(e.target.value)}
                      className="px-3 py-2 text-sm border border-border rounded-md bg-input focus:outline-none focus:ring-2 focus:ring-[#00b4a0]/30"
                    >
                      {ARCHIVE_YEARS.map((year) => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {ARCHIVE_YEARS.map((year) => (
                      <button
                        key={year}
                        onClick={() => setArchiveYear(String(year))}
                        className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                          archiveYear === String(year)
                            ? "bg-[#00b4a0] text-white"
                            : "bg-secondary text-secondary-foreground hover:bg-[#00b4a0]/10"
                        }`}
                      >
                        {year}
                      </button>
                    ))}
                  </div>

                  <div className="mt-6 border-t border-border pt-4">
                    <h3 className="text-sm font-semibold text-[#1a3c5e] mb-2">Browse articles from 1984 to 2015</h3>
                    <a
                      href="https://ideas.repec.org/s/ris/ecoint.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-[#00b4a0] hover:underline"
                    >
                      View on RePEc <ExternalLink size={12} />
                    </a>
                  </div>

                  <div className="mt-6 border-t border-border pt-4">
                    <h3 className="text-sm font-semibold text-[#1a3c5e] mb-2">Editor's Archiving Policy</h3>
                    <p className="text-xs text-foreground/70 leading-relaxed">
                      Authors can archive pre-print (i.e. pre-refereeing) and post-print (i.e. final draft post-refereeing)
                      versions of their articles. Authors can also archive the publisher's version/PDF.
                    </p>
                  </div>
                </div>
              </section>

              {/* Editor's Note */}
              <section className="mb-10">
                <h2 className="font-serif text-2xl font-bold text-[#1a3c5e] mb-4">Editor's Note</h2>
                {EDITORS_NOTE.split("\n\n").map((p, i) => (
                  <p key={i} className="text-sm text-foreground/80 leading-relaxed mb-4 text-justify italic">{p}</p>
                ))}
                <p className="text-sm font-semibold text-[#1a3c5e]">{EDITORIAL_BOARD.editorInChief}, Editor in Chief</p>
              </section>

              {/* Founders */}
              <section className="mb-10">
                <h2 className="font-serif text-2xl font-bold text-[#1a3c5e] mb-4">Founders</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {FOUNDERS.map((f) => (
                    <div key={f.name} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00b4a0] shrink-0" />
                      <span className="text-foreground/80">
                        {f.name}
                        {f.role && <span className="text-muted-foreground ml-1">({f.role})</span>}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Referees */}
              <section className="mb-10">
                <h2 className="font-serif text-2xl font-bold text-[#1a3c5e] mb-4">Referees</h2>
                <p className="text-sm text-foreground/80 leading-relaxed mb-3">
                  The Editors of <em>{JOURNAL.fullName}</em> would like to thank all the referees who
                  contributed to the review process during the past year.
                </p>
                <button className="inline-flex items-center gap-2 px-4 py-2 bg-[#00b4a0] text-white text-sm font-semibold rounded-md hover:bg-[#00a090] transition-colors">
                  <Download size={14} /> Download 2025 Referees List (PDF)
                </button>
              </section>

              {/* Articles Tabs */}
              <section className="mb-10">
                <div className="flex items-center gap-1 border-b border-border mb-6">
                  {[
                    { key: "current", label: "Current Issue" },
                    { key: "editors", label: "Editor's Choice" },
                    { key: "recent", label: "Recent Articles" },
                  ].map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => setActiveTab(tab.key as typeof activeTab)}
                      className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                        activeTab === tab.key
                          ? "border-[#00b4a0] text-[#00b4a0]"
                          : "border-transparent text-muted-foreground hover:text-[#1a3c5e]"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
                <div className="space-y-4">
                  {activeTab === "current" && CURRENT_ISSUE.articles.map((a) => (
                    <ArticleCard key={a.id} article={a} />
                  ))}
                  {activeTab === "editors" && EDITORS_CHOICE.map((a) => (
                    <ArticleCard key={a.id} article={a} />
                  ))}
                  {activeTab === "recent" && CURRENT_ISSUE.articles.map((a) => (
                    <ArticleCard key={a.id} article={a} />
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="lg:w-80 shrink-0 space-y-6">
              {/* Submit */}
              <div className="bg-[#00b4a0] rounded-lg p-5 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Send size={18} />
                  <h3 className="font-serif text-lg font-bold">Submit a Paper</h3>
                </div>
                <p className="text-white/90 text-xs mt-1">No APCs. Free submission.</p>
                <a href={JOURNAL.submissionUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full gap-2 mt-3 px-4 py-2.5 bg-white text-[#00b4a0] text-sm font-bold rounded-md hover:bg-white/90 transition-colors">
                  SUBMIT <ExternalLink size={14} />
                </a>
              </div>

              {/* Register */}
              <div className="bg-white rounded-lg border border-border p-5">
                <h3 className="font-serif text-lg font-bold text-[#1a3c5e] mb-2">Register Your Account</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  First-time users should click on "Register" and enter the requested information.
                </p>
                <a href={JOURNAL.submissionUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full gap-2 px-4 py-2.5 bg-[#00b4a0] text-white text-sm font-bold rounded-md hover:bg-[#00a090] transition-colors">
                  REGISTER <ExternalLink size={14} />
                </a>
              </div>

              {/* Login */}
              <div className="bg-white rounded-lg border border-border p-5">
                <h3 className="font-serif text-lg font-bold text-[#1a3c5e] mb-2">Authors' Login</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Use the assigned user ID and password to login.
                </p>
                <a href={JOURNAL.submissionUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full gap-2 px-4 py-2.5 bg-[#1a3c5e] text-white text-sm font-bold rounded-md hover:bg-[#15324e] transition-colors">
                  LOGIN <ExternalLink size={14} />
                </a>
              </div>

              {/* A-Z Author Search */}
              <div className="bg-white rounded-lg border border-border p-5">
                <h3 className="font-serif text-base font-bold text-[#1a3c5e] mb-3">Quick Search by Author</h3>
                <div className="flex flex-wrap gap-1">
                  {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => (
                    <Link
                      key={letter}
                      href={`/review?author=${letter}`}
                      className="w-7 h-7 flex items-center justify-center text-xs font-medium text-[#1a3c5e] hover:bg-[#00b4a0] hover:text-white rounded transition-colors border border-border"
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
