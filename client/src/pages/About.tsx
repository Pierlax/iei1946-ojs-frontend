// ============================================================
// About the Review Page - IEI 1946
// Full Aims & Scope, Editor's Note, Founders, History
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
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Page header */}
      <section className="bg-[#1a3c5e] py-12 lg:py-16">
        <div className="container">
          <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white">
            About the Review
          </h1>
          <p className="text-white/70 mt-2 text-sm">
            Economia Internazionale / International Economics
          </p>
        </div>
      </section>

      <main className="flex-1">
        <div className="container py-10 lg:py-16">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Main content */}
            <div className="flex-1 max-w-3xl">
              {/* Aims & Scope */}
              <section className="mb-12">
                <h2 className="font-serif text-2xl font-bold text-[#1a3c5e] mb-4 flex items-center gap-2">
                  <BookOpen size={22} className="text-[#00b4a0]" />
                  Aims & Scope
                </h2>
                {AIMS_AND_SCOPE.split("\n\n").map((paragraph, i) => (
                  <p key={i} className="text-sm text-foreground/80 leading-relaxed mb-4 text-justify">
                    {paragraph}
                  </p>
                ))}
              </section>

              {/* Review Metrics */}
              <section className="mb-12 bg-white rounded-lg border border-border p-6">
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

              {/* Indexed In */}
              <section className="mb-12">
                <h3 className="font-serif text-lg font-bold text-[#1a3c5e] mb-3">Indexed In</h3>
                <div className="flex flex-wrap gap-2">
                  {INDEXING.map((idx) => (
                    <span key={idx} className="px-4 py-2 text-sm font-medium bg-secondary rounded-full text-secondary-foreground">
                      {idx}
                    </span>
                  ))}
                </div>
              </section>

              {/* Editor's Note */}
              <section className="mb-12">
                <h2 className="font-serif text-2xl font-bold text-[#1a3c5e] mb-4 flex items-center gap-2">
                  <Award size={22} className="text-[#00b4a0]" />
                  Editor's Note
                </h2>
                {EDITORS_NOTE.split("\n\n").map((paragraph, i) => (
                  <p key={i} className="text-sm text-foreground/80 leading-relaxed mb-4 text-justify italic">
                    {paragraph}
                  </p>
                ))}
                <p className="text-sm font-semibold text-[#1a3c5e] mt-2">
                  {EDITORIAL_BOARD.editorInChief}, Editor in Chief
                </p>
              </section>

              {/* Founders */}
              <section className="mb-12">
                <h2 className="font-serif text-2xl font-bold text-[#1a3c5e] mb-4 flex items-center gap-2">
                  <Users size={22} className="text-[#00b4a0]" />
                  Founders
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {FOUNDERS.map((founder) => (
                    <div key={founder.name} className="flex items-center gap-2 text-sm">
                      <span className="w-2 h-2 rounded-full bg-[#00b4a0] shrink-0" />
                      <span className="text-foreground/80">
                        {founder.name}
                        {founder.role && <span className="text-muted-foreground ml-1">({founder.role})</span>}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="lg:w-72 shrink-0 space-y-6">
              {/* Editor in Chief */}
              <div className="bg-white rounded-lg border border-border p-5">
                <h3 className="font-serif text-base font-bold text-[#1a3c5e] mb-3">Editorial Team</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Editor in Chief</p>
                    <p className="font-semibold text-[#1a3c5e]">{EDITORIAL_BOARD.editorInChief}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Co-Editors</p>
                    {EDITORIAL_BOARD.coEditors.map((name) => (
                      <p key={name} className="font-medium text-[#1a3c5e]">{name}</p>
                    ))}
                  </div>
                </div>
                <Link
                  href="/editorial-board"
                  className="inline-flex items-center gap-1 text-sm text-[#00b4a0] mt-3 hover:underline"
                >
                  Full Editorial Board &rarr;
                </Link>
              </div>

              {/* Quick Links */}
              <div className="bg-white rounded-lg border border-border p-5">
                <h3 className="font-serif text-base font-bold text-[#1a3c5e] mb-3">Quick Links</h3>
                <nav className="flex flex-col gap-2 text-sm">
                  <Link href="/submission-guidelines" className="text-[#00b4a0] hover:underline">Submission Guidelines</Link>
                  <Link href="/oa-copyright" className="text-[#00b4a0] hover:underline">OA & Copyright</Link>
                  <Link href="/publication-ethics" className="text-[#00b4a0] hover:underline">Publication Ethics</Link>
                  <Link href="/editorial-board" className="text-[#00b4a0] hover:underline">Editorial Board</Link>
                  <Link href="/contacts" className="text-[#00b4a0] hover:underline">Contacts</Link>
                </nav>
              </div>

              {/* Submit */}
              <div className="bg-[#00b4a0] rounded-lg p-5 text-white">
                <h3 className="font-serif text-lg font-bold">Submit a Paper</h3>
                <p className="text-white/90 text-sm mt-2">No APCs. Free submission.</p>
                <a
                  href={JOURNAL.submissionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full gap-2 mt-3 px-4 py-2.5 bg-white text-[#00b4a0] text-sm font-bold rounded-md hover:bg-white/90 transition-colors"
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
