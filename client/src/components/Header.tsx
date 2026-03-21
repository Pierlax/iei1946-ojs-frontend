// ============================================================
// Header Component - IEI 1946
// Design: Institutional Elegance
// Typography: Playfair Display (serif) + Source Sans 3 (sans)
// Colors: Dark navy (#1a3c5e), Teal accent (#00b4a0)
// ============================================================

import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, ExternalLink } from "lucide-react";
import { JOURNAL, NAV_ITEMS } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="w-full bg-white border-b border-border sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-[#1a3c5e] text-white/90 text-sm hidden lg:block">
        <div className="container flex items-center justify-between py-1.5">
          <span className="font-sans text-xs tracking-wide">
            ISSN: {JOURNAL.issn} &middot; Published by the {JOURNAL.publisherEn}
          </span>
          <div className="flex items-center gap-4 text-xs">
            <a
              href={JOURNAL.submissionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00b4a0] transition-colors flex items-center gap-1"
            >
              Author Login <ExternalLink size={11} />
            </a>
            <Link href="/submission-guidelines" className="hover:text-[#00b4a0] transition-colors">
              Submit a Paper
            </Link>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container flex items-center justify-between py-3 lg:py-4">
        {/* Logo / Title */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex flex-col leading-tight">
            <span className="font-serif text-lg lg:text-xl font-bold text-[#1a3c5e] tracking-tight">
              Economia Internazionale
            </span>
            <span className="font-serif text-sm lg:text-base italic text-[#1a3c5e]/70">
              / International Economics
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                location === item.path
                  ? "text-[#00b4a0] bg-[#00b4a0]/5"
                  : "text-[#1a3c5e] hover:text-[#00b4a0] hover:bg-[#00b4a0]/5"
              }`}
            >
              {item.label}
            </Link>
          ))}

          {/* About dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button className="px-3 py-2 text-sm font-medium text-[#1a3c5e] hover:text-[#00b4a0] transition-colors rounded-md flex items-center gap-1">
              About <ChevronDown size={14} className={`transition-transform ${aboutOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {aboutOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-1 w-56 bg-white rounded-lg shadow-lg border border-border py-2 z-50"
                >
                  <Link href="/about" className="block px-4 py-2 text-sm text-[#1a3c5e] hover:bg-[#00b4a0]/5 hover:text-[#00b4a0]">
                    About the Review
                  </Link>
                  <Link href="/submission-guidelines" className="block px-4 py-2 text-sm text-[#1a3c5e] hover:bg-[#00b4a0]/5 hover:text-[#00b4a0]">
                    Submission Guidelines
                  </Link>
                  <Link href="/editorial-board" className="block px-4 py-2 text-sm text-[#1a3c5e] hover:bg-[#00b4a0]/5 hover:text-[#00b4a0]">
                    Editorial Board
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-[#1a3c5e]"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden border-t border-border bg-white"
          >
            <nav className="container py-4 flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                    location === item.path
                      ? "text-[#00b4a0] bg-[#00b4a0]/5"
                      : "text-[#1a3c5e] hover:bg-[#00b4a0]/5"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="border-t border-border mt-2 pt-2">
                <Link href="/about" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-sm text-[#1a3c5e]">
                  About the Review
                </Link>
                <Link href="/submission-guidelines" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-sm text-[#1a3c5e]">
                  Submission Guidelines
                </Link>
                <Link href="/editorial-board" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-sm text-[#1a3c5e]">
                  Editorial Board
                </Link>
              </div>
              <div className="border-t border-border mt-2 pt-2">
                <a
                  href={JOURNAL.submissionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-3 text-sm font-medium text-[#00b4a0]"
                >
                  Author Login
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
