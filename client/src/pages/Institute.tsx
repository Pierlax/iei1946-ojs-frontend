// ============================================================
// Institute Page - IEI 1946
// Elsevier Layout + IEI Navy/Teal Colors
// History, Chamber of Commerce, Prizes with historical images
// ============================================================

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { JOURNAL, INSTITUTE_HISTORY_EN, CHAMBER_OF_COMMERCE, FOUNDERS } from "@/lib/data";
import { Building, History, Award, Users, Camera } from "lucide-react";

const HISTORICAL_IMAGES = [
  {
    src: JOURNAL.inaugurazione1946Url,
    caption: "Inauguration of the Institute, 4 November 1946",
  },
  {
    src: JOURNAL.congresso1948Url,
    caption: "International Congress of Parliamentarians, 1948",
  },
  {
    src: JOURNAL.einaudi1952Url,
    caption: "Luigi Einaudi, Honorary Member",
  },
  {
    src: JOURNAL.galbraith1972Url,
    caption: "John Kenneth Galbraith, 1972",
  },
  {
    src: JOURNAL.manzittiConvegnoUrl,
    caption: "Francesco Manzitti at a conference",
  },
  {
    src: JOURNAL.evento2024Url,
    caption: "Recent event at the Chamber of Commerce",
  },
];

export default function Institute() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero with background image */}
      <section className="relative bg-[#1b3a5c] py-16 lg:py-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-15 bg-cover bg-center"
          style={{ backgroundImage: `url(${JOURNAL.salaSpecchiUrl})` }}
        />
        <div className="container relative z-10">
          <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white">The Institute</h1>
          <p className="text-white/70 mt-2 text-sm max-w-xl">
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
                <h2 className="font-serif text-2xl font-bold text-[#1b3a5c] mb-6 flex items-center gap-2">
                  <History size={22} className="text-[#009e8e]" />
                  History of the Institute
                </h2>

                {/* Einaudi inauguration feature image */}
                <div className="mb-6 overflow-hidden rounded">
                  <img
                    src={JOURNAL.einaudiInaugurazioneUrl}
                    alt="Inauguration of the Institute for International Economics, 1946"
                    className="w-full h-auto object-cover"
                  />
                  <p className="text-xs text-gray-500 mt-2 italic">
                    Inauguration of the Institute for International Economics, 4 November 1946,
                    in the presence of the President of the Italian Republic, Enrico de Nicola.
                  </p>
                </div>

                {INSTITUTE_HISTORY_EN.split("\n\n").map((paragraph, i) => (
                  <p key={i} className="text-sm text-gray-600 leading-relaxed mb-4 text-justify">
                    {paragraph}
                  </p>
                ))}
              </section>

              {/* Historical Photo Gallery */}
              <section className="mb-12">
                <h2 className="font-serif text-2xl font-bold text-[#1b3a5c] mb-6 flex items-center gap-2">
                  <Camera size={22} className="text-[#009e8e]" />
                  Historical Gallery
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {HISTORICAL_IMAGES.map((img, i) => (
                    <div key={i} className="group overflow-hidden border border-gray-200 rounded">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={img.src}
                          alt={img.caption}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <p className="text-xs text-gray-500 p-3 leading-snug">{img.caption}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Founders */}
              <section className="mb-12">
                <h2 className="font-serif text-2xl font-bold text-[#1b3a5c] mb-6 flex items-center gap-2">
                  <Users size={22} className="text-[#009e8e]" />
                  Founders
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {FOUNDERS.map((founder) => (
                    <div key={founder.name} className="flex items-center gap-2 text-sm">
                      <span className="w-2 h-2 rounded-full bg-[#009e8e] shrink-0" />
                      <span className="text-gray-600">
                        {founder.name}
                        {founder.role && <span className="text-gray-500 ml-1">({founder.role})</span>}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Chamber of Commerce */}
              <section className="mb-12">
                <h2 className="font-serif text-2xl font-bold text-[#1b3a5c] mb-6 flex items-center gap-2">
                  <Building size={22} className="text-[#009e8e]" />
                  Chamber of Commerce of Genova
                </h2>
                <div className="flex flex-col sm:flex-row gap-6">
                  <img
                    src={JOURNAL.logoCameraUrl}
                    alt="Chamber of Commerce of Genova"
                    className="w-32 h-auto object-contain shrink-0"
                  />
                  <p className="text-sm text-gray-600 leading-relaxed text-justify">
                    {CHAMBER_OF_COMMERCE}
                  </p>
                </div>
              </section>

              {/* Sala degli Specchi */}
              <section className="mb-12">
                <div className="overflow-hidden rounded">
                  <img
                    src={JOURNAL.salaSpecchiUrl}
                    alt="Sala degli Specchi - Chamber of Commerce of Genova"
                    className="w-full h-auto object-cover"
                  />
                  <p className="text-xs text-gray-500 mt-2 italic">
                    Sala degli Specchi (Hall of Mirrors) at the Chamber of Commerce of Genova,
                    where many important events and conferences have been hosted.
                  </p>
                </div>
              </section>

              {/* Prizes */}
              <section className="mb-12">
                <h2 className="font-serif text-2xl font-bold text-[#1b3a5c] mb-6 flex items-center gap-2">
                  <Award size={22} className="text-[#009e8e]" />
                  International Economics Prize & Francesco Manzitti Prize
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-6 text-justify">
                  In 2008, on the occasion of the 60th anniversary of the review, the first edition of the
                  "International Economics Prize" and "Francesco Manzitti Prize" took place.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white border border-gray-200 p-5 rounded">
                    <h3 className="font-serif text-base font-bold text-[#1b3a5c] mb-2">
                      International Economics Prize
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Awarded to an economist for his or her outstanding research work in the field
                      of international economics.
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 p-5 rounded">
                    <h3 className="font-serif text-base font-bold text-[#1b3a5c] mb-2">
                      Francesco Manzitti Prize
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Awarded to an entrepreneur for his or her repute in international business
                      activity.
                    </p>
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="lg:w-72 shrink-0 space-y-6">
              <div className="bg-white border border-gray-200 p-5 rounded">
                <h3 className="font-serif text-base font-bold text-[#1b3a5c] mb-3">Key Facts</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-500">Founded</p>
                    <p className="font-semibold text-[#1b3a5c]">{JOURNAL.instituteFounded}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-500">Journal Since</p>
                    <p className="font-semibold text-[#1b3a5c]">{JOURNAL.foundedYear}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-500">Publisher</p>
                    <p className="font-semibold text-[#1b3a5c]">{JOURNAL.publisherEn}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-500">Location</p>
                    <p className="font-semibold text-[#1b3a5c]">Genova, Italy</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 p-5 rounded">
                <h3 className="font-serif text-base font-bold text-[#1b3a5c] mb-3">Quick Links</h3>
                <nav className="flex flex-col gap-2 text-sm">
                  <a href="/about" className="text-[#009e8e] hover:underline">About the Review</a>
                  <a href="/editorial-board" className="text-[#009e8e] hover:underline">Editorial Board</a>
                  <a href="/contacts" className="text-[#009e8e] hover:underline">Contacts</a>
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
