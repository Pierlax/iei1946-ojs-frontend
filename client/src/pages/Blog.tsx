// ============================================================
// Blog / News & Events Page - IEI 1946
// ============================================================

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { JOURNAL, BLOG_EVENTS } from "@/lib/data";
import { Calendar, MapPin, Clock } from "lucide-react";

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <section className="bg-[#1b3a5c] py-12 lg:py-16">
        <div className="container">
          <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white">News & Events</h1>
          <p className="text-white/70 mt-2 text-sm">{JOURNAL.fullName}</p>
        </div>
      </section>

      <main className="flex-1">
        <div className="container py-10 lg:py-16 max-w-3xl">
          <div className="space-y-6">
            {BLOG_EVENTS.map((event) => (
              <article key={event.id} className="border border-gray-200 rounded p-6 hover:border-[#009e8e]/40 transition-colors">
                <div className="flex items-center gap-2 text-xs text-[#009e8e] font-semibold mb-3">
                  <Calendar size={13} />
                  <span>{formatDate(event.date)}</span>
                </div>
                <h2 className="font-serif text-lg font-bold text-[#1b3a5c] leading-snug">
                  {event.title}
                </h2>
                {event.description && (
                  <p className="text-sm text-gray-600 leading-relaxed mt-2">
                    {event.description}
                  </p>
                )}
                <div className="mt-3 flex flex-wrap gap-4 text-xs text-gray-500">
                  {event.location && (
                    <span className="flex items-center gap-1">
                      <MapPin size={12} className="text-[#009e8e]" />
                      {event.location}
                    </span>
                  )}
                  {event.time && (
                    <span className="flex items-center gap-1">
                      <Clock size={12} className="text-[#009e8e]" />
                      {event.time}
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
