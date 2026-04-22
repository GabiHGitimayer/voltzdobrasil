import { parceiros } from "@/data/instalacoes";

export function Parceiros() {
  return (
    <section id="parceiros" className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-glow">
            Parceiros
          </span>
          <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
            Marcas que confiam na Voltz
          </h2>
          <p className="mt-4 text-muted-foreground">
            Trabalhamos com fabricantes líderes globais para garantir qualidade e
            durabilidade em cada instalação.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {parceiros.map((p) => (
            <div
              key={p.name}
              className="group flex flex-col items-center justify-center rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-secondary hover:shadow-md"
            >
              <span className="text-base font-bold text-primary transition-colors group-hover:text-primary-glow">
                {p.name}
              </span>
              <span className="mt-1 text-xs text-muted-foreground">{p.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
