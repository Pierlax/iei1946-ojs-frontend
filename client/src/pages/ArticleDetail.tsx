import { useRoute } from "wouter";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Loader2, ArrowLeft, Download, Share2, BookOpen } from "lucide-react";
import { useOJSArticle } from "@/hooks/useOJSArticles";

export default function ArticleDetail() {
  const [match, params] = useRoute("/article/:id");
  const articleId = params?.id ? parseInt(params.id) : null;
  const { article, loading, error } = useOJSArticle(articleId);

  if (!match) return null;

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl">
            <Button
              variant="ghost"
              className="mb-8 gap-2"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-4 h-4" />
              Torna indietro
            </Button>
            <div className="text-center">
              <h1 className="text-2xl font-bold text-foreground mb-4">
                Articolo non trovato
              </h1>
              <p className="text-foreground/60">
                Scusa, non siamo riusciti a caricare l'articolo richiesto.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <article className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Button
            variant="ghost"
            className="mb-8 gap-2"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-4 h-4" />
            Torna indietro
          </Button>

          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {article.category && (
                <Badge variant="secondary">{article.category}</Badge>
              )}
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <BookOpen className="w-3.5 h-3.5" />
                Vol. {article.volume}, No. {article.issue}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/70 mb-6">
              <span>{article.authors.join(", ")}</span>
              <span>•</span>
              <span>
                {new Date(article.publicationDate).toLocaleDateString("it-IT")}
              </span>
            </div>
          </header>

          <section className="mb-12 pb-12 border-b border-border">
            <h2 className="text-xl font-bold text-foreground mb-4">Abstract</h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              {article.abstract}
            </p>
          </section>

          {article.keywords && article.keywords.length > 0 && (
            <section className="mb-12 pb-12 border-b border-border">
              <h2 className="text-xl font-bold text-foreground mb-4">
                Parole Chiave
              </h2>
              <div className="flex flex-wrap gap-2">
                {article.keywords.map((keyword) => (
                  <Badge key={keyword} variant="outline">
                    {keyword}
                  </Badge>
                ))}
              </div>
            </section>
          )}

          <section className="mb-12">
            <div className="flex flex-wrap gap-4">
              {article.pdfUrl && (
                <a href={article.pdfUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="gap-2">
                    <Download className="w-4 h-4" />
                    Scarica PDF
                  </Button>
                </a>
              )}
              {article.url && (
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="gap-2">
                    <BookOpen className="w-4 h-4" />
                    Leggi su OJS
                  </Button>
                </a>
              )}
              <Button
                variant="outline"
                className="gap-2"
                onClick={() => {
                  const text = `${article.title} - ${article.authors.join(", ")} - ${
                    article.doi ? `https://doi.org/${article.doi}` : article.url
                  }`;
                  navigator.clipboard.writeText(text);
                }}
              >
                <Share2 className="w-4 h-4" />
                Condividi
              </Button>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
