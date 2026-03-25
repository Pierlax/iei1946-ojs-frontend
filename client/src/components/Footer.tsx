// ============================================================
// Footer Component - Elsevier Layout + IEI Institutional Colors
// Navy #1b3a5c, Teal #009e8e
// ============================================================

import { Link } from "wouter";
import { JOURNAL, INDEXING } from "@/lib/data";
import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1b3a5c] text-white/80">
      {/* Main footer content */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Journal info */}
          <div>
            <img
              src={JOURNAL.logoFooterUrl}
              alt={JOURNAL.fullName}
              className="h-12 w-auto mb-4 opacity-90"
            />
            <p className="text-sm text-white/50 mb-3 leading-relaxed">
              A peer-reviewed, open access journal published by the {JOURNAL.publisherEn} since {JOURNAL.foundedYear}.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <span className="bg-[#009e8e] text-white text-xs px-2 py-0.5 rounded font-semibold">Open Access</span>
              <span className="text-xs text-white/40">ISSN: {JOURNAL.issn}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Journal</h4>
            <ul className="space-y-2.5">
              <li><Link href="/review" className="text-sm text-white/60 hover:text-[#00c4b0] transition-colors">Current Issue</Link></li>
              <li><Link href="/review" className="text-sm text-white/60 hover:text-[#00c4b0] transition-colors">Archive</Link></li>
              <li><Link href="/about" className="text-sm text-white/60 hover:text-[#00c4b0] transition-colors">About the Review</Link></li>
              <li><Link href="/editorial-board" className="text-sm text-white/60 hover:text-[#00c4b0] transition-colors">Editorial Board</Link></li>
              <li><Link href="/institute" className="text-sm text-white/60 hover:text-[#00c4b0] transition-colors">Institute</Link></li>
              <li><Link href="/blog" className="text-sm text-white/60 hover:text-[#00c4b0] transition-colors">News & Events</Link></li>
            </ul>
          </div>

          {/* For Authors */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">For Authors</h4>
            <ul className="space-y-2.5">
              <li><Link href="/submission-guidelines" className="text-sm text-white/60 hover:text-[#00c4b0] transition-colors">Submission Guidelines</Link></li>
              <li>
                <a href={JOURNAL.loginUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-[#00c4b0] transition-colors">
                  Author Login
                </a>
              </li>
              <li><Link href="/oa-copyright" className="text-sm text-white/60 hover:text-[#00c4b0] transition-colors">OA & Copyright</Link></li>
              <li><Link href="/publication-ethics" className="text-sm text-white/60 hover:text-[#00c4b0] transition-colors">Publication Ethics</Link></li>
              <li><Link href="/contacts" className="text-sm text-white/60 hover:text-[#00c4b0] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Indexing & Contact */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Indexed In</h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {INDEXING.map((db) => (
                <span key={db} className="text-xs bg-white/10 text-white/70 px-2.5 py-1 rounded">
                  {db}
                </span>
              ))}
            </div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Contact</h4>
            <p className="text-sm text-white/50 leading-relaxed">
              {JOURNAL.address}
            </p>
            <a href={`mailto:${JOURNAL.email}`} className="text-sm text-[#00c4b0] hover:text-[#00d8c8] transition-colors mt-1 inline-block">
              {JOURNAL.email}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} {JOURNAL.publisherEn}. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <a href="https://www.facebook.com/iei1946" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#00c4b0] transition-colors" aria-label="Facebook">
              <Facebook size={15} />
            </a>
            <a href="https://twitter.com/iei1946" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#00c4b0] transition-colors" aria-label="X / Twitter">
              <Twitter size={15} />
            </a>
            <a href="https://www.linkedin.com/company/iei1946" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#00c4b0] transition-colors" aria-label="LinkedIn">
              <Linkedin size={15} />
            </a>
            <a href="https://www.youtube.com/@iei1946" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#00c4b0] transition-colors" aria-label="YouTube">
              <Youtube size={15} />
            </a>
            <span className="text-white/20 mx-1">|</span>
            <a href={JOURNAL.licenseUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-white/40 hover:text-white/60 transition-colors">
              CC BY-NC 4.0
            </a>
            <span className="text-white/20">|</span>
            <Link href="/oa-copyright" className="text-xs text-white/40 hover:text-white/60 transition-colors">
              Terms
            </Link>
            <span className="text-white/20">|</span>
            <Link href="/publication-ethics" className="text-xs text-white/40 hover:text-white/60 transition-colors">
              Ethics
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
