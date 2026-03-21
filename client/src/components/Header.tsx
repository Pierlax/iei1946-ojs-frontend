import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-foreground">
              <span className="text-primary">EI</span>
            </h1>
            <p className="text-xs text-muted-foreground">Economia Internazionale</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Ultimo Numero
            </a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Archivio
            </a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Chi Siamo
            </a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Sottomissioni
            </a>
          </nav>

          {/* Search Bar */}
          <div className="hidden sm:flex items-center gap-2">
            <div className="relative">
              <Input
                type="search"
                placeholder="Cerca articoli..."
                className="pl-10 pr-4 py-2 text-sm"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 space-y-2 pb-4">
            <a href="#" className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded-lg transition-colors">
              Ultimo Numero
            </a>
            <a href="#" className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded-lg transition-colors">
              Archivio
            </a>
            <a href="#" className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded-lg transition-colors">
              Chi Siamo
            </a>
            <a href="#" className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded-lg transition-colors">
              Sottomissioni
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
