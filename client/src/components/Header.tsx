// ============================================================
// Header Component - Elsevier Layout + IEI Institutional Colors
// Navy #1b3a5c, Teal #009e8e
// Typography: Source Serif 4 (headings) + Nunito Sans (body)
// ============================================================

import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, ExternalLink, Search } from "lucide-react";
import { JOURNAL, NAV_ITEMS } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Top utility bar - deep navy */}
      <div className="bg-[#1b3a5c] text-white/80 text-xs hidden lg:block">
        <div className="container flex items-center justify-between py-2">
          <div className="flex items-center gap-6">
            <span className="tracking-wide">
              ISSN: {JOURNAL.issn}
            </span>
            <span className="text-white/40">|</span>
            <span>Published by the {JOURNAL.publisherEn}</span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={JOURNAL.submissionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00c4b0] transition-colors flex items-center gap-1.5 font-semibold"
            >
              Author Login <ExternalLink size={10} />
            </a>
            <span className="text-white/30">|</span>
            <Link href="/submission-guidelines" className="hover:text-[#00c4b0] transition-colors font-semibold">
              Submit a Paper
            </Link>
          </div>
        </div>
      </div>

      {/* Journal banner - IEI navy gradient */}
      <div className="bg-gradient-to-r from-[#1b3a5c] to-[#234b73] text-white">
        <div className="container flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-4 group">
            <img
              src={JOURNAL.logoHeaderUrl}
              alt="IEI Logo"
              className="h-10 w-auto hidden sm:block brightness-0 invert"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-serif text-xl lg:text-2xl font-bold tracking-tight">
                {JOURNAL.name}
              </span>
              <span className="text-sm text-white/70 font-sans">
                / {JOURNAL.nameEn}
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-2 text-xs">
              <span className="bg-[#009e8e] text-white px-2.5 py-1 rounded font-bold">Open Access</span>
              <span className="border border-white/30 text-white/90 px-2.5 py-1 rounded">Peer-Reviewed</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Main navigation bar - white, tab style */}
      <div className="bg-white border-b border-gray-200 shadow-sm hidden lg:block">
        <div className="container flex items-center justify-between">
          <nav className="flex items-center">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`px-4 py-3 text-sm font-semibold transition-colors border-b-2 ${
                  location === item.path
                    ? "text-[#009e8e] border-[#009e8e]"
                    : "text-[#333] border-transparent hover:text-[#009e8e] hover:border-[#009e8e]/50"
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
              <button className={`px-4 py-3 text-sm font-semibold transition-colors border-b-2 flex items-center gap-1 ${
                ["/about", "/submission-guidelines", "/editorial-board", "/publication-ethics", "/oa-copyright"].includes(location)
                  ? "text-[#009e8e] border-[#009e8e]"
                  : "text-[#333] border-transparent hover:text-[#009e8e]"
              }`}>
                About <ChevronDown size={13} className={`transition-transform ${aboutOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {aboutOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 2 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 2 }}
                    transition={{ duration: 0.12 }}
                    className="absolute left-0 top-full w-56 bg-white shadow-lg border border-gray-200 py-1 z-50"
                  >
                    <Link href="/about" className="block px-4 py-2.5 text-sm text-[#333] hover:bg-gray-50 hover:text-[#009e8e] font-medium">
                      About the Review
                    </Link>
                    <Link href="/editorial-board" className="block px-4 py-2.5 text-sm text-[#333] hover:bg-gray-50 hover:text-[#009e8e] font-medium">
                      Editorial Board
                    </Link>
                    <Link href="/submission-guidelines" className="block px-4 py-2.5 text-sm text-[#333] hover:bg-gray-50 hover:text-[#009e8e] font-medium">
                      Submission Guidelines
                    </Link>
                    <Link href="/publication-ethics" className="block px-4 py-2.5 text-sm text-[#333] hover:bg-gray-50 hover:text-[#009e8e] font-medium">
                      Publication Ethics
                    </Link>
                    <Link href="/oa-copyright" className="block px-4 py-2.5 text-sm text-[#333] hover:bg-gray-50 hover:text-[#009e8e] font-medium">
                      OA & Copyright
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Right side: search + submit */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-[#333] hover:text-[#009e8e] transition-colors"
                aria-label="Search"
              >
                <Search size={18} />
              </button>
              <AnimatePresence>
                {searchOpen && (
                  <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 260 }}
                    exit={{ opacity: 0, width: 0 }}
                    className="absolute right-0 top-1/2 -translate-y-1/2 overflow-hidden"
                  >
                    <input
                      type="search"
                      placeholder="Search in this journal"
                      className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded focus:outline-none focus:border-[#009e8e] bg-white"
                      autoFocus
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link
              href="/submission-guidelines"
              className="text-sm font-semibold text-[#009e8e] hover:text-[#008a7c] transition-colors flex items-center gap-1"
            >
              Submit your article <ExternalLink size={12} />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden bg-white border-b border-gray-200"
          >
            <nav className="container py-3 flex flex-col">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`px-3 py-3 text-sm font-semibold border-l-3 transition-colors ${
                    location === item.path
                      ? "text-[#009e8e] border-[#009e8e] bg-[#009e8e]/5"
                      : "text-[#333] border-transparent hover:text-[#009e8e]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="border-t border-gray-100 mt-2 pt-2">
                <Link href="/about" onClick={() => setMobileOpen(false)} className="block px-3 py-3 text-sm text-[#333] font-medium">
                  About the Review
                </Link>
                <Link href="/editorial-board" onClick={() => setMobileOpen(false)} className="block px-3 py-3 text-sm text-[#333] font-medium">
                  Editorial Board
                </Link>
                <Link href="/submission-guidelines" onClick={() => setMobileOpen(false)} className="block px-3 py-3 text-sm text-[#333] font-medium">
                  Submission Guidelines
                </Link>
                <Link href="/publication-ethics" onClick={() => setMobileOpen(false)} className="block px-3 py-3 text-sm text-[#333] font-medium">
                  Publication Ethics
                </Link>
                <Link href="/oa-copyright" onClick={() => setMobileOpen(false)} className="block px-3 py-3 text-sm text-[#333] font-medium">
                  OA & Copyright
                </Link>
              </div>
              <div className="border-t border-gray-100 mt-2 pt-2 flex flex-col gap-1">
                <a
                  href={JOURNAL.submissionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-3 text-sm font-semibold text-[#009e8e]"
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
