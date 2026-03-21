// ============================================================
// Editorial Board Page - IEI 1946
// ============================================================

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { EDITORIAL_BOARD, JOURNAL } from "@/lib/data";
import { ExternalLink } from "lucide-react";

export default function EditorialBoard() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <section className="bg-[#1a3c5e] py-12 lg:py-16">
        <div className="container">
          <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white">Editorial Board</h1>
          <p className="text-white/70 mt-2 text-sm">{JOURNAL.fullName}</p>
        </div>
      </section>

      <main className="flex-1">
        <div className="container py-10 lg:py-16 max-w-4xl">
          {/* Editor in Chief */}
          <section className="mb-10">
            <h2 className="font-serif text-xl font-bold text-[#1a3c5e] mb-4 pb-2 border-b border-border">
              Editor in Chief
            </h2>
            <p className="text-base font-semibold text-[#1a3c5e]">{EDITORIAL_BOARD.editorInChief}</p>
          </section>

          {/* Co-Editors */}
          <section className="mb-10">
            <h2 className="font-serif text-xl font-bold text-[#1a3c5e] mb-4 pb-2 border-b border-border">
              Co-Editors
            </h2>
            <div className="space-y-1">
              {EDITORIAL_BOARD.coEditors.map((name) => (
                <p key={name} className="text-base font-medium text-[#1a3c5e]">{name}</p>
              ))}
            </div>
          </section>

          {/* Scientific Board */}
          <section className="mb-10">
            <h2 className="font-serif text-xl font-bold text-[#1a3c5e] mb-4 pb-2 border-b border-border">
              Scientific Board
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {EDITORIAL_BOARD.scientificBoard.map((name) => (
                <div key={name} className="flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00b4a0] shrink-0" />
                  <span className="text-foreground/80">{name}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section className="bg-white rounded-lg border border-border p-6">
            <h3 className="font-serif text-lg font-bold text-[#1a3c5e] mb-2">Contact the Editorial Office</h3>
            <p className="text-sm text-muted-foreground mb-3">
              For any enquiries regarding the editorial process, please contact us at:
            </p>
            <a href={`mailto:${JOURNAL.email}`} className="text-sm text-[#00b4a0] hover:underline font-medium">
              {JOURNAL.email}
            </a>
            <div className="mt-4">
              <a
                href={JOURNAL.submissionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#00b4a0] text-white text-sm font-bold rounded-md hover:bg-[#00a090] transition-colors"
              >
                Submit a Paper <ExternalLink size={14} />
              </a>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
