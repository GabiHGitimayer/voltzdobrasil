import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-solar.jpg";
import { Sun, TrendingDown, Leaf } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Casa moderna com painéis solares ao pôr do sol"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)", opacity: 0.85 }}
        />
      </div>

      <div className="container relative mx-auto px-4 py-24 md:py-32 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-secondary backdrop-blur-sm">
            <Sun className="h-4 w-4" /> Energia limpa para o seu bolso
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Liberte-se da conta de luz com{" "}
            <span className="text-secondary">energia solar</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/90 md:text-xl">
            A Voltz do Brasil entrega soluções completas em energia fotovoltaica —
            do projeto à instalação — com economia de até{" "}
            <strong className="text-secondary">95% na sua fatura</strong>.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-secondary text-secondary-foreground shadow-lg transition-all hover:scale-105 hover:bg-secondary/90"
              style={{ boxShadow: "var(--shadow-glow)" }}
            >
              <a href="#contato">Solicitar orçamento grátis</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
            >
              <a href="#instalacoes">Ver instalações</a>
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Stat icon={<TrendingDown className="h-5 w-5" />} label="Até 95% de economia" />
            <Stat icon={<Sun className="h-5 w-5" />} label="+25 anos de garantia" />
            <Stat icon={<Leaf className="h-5 w-5" />} label="100% sustentável" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-3 backdrop-blur-sm">
      <span className="text-secondary">{icon}</span>
      <span className="text-sm font-semibold text-primary-foreground">{label}</span>
    </div>
  );
}
