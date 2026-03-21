// ============================================================
// Institute Page - IEI 1946
// History, Chamber of Commerce, Prizes
// ============================================================

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { JOURNAL, INSTITUTE_HISTORY_EN, CHAMBER_OF_COMMERCE, FOUNDERS } from "@/lib/data";
import { Building, History, Award, Users } from "lucide-react";

export default function Institute() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <section className="bg-[#1a3c5e] py-12 lg:py-16">
        <div className="container">
          <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white">The Institute</h1>
          <p className="text-white/70 mt-2 text-sm">
            {JOURNAL.instituteEn} of the {JOURNAL.publisherEn}
          </p>
        </div>
      </section>

      <main className="flex-1">
        <div className="container py-10 lg:py-16">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Main content */}
            <div className="flex-1 max-w-3xl">
              {/* History */}
              <section className="mb-12">
                <h2 className="font-serif text-2xl font-bold text-[#1a3c5e] mb-4 flex items-center gap-2">
                  <History size={22} className="text-[#00b4a0]" />
                  History of the Institute
                </h2>
                {INSTITUTE_HISTORY_EN.split("\n\n").map((paragraph, i) => (
                  <p key={i} className="text-sm text-foreground/80 leading-relaxed mb-4 text-justify">
                    {paragraph}
                  </p>
                ))}
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

              {/* Chamber of Commerce */}
              <section className="mb-12">
                <h2 className="font-serif text-2xl font-bold text-[#1a3c5e] mb-4 flex items-center gap-2">
                  <Building size={22} className="text-[#00b4a0]" />
                  Chamber of Commerce of Genova
                </h2>
                <p className="text-sm text-foreground/80 leading-relaxed text-justify">
                  {CHAMBER_OF_COMMERCE}
                </p>
              </section>

              {/* Prizes */}
              <section className="mb-12">
                <h2 className="font-serif text-2xl font-bold text-[#1a3c5e] mb-4 flex items-center gap-2">
                  <Award size={22} className="text-[#00b4a0]" />
                  International Economics Prize & Francesco Manzitti Prize
                </h2>
                <p className="text-sm text-foreground/80 leading-relaxed mb-4 text-justify">
                  In 2008, on the occasion of the 60th anniversary of the review, the first edition of the
                  "International Economics Prize" and "Francesco Manzitti Prize" took place.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg border border-border p-5">
                    <h3 className="font-serif text-base font-bold text-[#1a3c5e] mb-2">
                      International Economics Prize
                    </h3>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      Awarded to an economist for his or her outstanding research work in the field
                      of international economics.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg border border-border p-5">
                    <h3 className="font-serif text-base font-bold text-[#1a3c5e] mb-2">
                      Francesco Manzitti Prize
                    </h3>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      Awarded to an entrepreneur for his or her repute in international business
                      activity.
                    </p>
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="lg:w-72 shrink-0 space-y-6">
              <div className="bg-white rounded-lg border border-border p-5">
                <h3 className="font-serif text-base font-bold text-[#1a3c5e] mb-3">Key Facts</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Founded</p>
                    <p className="font-semibold text-[#1a3c5e]">{JOURNAL.instituteFounded}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Journal Since</p>
                    <p className="font-semibold text-[#1a3c5e]">{JOURNAL.foundedYear}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Publisher</p>
                    <p className="font-semibold text-[#1a3c5e]">{JOURNAL.publisherEn}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Location</p>
                    <p className="font-semibold text-[#1a3c5e]">Genova, Italy</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-border p-5">
                <h3 className="font-serif text-base font-bold text-[#1a3c5e] mb-3">Quick Links</h3>
                <nav className="flex flex-col gap-2 text-sm">
                  <a href="/about" className="text-[#00b4a0] hover:underline">About the Review</a>
                  <a href="/editorial-board" className="text-[#00b4a0] hover:underline">Editorial Board</a>
                  <a href="/contacts" className="text-[#00b4a0] hover:underline">Contacts</a>
                </nav>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
