// ============================================================
// Homepage - IEI 1946
// Design: Elsevier/ScienceDirect Layout + IEI Colors
// Navy #1b3a5c, Teal #009e8e
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
  FileText,
  ArrowRight,
  Search,
  ExternalLink,
  ChevronRight,
  Clock,
  Award,
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
    const params = new URLSearchParams();
    if (searchYear) params.set("year", searchYear);
    if (searchAuthor) params.set("author", searchAuthor);
    if (searchKeyword) params.set("keyword", searchKeyword);
    window.location.href = `/review?${params.toString()}`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section - Elsevier style with journal cover */}
      <section className="bg-white border-b border-gray-200">
        <div className="container py-10 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Cover image */}
            <div className="lg:col-span-2 hidden lg:block">
              <img
                src={JOURNAL.coverRivistaUrl}
                alt="Journal Cover"
                className="w-full rounded shadow-md border border-gray-200"
              />
            </div>

            {/* Journal info - Elsevier style */}
            <div className="lg:col-span-6">
              <motion.div initial="hidden" animate="visible" variants={fadeUp}>
                <h1 className="font-serif text-3xl lg:text-4xl font-bold text-[#1b3a5c] leading-tight">
                  Economia Internazionale
                </h1>
                <p className="font-serif text-lg lg:text-xl text-[#1b3a5c]/60 mt-0.5">
                  / International Economics
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-3 text-xs">
                  <span className="px-2.5 py-1 bg-[#009e8e] text-white rounded font-bold">Open Access</span>
                  <span className="px-2.5 py-1 border border-gray-300 text-gray-600 rounded">Peer-Reviewed</span>
                  <span className="text-gray-500">ISSN: {JOURNAL.issn}</span>
                  <span className="text-gray-500">Est. {JOURNAL.foundedYear}</span>
                </div>

                <div className="mt-4 text-sm text-gray-600 leading-relaxed">
                  <p>
                    <span className="font-semibold text-[#1b3a5c]">Editor in Chief:</span>{" "}
                    {EDITORIAL_BOARD.editorInChief}
                  </p>
                  <p className="mt-1">
                    <span className="font-semibold text-[#1b3a5c]">Co-Editors:</span>{" "}
                    {EDITORIAL_BOARD.coEditors.join(", ")}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/review"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#009e8e] text-white text-sm font-semibold rounded hover:bg-[#008a7c] transition-colors"
                  >
                    <BookOpen size={16} /> Browse the Review
                  </Link>
                  <Link
                    href="/submission-guidelines"
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#1b3a5c]/20 text-[#1b3a5c] text-sm font-semibold rounded hover:bg-[#1b3a5c]/5 transition-colors"
                  >
                    <Send size={16} /> Submit a Paper
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Right sidebar: Submit card */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-[#1b3a5c] rounded p-6 text-white"
              >
                <h2 className="font-serif text-xl font-bold">Submit a Paper</h2>
                <p className="text-white/80 text-sm mt-2 leading-relaxed">
                  Before submitting your manuscript, please view the Submission Guidelines.
                  Submission is free of charge and no APCs are applied.
                </p>
                <div className="mt-5 flex flex-col gap-2">
                  <a
                    href={JOURNAL.submissionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#009e8e] text-white text-sm font-bold rounded hover:bg-[#008a7c] transition-colors"
                  >
                    SUBMIT <ExternalLink size={14} />
                  </a>
                  <Link
                    href="/submission-guidelines"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-white/30 text-white text-sm font-medium rounded hover:bg-white/10 transition-colors"
                  >
                    Submission Guidelines
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Bar - Elsevier style */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="container py-4">
          <div className="flex flex-col sm:flex-row items-stretch gap-2">
            <div className="flex items-center gap-2 text-sm text-gray-500 px-2">
              <Search size={16} />
              <span className="font-medium whitespace-nowrap">Search articles:</span>
            </div>
            <input
              type="text"
              placeholder="Year"
              value={searchYear}
              onChange={(e) => setSearchYear(e.target.value)}
              className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded bg-white focus:outline-none focus:border-[#009e8e] focus:ring-1 focus:ring-[#009e8e]"
            />
            <input
              type="text"
              placeholder="Author"
              value={searchAuthor}
              onChange={(e) => setSearchAuthor(e.target.value)}
              className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded bg-white focus:outline-none focus:border-[#009e8e] focus:ring-1 focus:ring-[#009e8e]"
            />
            <input
              type="text"
              placeholder="Keyword"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded bg-white focus:outline-none focus:border-[#009e8e] focus:ring-1 focus:ring-[#009e8e]"
            />
            <button
              onClick={handleSearch}
              className="px-5 py-2 bg-[#1b3a5c] text-white text-sm font-semibold rounded hover:bg-[#152e4a] transition-colors"
            >
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Three-column info: Aims & Scope, Call for Papers, Current Issue */}
      <section className="bg-white py-12 lg:py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Aims & Scope */}
            <div>
              <div className="accent-bar" />
              <p className="text-xs font-bold uppercase tracking-wider text-[#009e8e] mb-1">Review</p>
              <h2 className="section-heading text-[#1b3a5c]">Aims & Scope</h2>
              <p className="text-sm text-gray-600 leading-relaxed mt-3 line-clamp-[10]">
                {AIMS_AND_SCOPE.split("\n\n")[0]}
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#009e8e] mt-4 hover:underline"
              >
                More Info <ArrowRight size={14} />
              </Link>
            </div>

            {/* Call for Papers */}
            <div>
              <div className="accent-bar" />
              <p className="text-xs font-bold uppercase tracking-wider text-[#009e8e] mb-1">Announcements</p>
              <h2 className="section-heading text-[#1b3a5c]">Call for Papers</h2>
              <p className="text-sm text-gray-600 leading-relaxed mt-3">
                {CALL_FOR_PAPERS.split("\n\n")[0]}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mt-3">
                To submit an article, authors are requested to{" "}
                <a href={JOURNAL.submissionUrl} target="_blank" rel="noopener noreferrer" className="text-[#009e8e] hover:underline font-medium">
                  register
                </a>{" "}
                and follow the{" "}
                <Link href="/submission-guidelines" className="text-[#009e8e] hover:underline font-medium">
                  Submission Guidelines
                </Link>.
              </p>
              <p className="text-xs text-gray-400 mt-3">
                Indexed in: RePEc &middot; Crossref &middot; Econpapers &middot; Econlit &middot; Google Scholar
              </p>
            </div>

            {/* Current Issue */}
            <div>
              <div className="accent-bar" />
              <p className="text-xs font-bold uppercase tracking-wider text-[#009e8e] mb-1">Quick Link</p>
              <h2 className="section-heading text-[#1b3a5c]">View Current Issue</h2>
              <p className="text-sm text-gray-600 mt-3 mb-2">
                Latest issue available for consultation and download:
              </p>
              <p className="text-sm font-bold text-[#1b3a5c]">
                {CURRENT_ISSUE.year}
              </p>
              <div className="mt-3 space-y-2">
                {CURRENT_ISSUE.articles.map((article) => (
                  <Link
                    key={article.id}
                    href={`/article/${article.id}`}
                    className="block text-sm text-gray-600 hover:text-[#009e8e] transition-colors leading-snug"
                  >
                    {article.title}{" "}
                    <span className="text-gray-400">
                      ({article.authors.map((a) => a.name.split(" ").pop()).join(", ")})
                    </span>
                  </Link>
                ))}
              </div>
              <Link
                href="/review"
                className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-[#009e8e] text-white text-sm font-semibold rounded hover:bg-[#008a7c] transition-colors"
              >
                Current Issue <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Review Metrics - Elsevier style */}
      <section className="bg-[#1b3a5c]">
        <div className="container py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.values(REVIEW_METRICS).map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="font-serif text-3xl font-bold text-[#00c4b0]">
                    {metric.value}
                  </span>
                  <span className="text-sm text-white/60">{metric.unit}</span>
                </div>
                <p className="text-xs text-white/50 mt-1 uppercase tracking-wider">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section with Tabs */}
      <section className="bg-white py-12 lg:py-16">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Main content */}
            <div className="flex-1">
              {/* Tabs - Elsevier style */}
              <div className="flex items-center gap-0 border-b border-gray-200 mb-6">
                {[
                  { key: "current", label: "Current Issue" },
                  { key: "editors", label: "Editor's Choice" },
                  { key: "recent", label: "Recent Articles" },
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key as typeof activeTab)}
                    className={`px-5 py-3 text-sm font-semibold border-b-2 transition-colors ${
                      activeTab === tab.key
                        ? "border-[#009e8e] text-[#009e8e]"
                        : "border-transparent text-gray-500 hover:text-[#1b3a5c]"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
                <Link
                  href="/review"
                  className="ml-auto text-sm text-[#009e8e] hover:underline flex items-center gap-1 font-medium"
                >
                  Go to Review <ArrowRight size={14} />
                </Link>
              </div>

              {/* Tab content */}
              <div className="space-y-0">
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
            <aside className="lg:w-72 shrink-0 space-y-5">
              {/* Register */}
              <div className="border border-gray-200 rounded p-5">
                <h3 className="font-serif text-base font-bold text-[#1b3a5c] mb-2">
                  Register Your Account
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">
                  First-time users should click on "Register" and enter the requested information.
                  Upon successful registration, you will receive an e-mail with instructions.
                </p>
                <a
                  href={JOURNAL.registerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full gap-2 px-4 py-2 bg-[#009e8e] text-white text-sm font-bold rounded hover:bg-[#008a7c] transition-colors"
                >
                  REGISTER <ExternalLink size={14} />
                </a>
                <Link
                  href="/submission-guidelines"
                  className="block text-center text-xs text-[#009e8e] mt-2 hover:underline"
                >
                  Submission Guidelines
                </Link>
              </div>

              {/* Authors Login */}
              <div className="border border-gray-200 rounded p-5">
                <h3 className="font-serif text-base font-bold text-[#1b3a5c] mb-2">
                  Authors' Login
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-3">
                  Use the assigned user ID and password to login.
                </p>
                <div className="space-y-2">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded bg-white focus:outline-none focus:border-[#009e8e]"
                    readOnly
                    onFocus={() => window.open(JOURNAL.loginUrl, "_blank")}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded bg-white focus:outline-none focus:border-[#009e8e]"
                    readOnly
                    onFocus={() => window.open(JOURNAL.loginUrl, "_blank")}
                  />
                  <a
                    href={JOURNAL.loginUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full gap-2 px-4 py-2 bg-[#1b3a5c] text-white text-sm font-bold rounded hover:bg-[#152e4a] transition-colors"
                  >
                    LOGIN <ExternalLink size={14} />
                  </a>
                </div>
                <a
                  href={JOURNAL.loginUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-xs text-gray-400 mt-2 hover:text-[#009e8e]"
                >
                  Forgot Password?
                </a>
              </div>

              {/* Quick Search by Author */}
              <div className="border border-gray-200 rounded p-5">
                <h3 className="font-serif text-sm font-bold text-[#1b3a5c] mb-3">
                  Quick Search by Author
                </h3>
                <div className="flex flex-wrap gap-1">
                  {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => (
                    <Link
                      key={letter}
                      href={`/review?author=${letter}`}
                      className="w-6 h-6 flex items-center justify-center text-xs font-medium text-[#1b3a5c] hover:bg-[#009e8e] hover:text-white rounded transition-colors border border-gray-200"
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
      <section className="bg-gray-50 border-t border-gray-200 py-12 lg:py-16">
        <div className="container">
          <div className="text-center mb-8">
            <div className="accent-bar mx-auto" />
            <h2 className="font-serif text-2xl font-bold text-[#1b3a5c]">Scientific Board</h2>
            <p className="text-sm text-gray-500 mt-2">
              Distinguished scholars from leading international institutions
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 max-w-4xl mx-auto">
            {EDITORIAL_BOARD.scientificBoard.map((name) => (
              <span key={name} className="text-sm text-gray-600">
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
