// ============================================================
// Publication Ethics Page - IEI 1946
// COPE-compliant ethics statement
// ============================================================

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { JOURNAL } from "@/lib/data";
import { Shield, Users, Eye, BookOpen, AlertTriangle } from "lucide-react";

const SECTIONS = [
  {
    icon: Users,
    title: "1. Duties and Responsibilities of Authors",
    subsections: [
      {
        subtitle: "Originality and Plagiarism",
        text: "Authors should ensure that their submitted work is entirely original. If the work and/or words of others have been used, they must be appropriately cited or quoted. Plagiarism in all its forms constitutes unethical publishing behaviour and is unacceptable.",
      },
      {
        subtitle: "Authorship and Contributorship",
        text: "Only persons who have made a significant contribution to the conception, design, execution, or interpretation of the reported study should be listed as authors. All those who have made significant contributions should be listed as co-authors. The corresponding author should ensure that all appropriate co-authors are included on the paper.",
      },
      {
        subtitle: "Data Accuracy and Availability",
        text: "Authors should present an accurate account of the work performed as well as an objective discussion of its significance. Underlying data should be represented accurately in the paper. Fraudulent or knowingly inaccurate statements constitute unethical behaviour and are unacceptable.",
      },
      {
        subtitle: "Disclosure of Funding and Conflicts of Interest",
        text: "All authors should disclose in their manuscript any financial or other substantive conflict of interest that might be construed to influence the results or interpretation of their manuscript. All sources of financial support for the project should be disclosed.",
      },
      {
        subtitle: "Reporting of Errors",
        text: "When an author discovers a significant error or inaccuracy in his/her own published work, it is the author's obligation to promptly notify the journal editor or publisher and cooperate with the editor to retract or correct the paper.",
      },
    ],
  },
  {
    icon: Eye,
    title: "2. Duties and Responsibilities of Editors",
    subsections: [
      {
        subtitle: "Editorial Independence and Fairness",
        text: "The editor is responsible for deciding which of the articles submitted to the journal should be published. The editor should evaluate manuscripts for their intellectual content without regard to race, gender, sexual orientation, religious belief, ethnic origin, citizenship, or political philosophy of the authors.",
      },
      {
        subtitle: "Peer Review Process",
        text: "The journal follows a double-blind peer-review process. Each submitted manuscript is reviewed by at least two independent reviewers with expertise in the relevant field. The editor ensures that the review process is fair, unbiased, and timely.",
      },
      {
        subtitle: "Confidentiality",
        text: "The editor and any editorial staff must not disclose any information about a submitted manuscript to anyone other than the corresponding author, reviewers, potential reviewers, other editorial advisers, and the publisher, as appropriate.",
      },
      {
        subtitle: "Handling of Complaints and Appeals",
        text: "The editor should take reasonable responsive measures when ethical complaints have been presented concerning a submitted manuscript or published paper. Such measures will generally include contacting the author of the manuscript or paper and giving due consideration of the respective complaint or claims made.",
      },
      {
        subtitle: "Dealing with Misconduct",
        text: "The editor should take reasonably responsive measures when ethical complaints have been presented concerning a submitted manuscript or published paper, in conjunction with the publisher. Every reported act of unethical publishing behaviour must be looked into, even if it is discovered years after publication.",
      },
    ],
  },
  {
    icon: BookOpen,
    title: "3. Duties and Responsibilities of Reviewers",
    subsections: [
      {
        subtitle: "Contribution to Editorial Decisions",
        text: "Peer review assists the editor in making editorial decisions and through the editorial communications with the author may also assist the author in improving the paper.",
      },
      {
        subtitle: "Confidentiality",
        text: "Any manuscripts received for review must be treated as confidential documents. They must not be shown to or discussed with others except as authorized by the editor.",
      },
      {
        subtitle: "Objectivity and Transparency",
        text: "Reviews should be conducted objectively. Personal criticism of the author is inappropriate. Referees should express their views clearly with supporting arguments.",
      },
      {
        subtitle: "Conflicts of Interest",
        text: "Reviewers should not consider manuscripts in which they have conflicts of interest resulting from competitive, collaborative, or other relationships or connections with any of the authors, companies, or institutions connected to the papers.",
      },
      {
        subtitle: "Timeliness",
        text: "Any selected referee who feels unqualified to review the research reported in a manuscript or knows that its prompt review will be impossible should notify the editor and excuse himself from the review process.",
      },
    ],
  },
  {
    icon: Shield,
    title: "4. Data Sharing and Reproducibility",
    subsections: [
      {
        subtitle: "",
        text: "Authors are encouraged to make their data and materials available to other researchers, subject to ethical and legal constraints. When data sharing is not possible, authors should provide a clear statement explaining the restrictions. The journal supports the principles of research reproducibility and transparency.",
      },
    ],
  },
  {
    icon: AlertTriangle,
    title: "5. Corrections, Retractions, and Post-Publication Discussion",
    subsections: [
      {
        subtitle: "",
        text: "The journal will publish corrections, clarifications, retractions, and apologies when needed. Corrections will be linked to the original article. Retractions will be issued in cases of serious misconduct, including fabrication, falsification, or plagiarism. The journal encourages post-publication discussion and will consider publishing substantive comments on published articles.",
      },
    ],
  },
];

export default function PublicationEthics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <section className="bg-[#1a3c5e] py-12 lg:py-16">
        <div className="container">
          <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white">Publication Ethics</h1>
          <p className="text-white/70 mt-2 text-sm">{JOURNAL.fullName}</p>
        </div>
      </section>

      <main className="flex-1">
        <div className="container py-10 lg:py-16 max-w-3xl">
          <div className="bg-white rounded-lg border border-border p-6 mb-10">
            <h2 className="font-serif text-xl font-bold text-[#1a3c5e] mb-3">
              Publication Ethics and Malpractice Statement
            </h2>
            <p className="text-sm text-foreground/80 leading-relaxed text-justify">
              <em>{JOURNAL.fullName}</em> is committed to upholding the highest standards of
              publication ethics and takes all possible measures against any publication malpractice.
              The journal follows the guidelines and best practices published by professional
              organizations, including the{" "}
              <a
                href="https://publicationethics.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00b4a0] font-semibold hover:underline"
              >
                Committee on Publication Ethics (COPE)
              </a>
              .
            </p>
          </div>

          {SECTIONS.map((section) => {
            const Icon = section.icon;
            return (
              <section key={section.title} className="mb-10">
                <h2 className="font-serif text-xl font-bold text-[#1a3c5e] mb-4 pb-2 border-b border-border flex items-center gap-2">
                  <Icon size={20} className="text-[#00b4a0]" />
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.subsections.map((sub, i) => (
                    <div key={i}>
                      {sub.subtitle && (
                        <h3 className="text-sm font-bold text-[#1a3c5e] mb-1">{sub.subtitle}</h3>
                      )}
                      <p className="text-sm text-foreground/80 leading-relaxed text-justify">
                        {sub.text}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}
