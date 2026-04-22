import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Sobre } from "@/components/landing/Sobre";
import { CarrosselInstalacoes } from "@/components/landing/CarrosselInstalacoes";
import { Parceiros } from "@/components/landing/Parceiros";
import { Contato } from "@/components/landing/Contato";
import { Footer } from "@/components/landing/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <CarrosselInstalacoes />
        <Parceiros />
        <Contato />
      </main>
      <Footer />
      <Toaster richColors position="top-center" />
    </div>
  );
}
