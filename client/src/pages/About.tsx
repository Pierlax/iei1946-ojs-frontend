// ============================================================
// About the Review Page - Elsevier/ScienceDirect Style
// Navy #1b3a5c, Teal #009e8e
// ============================================================

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import {
  JOURNAL,
  EDITORIAL_BOARD,
  AIMS_AND_SCOPE,
  EDITORS_NOTE,
  FOUNDERS,
  INDEXING,
  REVIEW_METRICS,
} from "@/lib/data";
import { BookOpen, Award, Users, ExternalLink } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Page header - Elsevier style */}
      <section className="bg-[#1b3a5c] py-10 lg:py-14">
        <div className="container">
          <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white">
            About the Review
          </h1>
          <p className="text-white/60 mt-2 text-sm">
            Economia Internazionale / International Economics
          </p>
        </div>
      </section>

      <main className="flex-1">
        <div className="container py-8 lg:py-14">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Main content */}
            <div className="flex-1 max-w-3xl">
              {/* Aims & Scope */}
              <section className="mb-10">
                <div className="accent-bar" />
                <h2 className="font-serif text-2xl font-bold text-[#1b3a5c] mb-4">
                  Aims & Scope
                </h2>
                {AIMS_AND_SCOPE.split("\n\n").map((paragraph, i) => (
                  <p key={i} className="text-sm text-gray-600 leading-relaxed mb-4 text-justify">
                    {paragraph}
                  </p>
                ))}
              </section>

              {/* Review Metrics */}
              <section className="mb-10 bg-gray-50 border border-gray-200 rounded p-6">
                <h3 className="font-serif text-lg font-bold text-[#1b3a5c] mb-4">Review Metrics</h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {Object.values(REVIEW_METRICS).map((metric) => (
                    <div key={metric.label} className="text-center">
                      <span className="font-serif text-2xl font-bold text-[#009e8e]">{metric.value}</span>
                      <span className="text-xs text-gray-400 ml-1">{metric.unit}</span>
                      <p className="text-xs text-gray-400 mt-1">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Indexed In */}
              <section className="mb-10">
                <h3 className="font-serif text-lg font-bold text-[#1b3a5c] mb-3">Indexed In</h3>
                <div className="flex flex-wrap gap-2">
                  {INDEXING.map((idx) => (
                    <span key={idx} className="px-3 py-1.5 text-sm font-medium bg-gray-100 text-gray-600 rounded">
                      {idx}
                    </span>
                  ))}
                </div>
              </section>

              {/* Editor's Note */}
              <section className="mb-10">
                <div className="accent-bar" />
                <h2 className="font-serif text-2xl font-bold text-[#1b3a5c] mb-4">
                  Editor's Note
                </h2>
                {EDITORS_NOTE.split("\n\n").map((paragraph, i) => (
                  <p key={i} className="text-sm text-gray-600 leading-relaxed mb-4 text-justify italic">
                    {paragraph}
                  </p>
                ))}
                <p className="text-sm font-semibold text-[#1b3a5c] mt-2">
                  {EDITORIAL_BOARD.editorInChief}, Editor in Chief
                </p>
              </section>

              {/* Founders */}
              <section className="mb-10">
                <div className="accent-bar" />
                <h2 className="font-serif text-2xl font-bold text-[#1b3a5c] mb-4">
                  Founders
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {FOUNDERS.map((founder) => (
                    <div key={founder.name} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#009e8e] shrink-0" />
                      <span className="text-gray-600">
                        {founder.name}
                        {founder.role && <span className="text-gray-400 ml-1">({founder.role})</span>}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="lg:w-72 shrink-0 space-y-5">
              {/* Editor in Chief */}
              <div className="border border-gray-200 rounded p-5">
                <h3 className="font-serif text-sm font-bold text-[#1b3a5c] mb-3">Editorial Team</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-400">Editor in Chief</p>
                    <p className="font-semibold text-[#1b3a5c]">{EDITORIAL_BOARD.editorInChief}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-400">Co-Editors</p>
                    {EDITORIAL_BOARD.coEditors.map((name) => (
                      <p key={name} className="font-medium text-[#1b3a5c]">{name}</p>
                    ))}
                  </div>
                </div>
                <Link
                  href="/editorial-board"
                  className="inline-flex items-center gap-1 text-xs text-[#009e8e] mt-3 hover:underline font-semibold"
                >
                  Full Editorial Board &rarr;
                </Link>
              </div>

              {/* Quick Links */}
              <div className="border border-gray-200 rounded p-5">
                <h3 className="font-serif text-sm font-bold text-[#1b3a5c] mb-3">Quick Links</h3>
                <nav className="flex flex-col gap-2 text-sm">
                  <Link href="/submission-guidelines" className="text-[#009e8e] hover:underline">Submission Guidelines</Link>
                  <Link href="/oa-copyright" className="text-[#009e8e] hover:underline">OA & Copyright</Link>
                  <Link href="/publication-ethics" className="text-[#009e8e] hover:underline">Publication Ethics</Link>
                  <Link href="/editorial-board" className="text-[#009e8e] hover:underline">Editorial Board</Link>
                  <Link href="/contacts" className="text-[#009e8e] hover:underline">Contacts</Link>
                </nav>
              </div>

              {/* Submit */}
              <div className="bg-[#1b3a5c] rounded p-5 text-white">
                <h3 className="font-serif text-base font-bold">Submit a Paper</h3>
                <p className="text-white/70 text-xs mt-2">No APCs. Free submission.</p>
                <a
                  href={JOURNAL.submissionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full gap-2 mt-3 px-4 py-2 bg-[#009e8e] text-white text-sm font-bold rounded hover:bg-[#008a7c] transition-colors"
                >
                  SUBMIT <ExternalLink size={14} />
                </a>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
