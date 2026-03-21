// ============================================================
// Submission Guidelines Page - IEI 1946
// ============================================================

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { JOURNAL } from "@/lib/data";
import { ExternalLink, FileText, CheckCircle } from "lucide-react";

const GUIDELINES = [
  {
    title: "Manuscript Preparation",
    items: [
      "Manuscripts should be written in English.",
      "The text should be typed in Word format, double-spaced, with wide margins.",
      "The first page should contain: title, author(s) name(s), affiliation(s), e-mail address of the corresponding author, abstract (max 150 words), JEL classification codes, and keywords (max 5).",
      "Footnotes should be numbered consecutively and placed at the bottom of the page.",
      "Mathematical formulas should be numbered consecutively on the right-hand side of the page.",
      "Tables and figures should be numbered consecutively and placed at the end of the manuscript.",
    ],
  },
  {
    title: "References",
    items: [
      "References should be listed alphabetically at the end of the manuscript.",
      'In-text citations should follow the author-date format: (Author, Year) or Author (Year).',
      "Journal articles: Author, A.B. (Year), \"Title of Article\", Journal Name, Vol. X, No. Y, pp. XX-YY.",
      "Books: Author, A.B. (Year), Title of Book, Publisher, City.",
      "Book chapters: Author, A.B. (Year), \"Title of Chapter\", in Editor, C.D. (ed.), Title of Book, Publisher, City, pp. XX-YY.",
    ],
  },
  {
    title: "Submission Process",
    items: [
      "Authors should register on the journal's submission platform.",
      "Manuscripts should be submitted electronically through the online submission system.",
      "A cover letter should accompany the submission, confirming that the manuscript has not been published elsewhere and is not under consideration by another journal.",
      "The review process follows a double-blind peer-review procedure.",
      "Authors will be notified of the editorial decision within approximately 10 weeks.",
    ],
  },
  {
    title: "Publication Charges",
    items: [
      "There are no submission fees.",
      "There are no article processing charges (APCs).",
      "The journal is fully Open Access and free for both authors and readers.",
    ],
  },
];

export default function SubmissionGuidelines() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <section className="bg-[#1b3a5c] py-12 lg:py-16">
        <div className="container">
          <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white">Submission Guidelines</h1>
          <p className="text-white/70 mt-2 text-sm">{JOURNAL.fullName}</p>
        </div>
      </section>

      <main className="flex-1">
        <div className="container py-10 lg:py-16">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Main content */}
            <div className="flex-1 max-w-3xl">
              <p className="text-sm text-gray-600 leading-relaxed mb-8">
                Before submitting your manuscript, please read the following guidelines carefully.
                Manuscripts that do not conform to these guidelines may be returned to the author(s)
                without review. Submission is free of charge and no article processing charges (APCs)
                are applied.
              </p>

              {GUIDELINES.map((section, idx) => (
                <section key={idx} className="mb-10">
                  <h2 className="font-serif text-xl font-bold text-[#1b3a5c] mb-4 pb-2 border-b border-gray-200 flex items-center gap-2">
                    <FileText size={18} className="text-[#009e8e]" />
                    {section.title}
                  </h2>
                  <ul className="space-y-3">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed">
                        <CheckCircle size={16} className="text-[#009e8e] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}

              {/* Submit CTA */}
              <div className="bg-[#009e8e] rounded p-6 text-white mt-8">
                <h2 className="font-serif text-2xl font-bold">Ready to Submit?</h2>
                <p className="text-white/90 text-sm mt-2 leading-relaxed">
                  Register on our submission platform and follow the steps to submit your manuscript.
                  If you have already registered, please log in with your credentials.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href={JOURNAL.submissionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#009e8e] text-sm font-bold rounded hover:bg-white/90 transition-colors"
                  >
                    SUBMIT NOW <ExternalLink size={14} />
                  </a>
                  <a
                    href={JOURNAL.submissionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/40 text-white text-sm font-medium rounded hover:bg-white/10 transition-colors"
                  >
                    Author Login
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:w-72 shrink-0 space-y-6">
              <div className="bg-white border border-gray-200 p-5">
                <h3 className="font-serif text-base font-bold text-[#1b3a5c] mb-3">Key Information</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#009e8e] shrink-0 mt-1.5" />
                    <span className="text-gray-600">Double-blind peer review</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#009e8e] shrink-0 mt-1.5" />
                    <span className="text-gray-600">No submission fees</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#009e8e] shrink-0 mt-1.5" />
                    <span className="text-gray-600">No article processing charges</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#009e8e] shrink-0 mt-1.5" />
                    <span className="text-gray-600">Fully Open Access</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#009e8e] shrink-0 mt-1.5" />
                    <span className="text-gray-600">~10 weeks to decision</span>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 p-5">
                <h3 className="font-serif text-base font-bold text-[#1b3a5c] mb-3">Related Pages</h3>
                <nav className="flex flex-col gap-2 text-sm">
                  <a href="/about" className="text-[#009e8e] hover:underline">About the Review</a>
                  <a href="/oa-copyright" className="text-[#009e8e] hover:underline">OA & Copyright</a>
                  <a href="/publication-ethics" className="text-[#009e8e] hover:underline">Publication Ethics</a>
                  <a href="/editorial-board" className="text-[#009e8e] hover:underline">Editorial Board</a>
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
