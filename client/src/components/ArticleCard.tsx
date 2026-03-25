// ============================================================
// ArticleCard Component - ScienceDirect / Elsevier Style
// ============================================================

import { Link } from "wouter";
import { FileDown, ExternalLink } from "lucide-react";
import type { Article } from "@/lib/data";
import { JOURNAL } from "@/lib/data";

interface ArticleCardProps {
  article: Article;
  variant?: "default" | "compact" | "featured";
}

export default function ArticleCard({ article, variant = "default" }: ArticleCardProps) {
  const authorNames = article.authors.map((a) => a.name).join(", ");
  const volumeInfo = `Vol. ${article.volume}${article.issue ? `, No. ${article.issue}` : ""} · ${article.month} ${article.year}`;
  const pdfUrl = article.pdfUrl || `${JOURNAL.ojsBaseUrl}/index.php/iei/article/view/${article.id}`;

  if (variant === "compact") {
    return (
      <Link href={`/article/${article.id}`} className="block group">
        <div className="py-3 border-b border-gray-100 last:border-b-0 hover:bg-gray-50/60 px-3 -mx-3 transition-colors">
          <h4 className="font-serif text-sm font-semibold text-[#1b3a5c] group-hover:text-[#009e8e] transition-colors leading-snug">
            {article.title}
          </h4>
          <p className="text-xs text-gray-500 mt-1">{authorNames}</p>
          {article.pages && (
            <p className="text-xs text-gray-400 mt-0.5">pp. {article.pages}</p>
          )}
        </div>
      </Link>
    );
  }

  if (variant === "featured") {
    return (
      <div className="group border border-gray-200 rounded hover:shadow-md transition-shadow bg-white">
        <div className="p-5 sm:p-6">
          {/* Top row: article type + OA badge */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#666]">
              Research Article
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-bold bg-[#00a651] text-white rounded">
              Open Access
            </span>
          </div>

          {/* Title */}
          <Link href={`/article/${article.id}`}>
            <h3 className="font-serif text-lg font-bold text-[#1b3a5c] group-hover:text-[#009e8e] transition-colors leading-snug cursor-pointer">
              {article.title}
            </h3>
          </Link>

          {/* Authors */}
          <p className="text-sm text-[#444] mt-2 font-medium">{authorNames}</p>

          {/* Volume info + pages */}
          <p className="text-xs text-gray-400 mt-1">
            {volumeInfo}
            {article.pages && <span className="ml-2">· pp. {article.pages}</span>}
          </p>

          {/* Abstract */}
          {article.abstract && (
            <p className="text-sm text-gray-600 mt-3 line-clamp-3 leading-relaxed">
              {article.abstract}
            </p>
          )}

          {/* Keywords */}
          {article.keywords && article.keywords.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              {article.keywords.map((kw) => (
                <span key={kw} className="px-2 py-0.5 text-xs bg-gray-100 text-gray-600 rounded border border-gray-200">
                  {kw}
                </span>
              ))}
            </div>
          )}

          {/* Footer row: DOI + JEL + PDF */}
          <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-3 border-t border-gray-100">
            <div className="flex flex-wrap items-center gap-3">
              {article.doi && (
                <a
                  href={`https://doi.org/${article.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-[#0066cc] font-medium hover:underline"
                >
                  <ExternalLink size={10} /> {article.doi}
                </a>
              )}
              {article.jel && article.jel.length > 0 && (
                <span className="text-xs text-gray-400">JEL: {article.jel.join(", ")}</span>
              )}
            </div>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-[#009e8e] rounded hover:bg-[#008a7c] transition-colors shrink-0"
            >
              <FileDown size={12} /> PDF
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className="group border-b border-gray-200 last:border-b-0 hover:bg-gray-50/50 transition-colors py-5">
      {/* Top row: article type + OA badge */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs font-bold uppercase tracking-wider text-[#666]">
          Research Article
        </span>
        <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-bold bg-[#00a651] text-white rounded">
          Open Access
        </span>
      </div>

      {/* Title */}
      <Link href={`/article/${article.id}`}>
        <h3 className="font-serif text-base font-bold text-[#1b3a5c] group-hover:text-[#009e8e] transition-colors leading-snug cursor-pointer">
          {article.title}
        </h3>
      </Link>

      {/* Authors */}
      <p className="text-sm text-[#444] mt-1.5 font-medium">{authorNames}</p>

      {/* Volume + pages */}
      <p className="text-xs text-gray-400 mt-1">
        {volumeInfo}
        {article.pages && <span className="ml-2">· pp. {article.pages}</span>}
      </p>

      {/* Footer row: DOI + JEL + PDF */}
      <div className="flex flex-wrap items-center justify-between gap-3 mt-3">
        <div className="flex flex-wrap items-center gap-3">
          {article.doi && (
            <a
              href={`https://doi.org/${article.doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-[#0066cc] font-medium hover:underline"
            >
              <ExternalLink size={10} /> {article.doi}
            </a>
          )}
          {article.jel && article.jel.length > 0 && (
            <span className="text-xs text-gray-400">JEL: {article.jel.join(", ")}</span>
          )}
        </div>
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-[#009e8e] rounded hover:bg-[#008a7c] transition-colors shrink-0"
        >
          <FileDown size={12} /> PDF
        </a>
      </div>
    </div>
  );
}
