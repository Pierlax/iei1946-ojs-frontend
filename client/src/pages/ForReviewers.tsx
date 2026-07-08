// ============================================================
// For Reviewers Hub Page - IEI 1946
// Reviewer role, duties, criteria, and recognition.
// Aligns with COPE reviewer guidelines.
// ============================================================

import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { JOURNAL } from "@/lib/data";
import {
  Eye,
  Lock,
  AlertTriangle,
  Clock,
  Award,
  UserCheck,
  ExternalLink,
} from "lucide-react";

const DUTIES = [
  {
    icon: UserCheck,
    title: "Contribution to Editorial Decisions",
    body: "Reviewers assist the handling editor in reaching a fair editorial decision by assessing the manuscript's originality, methodological rigor, clarity of exposition, contribution to the literature, and relevance to the journal's aims and scope. Constructive comments to the authors are welcomed even when the recommendation is to reject.",
  },
  {
    icon: Lock,
    title: "Confidentiality",
    body: "Any manuscript received for review must be treated as a confidential document. The manuscript, its content, and any communication about it may not be shared with, discussed with, or shown to any third party without the explicit authorisation of the Editor.",
  },
  {
    icon: Eye,
    title: "Objectivity and Transparency",
    body: "Reviews should be conducted objectively and formulated in clear, evidence-based, well-argued terms. Personal criticism of the author is inappropriate. Reviewers should indicate relevant published work that has not been cited and identify any substantial similarity or overlap between the manuscript and other published work of which they are personally aware.",
  },
  {
    icon: AlertTriangle,
    title: "Conflicts of Interest",
    body: "Reviewers must decline to review manuscripts in which they have a conflict of interest, whether financial, personal, or professional, with any of the authors, their institutions, or the funders of the research. If in doubt, the reviewer should disclose the potential conflict to the handling editor and follow their guidance.",
  },
  {
    icon: Clock,
    title: "Timeliness",
    body: "Reviewers are asked to deliver their review within four to six weeks. A reviewer who feels unqualified, or is unable to complete the review within a reasonable time, should notify the Editor promptly so that alternative reviewers can be found.",
  },
];

const REVIEW_CHECKLIST = [
  "Does the paper make an original and non-trivial contribution to international economics?",
  "Are the research question and hypotheses clearly stated and well-motivated?",
  "Is the methodology appropriate, rigorously applied, and adequately described?",
  "Are the data sources, samples, and empirical strategy documented in a way that supports reproducibility?",
  "Are the results correctly interpreted and clearly presented in tables, figures, and text?",
  "Is the discussion balanced, with limitations acknowledged and policy or theoretical implications clearly drawn?",
  "Is the literature review current, accurate, and free of significant omissions?",
  "Is the writing clear, concise, and appropriate for an international academic readership?",
];

export default function ForReviewers() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <section className="bg-[#1b3a5c] py-12 lg:py-16">
        <div className="container">
          <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white">For Reviewers</h1>
          <p className="text-white/70 mt-2 text-sm">{JOURNAL.fullName}</p>
        </div>
      </section>

      <main className="flex-1">
        <div className="container py-10 lg:py-16">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex-1 max-w-3xl">
              {/* Intro */}
              <section className="mb-10">
                <p className="text-sm text-gray-600 leading-relaxed mb-4 text-justify">
                  Rigorous, timely, and constructive peer review is central to the scholarly standing
                  of <em>{JOURNAL.fullName}</em>. This page sets out the duties expected of reviewers
                  and the criteria used to assess submissions. Reviewer guidelines are aligned with the{" "}
                  <a
                    href="https://publicationethics.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#009e8e] font-semibold hover:underline"
                  >
                    COPE
                  </a>{" "}
                  ethical framework.
                </p>
              </section>

              {/* Duties */}
              <section className="mb-12">
                <div className="accent-bar" />
                <h2 className="font-serif text-2xl font-bold text-[#1b3a5c] mb-6">
                  Reviewer Duties
                </h2>
                <div className="space-y-6">
                  {DUTIES.map((d) => {
                    const Icon = d.icon;
                    return (
                      <div key={d.title} className="flex gap-4">
                        <div className="shrink-0 w-9 h-9 rounded bg-[#009e8e]/10 flex items-center justify-center">
                          <Icon size={18} className="text-[#009e8e]" />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-[#1b3a5c] mb-1">{d.title}</h3>
                          <p className="text-sm text-gray-600 leading-relaxed text-justify">
                            {d.body}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Review checklist */}
              <section className="mb-12">
                <div className="accent-bar" />
                <h2 className="font-serif text-2xl font-bold text-[#1b3a5c] mb-4">
                  Review Checklist
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 text-justify">
                  A useful review addresses the following questions. Reviewers are not required to
                  respond to each item explicitly, but the resulting report should provide the
                  handling editor with sufficient evidence to reach a decision.
                </p>
                <ol className="space-y-2 text-sm text-gray-600 list-decimal list-inside">
                  {REVIEW_CHECKLIST.map((item, i) => (
                    <li key={i} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ol>
              </section>

              {/* Recognition */}
              <section className="mb-12">
                <div className="accent-bar" />
                <h2 className="font-serif text-2xl font-bold text-[#1b3a5c] mb-4 flex items-center gap-2">
                  <Award size={22} className="text-[#009e8e]" />
                  Reviewer Recognition
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-3 text-justify">
                  The journal publishes an annual list of reviewers who have contributed to the
                  double-blind peer-review process during the previous calendar year. Reviewers'
                  names are listed with their permission and without any reference to specific
                  manuscripts.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed text-justify">
                  Reviewers may also record their peer-review activity for this journal through
                  their ORCID record, at their discretion.
                </p>
              </section>

              {/* Contact */}
              <div className="bg-[#1b3a5c] rounded p-6 text-white">
                <h2 className="font-serif text-xl font-bold">Interested in Reviewing?</h2>
                <p className="text-white/80 text-sm mt-2 leading-relaxed">
                  Scholars in international trade, open-economy macroeconomics, international
                  finance, and related fields who wish to be considered as reviewers may write to
                  the Editorial Office with a brief statement of research interests and a link to
                  their publications or CV.
                </p>
                <a
                  href={`mailto:${JOURNAL.email}?subject=Reviewer%20interest`}
                  className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-[#009e8e] text-white text-sm font-bold rounded hover:bg-[#008a7c]"
                >
                  Contact the Editorial Office <ExternalLink size={14} />
                </a>
              </div>
            </div>

            <aside className="lg:w-72 shrink-0 space-y-6">
              <div className="bg-white border border-gray-200 rounded p-5">
                <h3 className="font-serif text-base font-bold text-[#1b3a5c] mb-3">At a Glance</h3>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-gray-500">Review type</dt>
                    <dd className="font-semibold text-[#1b3a5c]">Double-blind</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-gray-500">Turnaround</dt>
                    <dd className="font-semibold text-[#1b3a5c]">4-6 weeks</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-gray-500">Framework</dt>
                    <dd className="font-semibold text-[#1b3a5c]">COPE-aligned</dd>
                  </div>
                </dl>
              </div>

              <div className="bg-white border border-gray-200 rounded p-5">
                <h3 className="font-serif text-base font-bold text-[#1b3a5c] mb-3">Related</h3>
                <nav className="flex flex-col gap-2 text-sm">
                  <Link href="/peer-review" className="text-[#009e8e] hover:underline">
                    Peer Review Process
                  </Link>
                  <Link href="/publication-ethics" className="text-[#009e8e] hover:underline">
                    Publication Ethics
                  </Link>
                  <Link href="/for-authors" className="text-[#009e8e] hover:underline">
                    For Authors
                  </Link>
                  <Link href="/editorial-board" className="text-[#009e8e] hover:underline">
                    Editorial Board
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
