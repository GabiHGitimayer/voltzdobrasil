import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { instalacoes } from "@/data/instalacoes";
import { MapPin } from "lucide-react";

export function CarrosselInstalacoes() {
  return (
    <section
      id="instalacoes"
      className="relative overflow-hidden py-20 md:py-28"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-secondary">
            Nossos projetos
          </span>
          <h2 className="mt-3 text-3xl font-bold text-primary-foreground md:text-4xl">
            Instalações pelo Brasil
          </h2>
          <p className="mt-4 text-primary-foreground/80">
            Conheça alguns dos sistemas que já entregamos para clientes residenciais,
            comerciais e rurais.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-5xl px-12">
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent>
              {instalacoes.map((item, idx) => (
                <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/2">
                  <div className="group overflow-hidden rounded-2xl bg-card shadow-2xl">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={item.image}
                        alt={`Instalação ${item.tipo} em ${item.local}`}
                        width={1280}
                        height={800}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 text-secondary" />
                        {item.local}
                      </div>
                      <div className="mt-2 flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-foreground">
                          {item.tipo}
                        </h3>
                        <span className="rounded-full bg-secondary/20 px-3 py-1 text-xs font-semibold text-primary">
                          {item.potencia}
                        </span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-secondary bg-secondary text-secondary-foreground hover:bg-secondary/90" />
            <CarouselNext className="border-secondary bg-secondary text-secondary-foreground hover:bg-secondary/90" />
          </Carousel>
        </div>

        <p className="mt-8 text-center text-xs text-primary-foreground/60">
          💡 Dica: edite o arquivo <code className="rounded bg-primary-foreground/10 px-1.5 py-0.5">src/data/instalacoes.ts</code> para trocar as imagens.
        </p>
      </div>
    </section>
  );
}
