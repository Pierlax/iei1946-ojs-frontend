// ============================================================
// ArticleCard Component - Elsevier/ScienceDirect Style
// Clean list-based layout, navy #1b3a5c, teal #009e8e
// ============================================================

import { Link } from "wouter";
import { ExternalLink } from "lucide-react";
import type { Article } from "@/lib/data";

interface ArticleCardProps {
  article: Article;
  variant?: "default" | "compact" | "featured";
}

export default function ArticleCard({ article, variant = "default" }: ArticleCardProps) {
  const authorNames = article.authors.map((a) => a.name).join(", ");
  const volumeInfo = `Volume ${article.volume}${article.issue ? `, Issue ${article.issue}` : ""}, ${article.month} ${article.year}`;

  if (variant === "compact") {
    return (
      <Link href={`/article/${article.id}`} className="block group">
        <div className="py-3 border-b border-gray-100 last:border-b-0 hover:bg-gray-50/50 px-3 -mx-3 transition-colors">
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
      <Link href={`/article/${article.id}`} className="block group">
        <div className="py-5 border-b border-gray-200 last:border-b-0 hover:bg-gray-50/50 transition-colors">
          <div className="flex items-start gap-4">
            {/* Green left accent bar */}
            <div className="w-1 self-stretch bg-[#009e8e] rounded-full shrink-0 hidden sm:block" />
            <div className="flex-1">
              <h3 className="font-serif text-lg font-bold text-[#1b3a5c] group-hover:text-[#009e8e] transition-colors leading-snug">
                {article.title}
              </h3>
              <p className="text-sm text-[#1b3a5c]/70 mt-1.5">{authorNames}</p>
              <p className="text-xs text-gray-400 mt-1">{volumeInfo}</p>
              {article.abstract && (
                <p className="text-sm text-gray-500 mt-3 line-clamp-3 leading-relaxed">
                  {article.abstract}
                </p>
              )}
              <div className="flex flex-wrap items-center gap-3 mt-3">
                {article.doi && (
                  <a
                    href={`https://doi.org/${article.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 text-xs text-[#009e8e] font-medium hover:underline"
                  >
                    DOI: {article.doi} <ExternalLink size={10} />
                  </a>
                )}
                {article.jel && article.jel.length > 0 && (
                  <span className="text-xs text-gray-400">
                    JEL: {article.jel.join(", ")}
                  </span>
                )}
              </div>
              {article.keywords && article.keywords.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {article.keywords.map((kw) => (
                    <span
                      key={kw}
                      className="px-2 py-0.5 text-xs bg-gray-100 text-gray-600 rounded"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
    );
  }

  // Default variant - Elsevier list style
  return (
    <Link href={`/article/${article.id}`} className="block group">
      <article className="py-4 border-b border-gray-200 last:border-b-0 hover:bg-gray-50/50 transition-colors">
        <h3 className="font-serif text-base font-bold text-[#1b3a5c] group-hover:text-[#009e8e] transition-colors leading-snug">
          {article.title}
        </h3>
        <p className="text-sm text-[#1b3a5c]/70 mt-1.5">{authorNames}</p>
        <p className="text-xs text-gray-400 mt-1">{volumeInfo}</p>
        {article.pages && (
          <p className="text-xs text-gray-400">pp. {article.pages}</p>
        )}
        <div className="flex flex-wrap items-center gap-3 mt-2">
          {article.doi && (
            <a
              href={`https://doi.org/${article.doi}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 text-xs text-[#009e8e] font-medium hover:underline"
            >
              DOI: {article.doi} <ExternalLink size={10} />
            </a>
          )}
          {article.jel && article.jel.length > 0 && (
            <span className="text-xs text-gray-400">
              JEL: {article.jel.join(", ")}
            </span>
          )}
        </div>
        {article.keywords && article.keywords.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {article.keywords.map((kw) => (
              <span
                key={kw}
                className="px-2 py-0.5 text-xs bg-gray-100 text-gray-600 rounded"
              >
                {kw}
              </span>
            ))}
          </div>
        )}
      </article>
    </Link>
  );
}
