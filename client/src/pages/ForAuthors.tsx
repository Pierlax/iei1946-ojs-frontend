// ============================================================
// For Authors Hub Page - IEI 1946
// Entry point for prospective and current authors.
// Consolidates submission guidelines, ethics, OA, copyright,
// and post-acceptance workflow.
// ============================================================

import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { JOURNAL } from "@/lib/data";
import {
  FileText,
  ShieldCheck,
  Unlock,
  Scale,
  Send,
  CheckCircle,
  ExternalLink,
  ArrowRight,
} from "lucide-react";

const AUTHOR_RESOURCES = [
  {
    icon: FileText,
    title: "Submission Guidelines",
    body: "Manuscript preparation, formatting requirements, references, and the submission procedure.",
    href: "/submission-guidelines",
  },
  {
    icon: ShieldCheck,
    title: "Peer Review Process",
    body: "How manuscripts are screened, reviewed, and decided upon. Timelines and decision types.",
    href: "/peer-review",
  },
  {
    icon: Scale,
    title: "Publication Ethics",
    body: "Author duties on originality, authorship, data accuracy, conflicts of interest, and corrections.",
    href: "/publication-ethics",
  },
  {
    icon: Unlock,
    title: "Open Access & Copyright",
    body: "The journal is fully Open Access under CC BY-NC 4.0. Authors retain copyright.",
    href: "/oa-copyright",
  },
];

const PRE_SUBMISSION_CHECKLIST = [
  "The manuscript is original, unpublished, and not under consideration by another journal.",
  "The topic fits the journal's aims and scope (international trade, open-economy macroeconomics, international finance, related policy issues).",
  "The manuscript is in English, in Microsoft Word (.docx) format, double-spaced, 10 or 12 pt font, with consecutive page numbering.",
  "The title page includes author names with ORCID identifiers, affiliations, the corresponding author's e-mail, an abstract of up to 200 words, JEL codes, and up to 5 keywords.",
  "References follow the Harvard style, with DOI links where available.",
  "Any use of generative AI beyond spelling and grammar checks is declared on the Title Page.",
  "Any potential conflict of interest and all sources of funding are disclosed.",
];

const POST_ACCEPTANCE = [
  "Copy-editing and typesetting are performed by the Editorial Office.",
  "Authors receive proofs for verification prior to publication.",
  "Each article is assigned a DOI and deposited with Crossref.",
  "The article is published open-access in the current issue, immediately available on the journal website and OJS platform.",
  "Authors are encouraged to promote their article via institutional repositories, ORCID, RePEc, and personal channels, citing the journal as the original publisher.",
];

export default function ForAuthors() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <section className="bg-[#1b3a5c] py-12 lg:py-16">
        <div className="container">
          <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white">For Authors</h1>
          <p className="text-white/70 mt-2 text-sm">{JOURNAL.fullName}</p>
        </div>
      </section>

      <main className="flex-1">
        <div className="container py-10 lg:py-16">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex-1 max-w-3xl">
              {/* Intro */}
              <section className="mb-10">
                <p className="text-sm text-gray-600 leading-relaxed text-justify">
                  <em>{JOURNAL.fullName}</em> welcomes original research articles, review articles, and
                  policy-oriented contributions in international economics. Submission is free of
                  charge and no article processing charges (APCs) are applied. All accepted articles
                  are published open-access under a Creative Commons Attribution-NonCommercial 4.0
                  International licence.
                </p>
              </section>

              {/* Resources grid */}
              <section className="mb-12">
                <div className="accent-bar" />
                <h2 className="font-serif text-2xl font-bold text-[#1b3a5c] mb-6">
                  Author Resources
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {AUTHOR_RESOURCES.map((res) => {
                    const Icon = res.icon;
                    return (
                      <Link
                        key={res.href}
                        href={res.href}
                        className="group border border-gray-200 rounded p-5 hover:border-[#009e8e] hover:shadow-sm transition"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Icon size={20} className="text-[#009e8e]" />
                          <h3 className="text-sm font-bold text-[#1b3a5c] group-hover:text-[#009e8e]">
                            {res.title}
                          </h3>
                        </div>
                        <p className="text-xs text-gray-600 leading-relaxed">{res.body}</p>
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#009e8e] mt-3">
                          Read more <ArrowRight size={12} />
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </section>

              {/* Pre-submission checklist */}
              <section className="mb-12">
                <div className="accent-bar" />
                <h2 className="font-serif text-2xl font-bold text-[#1b3a5c] mb-4">
                  Pre-Submission Checklist
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 text-justify">
                  Before submitting through the OJS platform, please verify that:
                </p>
                <ul className="space-y-3">
                  {PRE_SUBMISSION_CHECKLIST.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed">
                      <CheckCircle size={16} className="text-[#009e8e] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Post-acceptance */}
              <section className="mb-12">
                <div className="accent-bar" />
                <h2 className="font-serif text-2xl font-bold text-[#1b3a5c] mb-4">
                  After Acceptance
                </h2>
                <ul className="space-y-3">
                  {POST_ACCEPTANCE.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#009e8e] shrink-0 mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Submit CTA */}
              <div className="bg-[#009e8e] rounded p-6 text-white">
                <h2 className="font-serif text-2xl font-bold flex items-center gap-2">
                  <Send size={20} /> Ready to Submit?
                </h2>
                <p className="text-white/90 text-sm mt-2 leading-relaxed">
                  Submissions are handled entirely through our OJS platform. If you are new to the
                  journal, register first; otherwise, log in with your credentials.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href={JOURNAL.submissionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#009e8e] text-sm font-bold rounded hover:bg-white/90"
                  >
                    SUBMIT <ExternalLink size={14} />
                  </a>
                  <a
                    href={JOURNAL.registerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/40 text-white text-sm font-medium rounded hover:bg-white/10"
                  >
                    Register
                  </a>
                  <a
                    href={JOURNAL.loginUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/40 text-white text-sm font-medium rounded hover:bg-white/10"
                  >
                    Login
                  </a>
                </div>
              </div>
            </div>

            <aside className="lg:w-72 shrink-0 space-y-6">
              <div className="bg-white border border-gray-200 rounded p-5">
                <h3 className="font-serif text-base font-bold text-[#1b3a5c] mb-3">Key Facts</h3>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-gray-500">Fees</dt>
                    <dd className="font-semibold text-[#1b3a5c]">No submission, no APCs</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-gray-500">Peer review</dt>
                    <dd className="font-semibold text-[#1b3a5c]">Double-blind</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-gray-500">Decision</dt>
                    <dd className="font-semibold text-[#1b3a5c]">~10 weeks</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-gray-500">License</dt>
                    <dd className="font-semibold text-[#1b3a5c]">CC BY-NC 4.0</dd>
                  </div>
                </dl>
              </div>

              <div className="bg-white border border-gray-200 rounded p-5">
                <h3 className="font-serif text-base font-bold text-[#1b3a5c] mb-3">Related</h3>
                <nav className="flex flex-col gap-2 text-sm">
                  <Link href="/for-reviewers" className="text-[#009e8e] hover:underline">
                    For Reviewers
                  </Link>
                  <Link href="/editorial-board" className="text-[#009e8e] hover:underline">
                    Editorial Board
                  </Link>
                  <Link href="/about" className="text-[#009e8e] hover:underline">
                    About the Review
                  </Link>
                  <Link href="/contacts" className="text-[#009e8e] hover:underline">
                    Contacts
                  </Link>
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
