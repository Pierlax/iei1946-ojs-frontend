import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ArticleCard } from "@/components/ArticleCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight } from "lucide-react";

// Mock data - In production, this would come from OJS API
const mockArticles = [
  {
    id: 1,
    title: "On European Fragmentation and the Single Currency in an Uncertain World",
    authors: ["Ignazio Visco"],
    abstract:
      "Europe faces growing strategic and economic challenges arising from the policies of the second Trump administration, extending beyond trade to energy, defence, digital services, and cross-border payments. Heightened uncertainty over US policy has raised concerns about the stability of the international monetary system and the future role of the dollar.",
    doi: "10.65644/EIIE.079.01.0001",
    publicationDate: "2026-02-11",
    volume: "79",
    issue: "1",
    pages: "1-26",
    keywords: ["European Economy", "Single Currency", "International Monetary System"],
    category: "Featured",
  },
  {
    id: 2,
    title: "Financial Cycles and Monetary Policy",
    authors: ["Elena Seghezza"],
    abstract:
      "This paper examines the interaction between financial cycles and monetary policy, exploring how central banks can effectively manage macroeconomic stability in the presence of financial imbalances.",
    doi: "10.65644/EIIE.079.01.0002",
    publicationDate: "2026-02-11",
    volume: "79",
    issue: "1",
    pages: "27-36",
    keywords: ["Financial Cycles", "Monetary Policy", "Macroeconomic Stability"],
    category: "Research",
  },
  {
    id: 3,
    title: "Global Trade Patterns in the Digital Economy",
    authors: ["Marco Rossi", "Anna Bianchi"],
    abstract:
      "An analysis of how digital transformation is reshaping international trade patterns and creating new opportunities for emerging economies.",
    doi: "10.65644/EIIE.079.01.0003",
    publicationDate: "2026-02-11",
    volume: "79",
    issue: "1",
    pages: "37-52",
    keywords: ["Digital Economy", "International Trade", "Emerging Markets"],
    category: "Analysis",
  },
];

const onlineFirstArticles = mockArticles.slice(0, 2);
const archiveArticles = mockArticles;

export default function Home() {
  const [selectedArticle, setSelectedArticle] = useState<(typeof mockArticles)[0] | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <HeroSection
        latestIssueVolume="79"
        latestIssueNumber="1"
        latestIssueTitle="Economic Challenges in a Multipolar World"
        onExplore={() => {
          const element = document.getElementById("latest-issue");
          element?.scrollIntoView({ behavior: "smooth" });
        }}
      />

      <main className="container mx-auto px-4 py-16">
        {/* Tabs Section */}
        <Tabs defaultValue="latest" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2 mb-8">
            <TabsTrigger value="latest">Ultimo Numero</TabsTrigger>
            <TabsTrigger value="online">Online First</TabsTrigger>
          </TabsList>

          {/* Latest Issue Tab */}
          <TabsContent value="latest" id="latest-issue" className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Volume 79, Numero 1 (2026)
              </h2>
              <p className="text-foreground/60">
                Economic Challenges in a Multipolar World
              </p>
            </div>

            <div className="grid gap-6">
              {archiveArticles.map((article) => (
                <ArticleCard
                  key={article.id}
                  {...article}
                  onClick={() => setSelectedArticle(article)}
                />
              ))}
            </div>
          </TabsContent>

          {/* Online First Tab */}
          <TabsContent value="online" className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Online First
              </h2>
              <p className="text-foreground/60">
                Articoli pubblicati online prima della stampa
              </p>
            </div>

            <div className="grid gap-6">
              {onlineFirstArticles.map((article) => (
                <ArticleCard
                  key={article.id}
                  {...article}
                  onClick={() => setSelectedArticle(article)}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Section Divider */}
        <div className="my-16 flex items-center gap-4">
          <div className="flex-1 h-px bg-border" />
          <div className="text-sm text-muted-foreground">Sezioni</div>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* About Section */}
        <section className="max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Chi Siamo
          </h2>
          <div className="space-y-4 text-foreground/70 leading-relaxed">
            <p>
              <strong>Economia Internazionale</strong> è una rivista accademica peer-reviewed
              pubblicata dalla Camera di Commercio di Genova dal 1946. La rivista si dedica
              all'analisi critica e rigorosa delle dinamiche economiche globali.
            </p>
            <p>
              Con un focus particolare su commercio internazionale, finanza, e politica
              economica, la rivista pubblica ricerche originali di studiosi provenienti da
              università e istituzioni di ricerca di tutto il mondo.
            </p>
            <p>
              I nostri articoli sono indicizzati in DOAJ, Scopus e altre banche dati
              accademiche internazionali, garantendo la massima visibilità e impatto della ricerca.
            </p>
          </div>

          <div className="mt-8 flex gap-4">
            <Button variant="default">Scopri di più</Button>
            <Button variant="outline">Sottometti un articolo</Button>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-20 p-12 bg-primary/5 rounded-lg border border-primary/20">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Vuoi pubblicare con noi?
            </h2>
            <p className="text-foreground/70 mb-6">
              Accettiamo sottomissioni di articoli originali, review, e case studies
              che contribuiscono al dibattito economico internazionale.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 group">
              Linee Guida per gli Autori
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-20 py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-foreground mb-4">Economia Internazionale</h3>
              <p className="text-sm text-foreground/60">
                Una rivista accademica dedicata all'economia globale dal 1946.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Navigazione</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors">Ultimo Numero</a></li>
                <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors">Archivio</a></li>
                <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors">Chi Siamo</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Risorse</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors">Sottomissioni</a></li>
                <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors">Linee Guida</a></li>
                <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors">Contatti</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Informazioni</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors">Termini di Servizio</a></li>
                <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors">Accessibilità</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-foreground/60">
              © 1946-2026 Economia Internazionale. Tutti i diritti riservati.
            </p>
            <p className="text-sm text-foreground/60 mt-4 md:mt-0">
              Pubblicata dalla Camera di Commercio di Genova
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
