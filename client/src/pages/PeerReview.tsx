// ============================================================
// Peer Review Process Page - IEI 1946
// Dedicated page describing the double-blind peer-review workflow.
// Scopus requires a clearly documented peer-review policy.
// ============================================================

import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { JOURNAL, REVIEW_METRICS } from "@/lib/data";
import {
  ShieldCheck,
  Users,
  ClipboardList,
  Gavel,
  Clock,
  MessageSquare,
  ExternalLink,
} from "lucide-react";

const WORKFLOW = [
  {
    step: "1",
    title: "Submission",
    body: "Authors submit their manuscript through the journal's OJS platform. The corresponding author confirms that the work is original, unpublished, and not under consideration elsewhere.",
  },
  {
    step: "2",
    title: "Editorial Screening",
    body: "The Editor in Chief and/or a Co-Editor perform an initial assessment for scope fit, originality, methodological soundness, and adherence to the submission guidelines. Manuscripts that clearly do not meet these criteria are desk-rejected within about two weeks.",
  },
  {
    step: "3",
    title: "Reviewer Assignment",
    body: "Manuscripts passing the initial screening are assigned to at least two independent reviewers selected on the basis of documented expertise in the paper's subject area, absence of conflicts of interest, and geographic diversity where possible.",
  },
  {
    step: "4",
    title: "Double-Blind Review",
    body: "Reviewers evaluate the manuscript anonymously: author identities are concealed from reviewers, and reviewer identities are concealed from authors. Reviews assess originality, methodological rigor, contribution to the literature, clarity of exposition, and relevance to the journal's aims and scope.",
  },
  {
    step: "5",
    title: "Editorial Decision",
    body: "The handling editor synthesises the reviews and issues one of four decisions: accept, minor revisions, major revisions, or reject. Reviewers' comments are shared with the author in full (anonymised).",
  },
  {
    step: "6",
    title: "Revision and Final Decision",
    body: "Authors revise their manuscript in response to reviewer comments and submit a point-by-point response letter. Revised versions may undergo further review rounds before a final decision.",
  },
  {
    step: "7",
    title: "Publication",
    body: "Accepted articles are copy-edited, typeset, assigned a DOI, and published open-access under CC BY-NC 4.0. Articles are immediately available online in the current issue.",
  },
];

const REVIEWER_CRITERIA = [
  "Recognised expertise in the manuscript's subject area, evidenced by peer-reviewed publications or equivalent scholarly work.",
  "No competing interests with the authors, their institutions, or the funding sources declared in the manuscript.",
  "Availability to deliver a substantive review within four to six weeks.",
  "Commitment to confidentiality: the manuscript, its content, and any communication about it must not be shared or discussed outside the review process.",
];

const DECISIONS = [
  {
    label: "Accept",
    body: "The manuscript meets the journal's standards and requires no substantive changes.",
  },
  {
    label: "Minor Revisions",
    body: "The manuscript is publishable with limited edits; a further round of review is generally not required.",
  },
  {
    label: "Major Revisions",
    body: "Substantive changes are needed; the revised manuscript will typically be re-evaluated by the original reviewers.",
  },
  {
    label: "Reject",
    body: "The manuscript is not suitable for publication in its current form. Authors may resubmit only after a substantial re-conceptualisation, at the Editor's invitation.",
  },
];

export default function PeerReview() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <section className="bg-[#1b3a5c] py-12 lg:py-16">
        <div className="container">
          <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white">
            Peer Review Process
          </h1>
          <p className="text-white/70 mt-2 text-sm">{JOURNAL.fullName}</p>
        </div>
      </section>

      <main className="flex-1">
        <div className="container py-10 lg:py-16">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex-1 max-w-3xl">
              {/* Overview */}
              <section className="mb-10">
                <div className="accent-bar" />
                <h2 className="font-serif text-2xl font-bold text-[#1b3a5c] mb-4 flex items-center gap-2">
                  <ShieldCheck size={22} className="text-[#009e8e]" />
                  Overview
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 text-justify">
                  <em>{JOURNAL.fullName}</em> operates a rigorous <strong>double-blind peer-review</strong>{" "}
                  process. Every manuscript that passes the initial editorial screening is evaluated by
                  at least two independent reviewers selected on the basis of documented expertise.
                  Author and reviewer identities are concealed throughout the process to ensure
                  impartial assessment.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed text-justify">
                  The journal follows the guidelines and best practices published by the{" "}
                  <a
                    href="https://publicationethics.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#009e8e] font-semibold hover:underline"
                  >
                    Committee on Publication Ethics (COPE)
                  </a>{" "}
                  in the handling of submissions, disputes, and post-publication corrections.
                </p>
              </section>

              {/* Editorial Workflow */}
              <section className="mb-10">
                <div className="accent-bar" />
                <h2 className="font-serif text-2xl font-bold text-[#1b3a5c] mb-6 flex items-center gap-2">
                  <ClipboardList size={22} className="text-[#009e8e]" />
                  Editorial Workflow
                </h2>
                <ol className="space-y-5">
                  {WORKFLOW.map((stage) => (
                    <li key={stage.step} className="flex gap-4">
                      <div className="shrink-0 w-9 h-9 rounded-full bg-[#009e8e] text-white flex items-center justify-center font-serif font-bold text-sm">
                        {stage.step}
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-[#1b3a5c] mb-1">{stage.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed text-justify">{stage.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>

              {/* Reviewer Selection Criteria */}
              <section className="mb-10">
                <div className="accent-bar" />
                <h2 className="font-serif text-2xl font-bold text-[#1b3a5c] mb-4 flex items-center gap-2">
                  <Users size={22} className="text-[#009e8e]" />
                  Reviewer Selection Criteria
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 text-justify">
                  Reviewers are selected by the handling editor from a database of scholars maintained
                  by the Editorial Office, complemented by targeted searches of published literature in
                  the manuscript's specific area. All reviewers must meet the following criteria:
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {REVIEWER_CRITERIA.map((criterion, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#009e8e] shrink-0 mt-2" />
                      <span className="leading-relaxed">{criterion}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Editorial Decisions */}
              <section className="mb-10">
                <div className="accent-bar" />
                <h2 className="font-serif text-2xl font-bold text-[#1b3a5c] mb-4 flex items-center gap-2">
                  <Gavel size={22} className="text-[#009e8e]" />
                  Editorial Decisions
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {DECISIONS.map((d) => (
                    <div key={d.label} className="border border-gray-200 rounded p-4">
                      <h3 className="text-sm font-bold text-[#1b3a5c] mb-1">{d.label}</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">{d.body}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Timeline */}
              <section className="mb-10">
                <div className="accent-bar" />
                <h2 className="font-serif text-2xl font-bold text-[#1b3a5c] mb-4 flex items-center gap-2">
                  <Clock size={22} className="text-[#009e8e]" />
                  Indicative Timeline
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 text-justify">
                  The journal aims to deliver a first decision within approximately ten weeks of
                  submission. The figures below reflect typical timings; actual duration may vary
                  depending on reviewer availability and the number of revision rounds.
                </p>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-gray-50 border border-gray-200 rounded p-6">
                  {Object.values(REVIEW_METRICS).map((metric) => (
                    <div key={metric.label} className="text-center">
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="font-serif text-2xl font-bold text-[#009e8e]">
                          {metric.value}
                        </span>
                        <span className="text-xs text-gray-500">{metric.unit}</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Appeals */}
              <section className="mb-10">
                <div className="accent-bar" />
                <h2 className="font-serif text-2xl font-bold text-[#1b3a5c] mb-4 flex items-center gap-2">
                  <MessageSquare size={22} className="text-[#009e8e]" />
                  Appeals and Complaints
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-3 text-justify">
                  Authors who believe that a decision has been reached in error, or that a review is
                  factually incorrect, may submit a written appeal to the Editor in Chief within thirty
                  days of the decision, providing a specific point-by-point justification.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed text-justify">
                  Complaints regarding editorial conduct, ethics, or misconduct are handled following
                  COPE guidelines. In cases of unresolved dispute, the journal may consult external
                  advisors or refer the matter to COPE for guidance.
                </p>
              </section>

              {/* Related links */}
              <section>
                <h3 className="font-serif text-base font-bold text-[#1b3a5c] mb-3">Related</h3>
                <div className="flex flex-wrap gap-2 text-sm">
                  <Link
                    href="/publication-ethics"
                    className="px-3 py-1.5 border border-[#009e8e]/30 text-[#009e8e] rounded hover:bg-[#009e8e]/5"
                  >
                    Publication Ethics
                  </Link>
                  <Link
                    href="/submission-guidelines"
                    className="px-3 py-1.5 border border-[#009e8e]/30 text-[#009e8e] rounded hover:bg-[#009e8e]/5"
                  >
                    Submission Guidelines
                  </Link>
                  <Link
                    href="/for-authors"
                    className="px-3 py-1.5 border border-[#009e8e]/30 text-[#009e8e] rounded hover:bg-[#009e8e]/5"
                  >
                    For Authors
                  </Link>
                  <Link
                    href="/for-reviewers"
                    className="px-3 py-1.5 border border-[#009e8e]/30 text-[#009e8e] rounded hover:bg-[#009e8e]/5"
                  >
                    For Reviewers
                  </Link>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="lg:w-72 shrink-0 space-y-6">
              <div className="bg-white border border-gray-200 rounded p-5">
                <h3 className="font-serif text-base font-bold text-[#1b3a5c] mb-3">At a Glance</h3>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-gray-500">Review type</dt>
                    <dd className="font-semibold text-[#1b3a5c]">Double-blind</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-gray-500">Reviewers per submission</dt>
                    <dd className="font-semibold text-[#1b3a5c]">At least two</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-gray-500">First decision</dt>
                    <dd className="font-semibold text-[#1b3a5c]">~10 weeks</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-gray-500">Standards</dt>
                    <dd className="font-semibold text-[#1b3a5c]">COPE</dd>
                  </div>
                </dl>
              </div>

              <div className="bg-[#1b3a5c] rounded p-5 text-white">
                <h3 className="font-serif text-base font-bold">Ready to Submit?</h3>
                <p className="text-white/70 text-xs mt-2">Free submission. No APCs.</p>
                <a
                  href={JOURNAL.submissionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full gap-2 mt-3 px-4 py-2 bg-[#009e8e] text-white text-sm font-bold rounded hover:bg-[#008a7c] transition-colors"
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
