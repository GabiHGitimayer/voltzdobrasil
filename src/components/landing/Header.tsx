import logo from "@/assets/voltz-logo.png";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="#top" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Voltz do Brasil — Soluções em energia"
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
          />
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
          <a href="#sobre" className="transition-colors hover:text-primary">
            Sobre
          </a>
          <a href="#instalacoes" className="transition-colors hover:text-primary">
            Instalações
          </a>
          <a href="#parceiros" className="transition-colors hover:text-primary">
            Parceiros
          </a>
          <a href="#contato" className="transition-colors hover:text-primary">
            Contato
          </a>
        </nav>
        <Button asChild size="sm" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
          <a href="#contato">Quero um orçamento</a>
        </Button>
      </div>
    </header>
  );
}
