import logo from "@/assets/voltz-logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Voltz do Brasil" width={180} height={60} />
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Voltz do Brasil — Soluções em energia. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
