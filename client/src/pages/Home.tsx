// ============================================================
// Homepage - IEI 1946
// Design: Institutional Elegance
// Replicates all content from the current iei1946.it homepage
// ============================================================

import { useState } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import {
  JOURNAL,
  EDITORIAL_BOARD,
  REVIEW_METRICS,
  CURRENT_ISSUE,
  EDITORS_CHOICE,
  AIMS_AND_SCOPE,
  CALL_FOR_PAPERS,
} from "@/lib/data";
import {
  BookOpen,
  Send,
  Clock,
  FileText,
  ArrowRight,
  Search,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<"current" | "editors" | "recent">("current");
  const [searchYear, setSearchYear] = useState("");
  const [searchAuthor, setSearchAuthor] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSearch = () => {
    // Will connect to OJS search API
    const params = new URLSearchParams();
    if (searchYear) params.set("year", searchYear);
    if (searchAuthor) params.set("author", searchAuthor);
    if (searchKeyword) params.set("keyword", searchKeyword);
    window.location.href = `/review?${params.toString()}`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-[#1a3c5e] overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${JOURNAL.heroUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a3c5e] via-[#1a3c5e]/95 to-[#1a3c5e]/80" />
        <div className="container relative py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            {/* Left: Journal info */}
            <div className="lg:col-span-3">
              <motion.div initial="hidden" animate="visible" variants={fadeUp}>
                <h1 className="font-serif text-3xl lg:text-5xl font-bold text-white leading-tight">
                  Economia Internazionale
                </h1>
                <p className="font-serif text-xl lg:text-2xl italic text-white/70 mt-1">
                  / International Economics
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/80">
                  <span className="px-3 py-1 border border-white/20 rounded-full">
                    ISSN: {JOURNAL.issn}
                  </span>
                  <span>Est. {JOURNAL.foundedYear}</span>
                  <span>Open Access</span>
                  <span>Peer-Reviewed</span>
                </div>
                <div className="mt-6 text-white/80 text-sm leading-relaxed max-w-2xl">
                  <p>
                    <strong className="text-white">Editor in Chief:</strong>{" "}
                    {EDITORIAL_BOARD.editorInChief}
                  </p>
                  <p className="mt-1">
                    <strong className="text-white">Co-Editors:</strong>{" "}
                    {EDITORIAL_BOARD.coEditors.join(", ")}
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/review"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#00b4a0] text-white text-sm font-semibold rounded-md hover:bg-[#00a090] transition-colors"
                  >
                    <BookOpen size={16} /> Browse the Review
                  </Link>
                  <Link
                    href="/submission-guidelines"
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/30 text-white text-sm font-semibold rounded-md hover:bg-white/10 transition-colors"
                  >
                    <Send size={16} /> Submit a Paper
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Right: Submit a paper card */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-[#00b4a0] rounded-lg p-6 text-white"
              >
                <h2 className="font-serif text-2xl font-bold">Submit a Paper</h2>
                <p className="text-white/90 text-sm mt-2 leading-relaxed">
                  Before submitting your manuscript, please view the Submission Guidelines.
                  Submission is free of charge and no article processing charges (APCs) are applied.
                </p>
                <div className="mt-5 flex flex-col gap-2">
                  <a
                    href={JOURNAL.submissionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white text-[#00b4a0] text-sm font-bold rounded-md hover:bg-white/90 transition-colors"
                  >
                    SUBMIT <ExternalLink size={14} />
                  </a>
                  <Link
                    href="/submission-guidelines"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-white/40 text-white text-sm font-medium rounded-md hover:bg-white/10 transition-colors"
                  >
                    Submission Guidelines
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="bg-white border-b border-border">
        <div className="container py-4">
          <div className="flex flex-col sm:flex-row items-stretch gap-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground px-2">
              <Search size={16} />
              <span className="font-medium whitespace-nowrap">Search articles:</span>
            </div>
            <input
              type="text"
              placeholder="Year"
              value={searchYear}
              onChange={(e) => setSearchYear(e.target.value)}
              className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-input focus:outline-none focus:ring-2 focus:ring-[#00b4a0]/30"
            />
            <input
              type="text"
              placeholder="Author"
              value={searchAuthor}
              onChange={(e) => setSearchAuthor(e.target.value)}
              className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-input focus:outline-none focus:ring-2 focus:ring-[#00b4a0]/30"
            />
            <input
              type="text"
              placeholder="Keyword"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-input focus:outline-none focus:ring-2 focus:ring-[#00b4a0]/30"
            />
            <button
              onClick={handleSearch}
              className="px-5 py-2 bg-[#00b4a0] text-white text-sm font-semibold rounded-md hover:bg-[#00a090] transition-colors"
            >
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Three-column info section: Aims & Scope, Call for Papers, Current Issue */}
      <section className="bg-background py-14 lg:py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Aims & Scope */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#00b4a0] mb-2">
                Review
              </p>
              <h2 className="font-serif text-2xl font-bold text-[#1a3c5e] mb-4">
                Aims & Scope
              </h2>
              <p className="text-sm text-foreground/80 leading-relaxed line-clamp-[12]">
                {AIMS_AND_SCOPE.split("\n\n")[0]}
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-1 text-sm font-medium text-[#00b4a0] mt-4 hover:underline"
              >
                More Info <ArrowRight size={14} />
              </Link>
            </div>

            {/* Call for Papers */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#00b4a0] mb-2">
                Announcements
              </p>
              <h2 className="font-serif text-2xl font-bold text-[#1a3c5e] mb-4">
                Call for Papers
              </h2>
              <p className="text-sm text-foreground/80 leading-relaxed">
                {CALL_FOR_PAPERS.split("\n\n")[0]}
              </p>
              <p className="text-sm text-foreground/80 leading-relaxed mt-3">
                To submit an article, authors are requested to{" "}
                <a
                  href={JOURNAL.submissionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00b4a0] hover:underline"
                >
                  register
                </a>{" "}
                and follow the{" "}
                <Link href="/submission-guidelines" className="text-[#00b4a0] hover:underline">
                  Submission Guidelines
                </Link>
                .
              </p>
              <p className="text-xs text-muted-foreground mt-3">
                Indexed in: {["RePEc", "Crossref", "Econpapers", "Econlit", "Google Scholar"].join(" \u00b7 ")}
              </p>
            </div>

            {/* Current Issue */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#00b4a0] mb-2">
                Quick Link
              </p>
              <h2 className="font-serif text-2xl font-bold text-[#1a3c5e] mb-4">
                View Current Issue
              </h2>
              <p className="text-sm text-foreground/80 mb-3">
                Latest issue available for consultation and download:
              </p>
              <p className="text-sm font-semibold text-[#1a3c5e]">
                Volume {CURRENT_ISSUE.volume} Issue {CURRENT_ISSUE.issue} - {CURRENT_ISSUE.month}{" "}
                {CURRENT_ISSUE.year}
              </p>
              <div className="mt-3 space-y-2">
                {CURRENT_ISSUE.articles.map((article) => (
                  <Link
                    key={article.id}
                    href={`/article/${article.id}`}
                    className="block text-sm text-foreground/70 hover:text-[#00b4a0] transition-colors"
                  >
                    {article.title}{" "}
                    <span className="text-muted-foreground">
                      ({article.authors.map((a) => a.name.split(" ").pop()).join(", ")})
                    </span>
                  </Link>
                ))}
              </div>
              <Link
                href="/review"
                className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-[#00b4a0] text-white text-sm font-semibold rounded-md hover:bg-[#00a090] transition-colors"
              >
                Current Issue <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Review Metrics */}
      <section className="bg-white border-y border-border">
        <div className="container py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.values(REVIEW_METRICS).map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="font-serif text-3xl font-bold text-[#00b4a0]">
                    {metric.value}
                  </span>
                  <span className="text-sm text-muted-foreground">{metric.unit}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section with Tabs */}
      <section className="bg-background py-14 lg:py-20">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Main content */}
            <div className="flex-1">
              {/* Tabs */}
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
                <Link
                  href="/review"
                  className="ml-auto text-sm text-[#00b4a0] hover:underline flex items-center gap-1"
                >
                  Go to Review <ArrowRight size={14} />
                </Link>
              </div>

              {/* Tab content */}
              <div className="space-y-4">
                {activeTab === "current" &&
                  CURRENT_ISSUE.articles.map((article) => (
                    <ArticleCard key={article.id} article={article} variant="featured" />
                  ))}
                {activeTab === "editors" &&
                  EDITORS_CHOICE.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                {activeTab === "recent" &&
                  CURRENT_ISSUE.articles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:w-80 shrink-0 space-y-6">
              {/* Register */}
              <div className="bg-white rounded-lg border border-border p-5">
                <h3 className="font-serif text-lg font-bold text-[#1a3c5e] mb-2">
                  Register Your Account
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  First-time users should click on "Register" and enter the requested information.
                  Upon successful registration, you will receive an e-mail with instructions to
                  verify your registration.
                </p>
                <a
                  href={JOURNAL.submissionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full gap-2 px-4 py-2.5 bg-[#00b4a0] text-white text-sm font-bold rounded-md hover:bg-[#00a090] transition-colors"
                >
                  REGISTER <ExternalLink size={14} />
                </a>
                <Link
                  href="/submission-guidelines"
                  className="block text-center text-sm text-[#00b4a0] mt-2 hover:underline"
                >
                  Submission Guidelines
                </Link>
              </div>

              {/* Authors Login */}
              <div className="bg-white rounded-lg border border-border p-5">
                <h3 className="font-serif text-lg font-bold text-[#1a3c5e] mb-2">
                  Authors' Login
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Use the assigned user ID and password to login. Please, do not register again.
                </p>
                <div className="space-y-2">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-3 py-2 text-sm border border-border rounded-md bg-input focus:outline-none focus:ring-2 focus:ring-[#00b4a0]/30"
                    readOnly
                    onFocus={() => window.open(JOURNAL.submissionUrl, "_blank")}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-3 py-2 text-sm border border-border rounded-md bg-input focus:outline-none focus:ring-2 focus:ring-[#00b4a0]/30"
                    readOnly
                    onFocus={() => window.open(JOURNAL.submissionUrl, "_blank")}
                  />
                  <a
                    href={JOURNAL.submissionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full gap-2 px-4 py-2.5 bg-[#1a3c5e] text-white text-sm font-bold rounded-md hover:bg-[#15324e] transition-colors"
                  >
                    LOGIN <ExternalLink size={14} />
                  </a>
                </div>
                <a
                  href={JOURNAL.submissionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-xs text-muted-foreground mt-2 hover:text-[#00b4a0]"
                >
                  Forgot Password?
                </a>
              </div>

              {/* Quick Search by Author */}
              <div className="bg-white rounded-lg border border-border p-5">
                <h3 className="font-serif text-base font-bold text-[#1a3c5e] mb-3">
                  Quick Search by Author
                </h3>
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
      </section>

      {/* Scientific Board */}
      <section className="bg-white border-t border-border py-14 lg:py-20">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl font-bold text-[#1a3c5e]">Scientific Board</h2>
            <p className="text-sm text-muted-foreground mt-2">
              Distinguished scholars from leading international institutions
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 max-w-4xl mx-auto">
            {EDITORIAL_BOARD.scientificBoard.map((name) => (
              <span key={name} className="text-sm text-foreground/70">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
