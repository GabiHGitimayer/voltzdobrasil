import { ShieldCheck, Wrench, Headphones, Award } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Projeto certificado",
    desc: "Engenharia própria com homologação na concessionária local.",
  },
  {
    icon: Wrench,
    title: "Instalação especializada",
    desc: "Equipe técnica treinada e equipamentos de primeira linha.",
  },
  {
    icon: Headphones,
    title: "Pós-venda dedicado",
    desc: "Monitoramento e suporte durante toda a vida útil do sistema.",
  },
  {
    icon: Award,
    title: "Equipamentos premium",
    desc: "Trabalhamos apenas com marcas líderes no mercado mundial.",
  },
];

export function Sobre() {
  return (
    <section id="sobre" className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-glow">
            Sobre nós
          </span>
          <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
            Soluções em energia que duram décadas
          </h2>
          <p className="mt-4 text-muted-foreground">
            Somos especialistas em sistemas fotovoltaicos para residências, comércios e
            propriedades rurais. Cada projeto é único — desenhado para a sua realidade
            de consumo, espaço e investimento.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-secondary hover:shadow-lg"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
