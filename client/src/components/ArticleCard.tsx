import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen } from "lucide-react";

interface ArticleCardProps {
  title: string;
  authors: string[];
  abstract: string;
  doi?: string;
  publicationDate: string;
  volume?: string;
  issue?: string;
  pages?: string;
  keywords?: string[];
  category?: string;
  onClick?: () => void;
}

export function ArticleCard({
  title,
  authors,
  abstract,
  doi,
  publicationDate,
  volume,
  issue,
  pages,
  keywords,
  category,
  onClick,
}: ArticleCardProps) {
  return (
    <Card
      className="group cursor-pointer border-l-4 border-l-primary hover:shadow-lg transition-all duration-300"
      onClick={onClick}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <CardTitle className="text-lg leading-snug text-foreground hover:text-primary transition-colors">
              {title}
            </CardTitle>
            <CardDescription className="mt-2 text-sm text-muted-foreground">
              {authors.join(", ")}
            </CardDescription>
          </div>
          {category && (
            <Badge variant="secondary" className="whitespace-nowrap">
              {category}
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-foreground/80 line-clamp-3 leading-relaxed">
          {abstract}
        </p>

        <div className="flex flex-wrap gap-2">
          {keywords?.slice(0, 3).map((keyword) => (
            <Badge key={keyword} variant="outline" className="text-xs">
              {keyword}
            </Badge>
          ))}
          {keywords && keywords.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{keywords.length - 3}
            </Badge>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground pt-2 border-t border-border">
          <div className="flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5" />
            <span>
              Vol. {volume}, No. {issue}
            </span>
          </div>
          {pages && <span>pp. {pages}</span>}
          <span>{new Date(publicationDate).toLocaleDateString("it-IT")}</span>
          {doi && (
            <a
              href={`https://doi.org/${doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
              onClick={(e) => e.stopPropagation()}
            >
              DOI: {doi}
            </a>
          )}
        </div>
      </CardContent>

      <div className="px-6 pb-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-sm font-medium">Leggi articolo</span>
        <ArrowRight className="w-4 h-4" />
      </div>
    </Card>
  );
}
