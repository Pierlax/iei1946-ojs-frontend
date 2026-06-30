// ============================================================
// News & Announcements page - pulls from OJS Announcements API.
// ============================================================

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { JOURNAL } from "@/lib/data";
import { useAnnouncements } from "@/hooks/useOJS";
import { getLocalized, type OJSAnnouncement } from "@/lib/ojs-api";
import { Calendar, Megaphone } from "lucide-react";

function formatDate(dateStr?: string): string {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return dateStr;
  return date.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

function htmlToPlain(html: string): string {
  return html.replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ").trim();
}

export default function Blog() {
  const { data, loading, error } = useAnnouncements(50);
  const announcements: OJSAnnouncement[] = data?.items || [];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <section className="bg-[#1b3a5c] py-12 lg:py-16">
        <div className="container">
          <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white">News & Announcements</h1>
          <p className="text-white/70 mt-2 text-sm">{JOURNAL.fullName}</p>
        </div>
      </section>

      <main className="flex-1">
        <div className="container py-10 lg:py-16 max-w-3xl">
          {loading && (
            <p className="text-sm text-gray-400 italic text-center py-10">Loading announcements from OJS…</p>
          )}

          {error && !loading && (
            <div className="border border-amber-200 bg-amber-50 rounded p-6 text-center">
              <p className="text-sm text-amber-700">Could not load announcements from OJS.</p>
              <p className="text-xs text-amber-600 mt-1">{error.message}</p>
            </div>
          )}

          {!loading && !error && announcements.length === 0 && (
            <div className="border border-dashed border-gray-200 rounded p-10 text-center">
              <Megaphone size={32} className="mx-auto text-gray-300 mb-3" />
              <p className="text-sm text-gray-500">No announcements yet.</p>
              <p className="text-xs text-gray-400 mt-1">
                Editors can post announcements from the OJS backend
                <span className="block">
                  (Settings &rarr; Website &rarr; Announcements).
                </span>
              </p>
            </div>
          )}

          <div className="space-y-6">
            {announcements.map((a) => {
              const title = getLocalized(a.title);
              const description = htmlToPlain(getLocalized(a.description) || getLocalized(a.descriptionShort));
              return (
                <article
                  key={a.id}
                  className="border border-gray-200 rounded p-6 hover:border-[#009e8e]/40 transition-colors"
                >
                  <div className="flex items-center gap-2 text-xs text-[#009e8e] font-semibold mb-3">
                    <Calendar size={13} />
                    <span>{formatDate(a.datePosted)}</span>
                  </div>
                  <h2 className="font-serif text-lg font-bold text-[#1b3a5c] leading-snug">
                    {title}
                  </h2>
                  {description && (
                    <p className="text-sm text-gray-600 leading-relaxed mt-2 whitespace-pre-line">
                      {description}
                    </p>
                  )}
                  {a.url && (
                    <a
                      href={a.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-xs font-semibold text-[#009e8e] hover:underline"
                    >
                      Read more →
                    </a>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
