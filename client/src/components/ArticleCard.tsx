// ============================================================
// ArticleCard Component - IEI 1946
// Displays article metadata in a clean, academic card format
// ============================================================

import { Link } from "wouter";
import { FileText, ExternalLink } from "lucide-react";
import type { Article } from "@/lib/data";

interface ArticleCardProps {
  article: Article;
  variant?: "default" | "compact" | "featured";
}

export default function ArticleCard({ article, variant = "default" }: ArticleCardProps) {
  const authorNames = article.authors.map((a) => a.name).join(", ");
  const volumeInfo = `Volume ${article.volume}${article.issue ? ` - Issue ${article.issue}` : ""}, ${article.month} ${article.year}`;

  if (variant === "compact") {
    return (
      <Link href={`/article/${article.id}`} className="block group">
        <div className="py-4 border-b border-border last:border-b-0 hover:bg-secondary/30 px-4 -mx-4 transition-colors">
          <h4 className="font-serif text-base font-semibold text-[#1a3c5e] group-hover:text-[#00b4a0] transition-colors leading-snug">
            {article.title}
          </h4>
          <p className="text-sm text-muted-foreground mt-1">{authorNames}</p>
          {article.pages && (
            <p className="text-xs text-muted-foreground mt-1">pp. {article.pages}</p>
          )}
        </div>
      </Link>
    );
  }

  if (variant === "featured") {
    return (
      <Link href={`/article/${article.id}`} className="block group">
        <div className="bg-white rounded-lg border border-border p-6 hover:shadow-md transition-all duration-200 hover:border-[#00b4a0]/30">
          <div className="flex items-start gap-4">
            <div className="hidden sm:flex w-12 h-12 rounded-lg bg-[#00b4a0]/10 items-center justify-center shrink-0">
              <FileText size={20} className="text-[#00b4a0]" />
            </div>
            <div className="flex-1">
              <h3 className="font-serif text-lg font-bold text-[#1a3c5e] group-hover:text-[#00b4a0] transition-colors leading-snug">
                {article.title}
              </h3>
              <p className="text-sm font-medium text-[#1a3c5e]/80 mt-2">{authorNames}</p>
              <p className="text-xs text-muted-foreground mt-1">{volumeInfo}</p>
              {article.abstract && (
                <p className="text-sm text-muted-foreground mt-3 line-clamp-3 leading-relaxed">
                  {article.abstract}
                </p>
              )}
              <div className="flex flex-wrap items-center gap-3 mt-3">
                {article.doi && (
                  <span className="inline-flex items-center gap-1 text-xs text-[#00b4a0] font-medium">
                    DOI: {article.doi}
                  </span>
                )}
                {article.jel && article.jel.length > 0 && (
                  <span className="text-xs text-muted-foreground">
                    JEL: {article.jel.join("; ")}
                  </span>
                )}
              </div>
              {article.keywords && article.keywords.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {article.keywords.map((kw) => (
                    <span
                      key={kw}
                      className="px-2 py-0.5 text-xs bg-secondary rounded-full text-secondary-foreground"
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

  // Default variant
  return (
    <Link href={`/article/${article.id}`} className="block group">
      <article className="bg-white rounded-lg border border-border p-5 hover:shadow-md transition-all duration-200 hover:border-[#00b4a0]/30">
        <h3 className="font-serif text-base font-bold text-[#1a3c5e] group-hover:text-[#00b4a0] transition-colors leading-snug">
          {article.title}
        </h3>
        <p className="text-sm font-medium text-[#1a3c5e]/80 mt-2">{authorNames}</p>
        <p className="text-xs text-muted-foreground mt-1">{volumeInfo}</p>
        {article.pages && (
          <p className="text-xs text-muted-foreground">(pp. {article.pages})</p>
        )}
        <div className="flex flex-wrap items-center gap-3 mt-3">
          {article.doi && (
            <a
              href={`https://doi.org/${article.doi}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 text-xs text-[#00b4a0] font-medium hover:underline"
            >
              DOI: {article.doi} <ExternalLink size={10} />
            </a>
          )}
          {article.jel && article.jel.length > 0 && (
            <span className="text-xs text-muted-foreground">
              JEL: {article.jel.join("; ")}
            </span>
          )}
        </div>
        {article.keywords && article.keywords.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {article.keywords.map((kw) => (
              <span
                key={kw}
                className="px-2 py-0.5 text-xs bg-secondary rounded-full text-secondary-foreground"
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
