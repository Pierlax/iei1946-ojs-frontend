import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  latestIssueVolume: string;
  latestIssueNumber: string;
  latestIssueTitle: string;
  onExplore?: () => void;
}

export function HeroSection({
  latestIssueVolume,
  latestIssueNumber,
  latestIssueTitle,
  onExplore,
}: HeroSectionProps) {
  return (
    <section
      className="relative min-h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-secondary via-background to-background"
      style={{
        backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/109698682/Ybj72GNFScvp3J8KE6MPud/iei-hero-background-Z3Wo2CgBzX2FW8vEKFHB28.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center right",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          {/* Issue Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <span className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-sm font-medium text-primary">
              Ultimo Numero
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 leading-tight">
            Economia<br />
            <span className="text-primary">Internazionale</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
            Vol. {latestIssueVolume}, No. {latestIssueNumber} — {latestIssueTitle}
          </p>

          {/* Description */}
          <p className="text-lg text-foreground/60 mb-8 max-w-xl leading-relaxed">
            Una rivista accademica dedicata all'analisi critica delle dinamiche economiche globali, con focus su commercio internazionale, finanza e politica economica.
          </p>

          {/* CTA Button */}
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 group"
            onClick={onExplore}
          >
            Esplora il numero
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}
