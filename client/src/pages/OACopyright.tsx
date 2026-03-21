// ============================================================
// OA & Copyright Page - IEI 1946
// ============================================================

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { JOURNAL } from "@/lib/data";
import { Unlock, Scale, Share2 } from "lucide-react";

export default function OACopyright() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <section className="bg-[#1b3a5c] py-12 lg:py-16">
        <div className="container">
          <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white">OA & Copyright</h1>
          <p className="text-white/70 mt-2 text-sm">{JOURNAL.fullName}</p>
        </div>
      </section>

      <main className="flex-1">
        <div className="container py-10 lg:py-16 max-w-3xl">
          {/* Open Access */}
          <section className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-[#1b3a5c] mb-4 flex items-center gap-2">
              <Unlock size={22} className="text-[#009e8e]" />
              Open Access Statement
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4 text-justify">
              <em>{JOURNAL.fullName}</em> is a fully Open Access journal. All articles are freely
              available to read, download, and share immediately upon publication, without any
              subscription or pay-per-view fees. The journal is committed to the free global
              dissemination of scientific knowledge.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              There are no submission fees and no article processing charges (APCs). The journal is
              funded by the {JOURNAL.publisherEn}.
            </p>
          </section>

          {/* Copyright */}
          <section className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-[#1b3a5c] mb-4 flex items-center gap-2">
              <Scale size={22} className="text-[#009e8e]" />
              Copyright and Publishing Rights
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4 text-justify">
              <em>{JOURNAL.fullName}</em> is published by the {JOURNAL.publisherEn}.
            </p>
            <ol className="space-y-4 text-sm text-gray-600 leading-relaxed list-decimal list-inside">
              <li>
                <strong className="text-gray-900">Authors retain copyright</strong> and grant the
                journal right of first publication with the work simultaneously licensed under a
                Creative Commons Attribution-NonCommercial 4.0 International License.
              </li>
              <li>
                <strong className="text-gray-900">Authors grant the journal</strong> the right of
                first publication. The journal will be identified as the original publisher.
              </li>
              <li>
                <strong className="text-gray-900">Authors may enter into</strong> separate,
                additional contractual arrangements for the non-exclusive distribution of the
                journal's published version of the work (e.g., post it to an institutional
                repository or publish it in a book), with an acknowledgement of its initial
                publication in this journal.
              </li>
            </ol>
          </section>

          {/* Creative Commons */}
          <section className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-[#1b3a5c] mb-4 flex items-center gap-2">
              <Share2 size={22} className="text-[#009e8e]" />
              Creative Commons License
            </h2>
            <div className="bg-white border border-gray-200 p-6 mb-4">
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                All articles in <em>{JOURNAL.fullName}</em> are licensed under a{" "}
                <a
                  href={JOURNAL.licenseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#009e8e] font-semibold hover:underline"
                >
                  {JOURNAL.license}
                </a>
                .
              </p>
              <p className="text-sm font-semibold text-[#1b3a5c] mb-2">You are free to:</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#009e8e] shrink-0 mt-1.5" />
                  <span><strong>Share</strong> &mdash; copy and redistribute the material in any medium or format</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#009e8e] shrink-0 mt-1.5" />
                  <span><strong>Adapt</strong> &mdash; remix, transform, and build upon the material</span>
                </li>
              </ul>
              <p className="text-sm font-semibold text-[#1b3a5c] mb-2">Under the following terms:</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#1b3a5c] shrink-0 mt-1.5" />
                  <span><strong>Attribution (BY)</strong> &mdash; You must give appropriate credit, provide a link to the license, and indicate if changes were made.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#1b3a5c] shrink-0 mt-1.5" />
                  <span><strong>NonCommercial (NC)</strong> &mdash; You may not use the material for commercial purposes.</span>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
