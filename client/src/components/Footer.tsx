// ============================================================
// Footer Component - IEI 1946
// Matches the current site footer with all links and info
// ============================================================

import { Link } from "wouter";
import { JOURNAL, NAV_ITEMS, INDEXING } from "@/lib/data";
import { ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1a3c5e] text-white/90">
      {/* Main footer */}
      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Institute info */}
          <div>
            <h3 className="font-serif text-lg font-bold text-white mb-4">
              {JOURNAL.instituteEn}
            </h3>
            <p className="text-sm text-white/70 leading-relaxed mb-3">
              of the {JOURNAL.publisherEn}
            </p>
            <div className="text-sm text-white/60 space-y-1">
              <p>{JOURNAL.institute}</p>
              <p>Camera di Commercio di Genova</p>
              <p>{JOURNAL.address}</p>
            </div>
            <a
              href={`https://${JOURNAL.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-[#00b4a0] hover:text-[#00d4c0] mt-3 transition-colors"
            >
              {JOURNAL.website} <ExternalLink size={12} />
            </a>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="font-sans text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="text-sm text-white/70 hover:text-[#00b4a0] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/about" className="text-sm text-white/70 hover:text-[#00b4a0] transition-colors">
                About the Review
              </Link>
              <Link href="/submission-guidelines" className="text-sm text-white/70 hover:text-[#00b4a0] transition-colors">
                Submission Guidelines
              </Link>
            </nav>
          </div>

          {/* Column 3: For Authors */}
          <div>
            <h4 className="font-sans text-sm font-semibold text-white uppercase tracking-wider mb-4">
              For Authors
            </h4>
            <nav className="flex flex-col gap-2">
              <Link href="/submission-guidelines" className="text-sm text-white/70 hover:text-[#00b4a0] transition-colors">
                Submission Guidelines
              </Link>
              <a
                href={JOURNAL.submissionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/70 hover:text-[#00b4a0] transition-colors flex items-center gap-1"
              >
                Submit a Paper <ExternalLink size={11} />
              </a>
              <a
                href={JOURNAL.submissionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/70 hover:text-[#00b4a0] transition-colors flex items-center gap-1"
              >
                Author Login <ExternalLink size={11} />
              </a>
              <Link href="/oa-copyright" className="text-sm text-white/70 hover:text-[#00b4a0] transition-colors">
                OA & Copyright
              </Link>
              <Link href="/publication-ethics" className="text-sm text-white/70 hover:text-[#00b4a0] transition-colors">
                Publication Ethics
              </Link>
            </nav>
          </div>

          {/* Column 4: Indexed in */}
          <div>
            <h4 className="font-sans text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Indexed In
            </h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {INDEXING.map((idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-medium bg-white/10 rounded-full text-white/80"
                >
                  {idx}
                </span>
              ))}
            </div>
            <h4 className="font-sans text-sm font-semibold text-white uppercase tracking-wider mb-3">
              Contact
            </h4>
            <a
              href={`mailto:${JOURNAL.email}`}
              className="text-sm text-[#00b4a0] hover:text-[#00d4c0] transition-colors"
            >
              {JOURNAL.email}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/50">
            All articles in <em>{JOURNAL.fullName}</em> are licensed under{" "}
            <a
              href={JOURNAL.licenseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[#00b4a0] underline"
            >
              {JOURNAL.license}
            </a>
          </p>
          <div className="flex items-center gap-4 text-xs text-white/50">
            <Link href="/privacy" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
            <Link href="/cookie" className="hover:text-white/70 transition-colors">Cookie Policy</Link>
            <Link href="/legal" className="hover:text-white/70 transition-colors">Legal Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
