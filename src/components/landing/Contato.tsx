import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { CheckCircle2, Mail, Phone, MapPin } from "lucide-react";

export function Contato() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      if (formRef.current) {
        await emailjs.sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
          formRef.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY"
        );
      }
      setSent(true);
      toast.success("Recebemos seus dados! Entraremos em contato em breve.");
      if (formRef.current) formRef.current.reset();
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      toast.error("Ocorreu um erro ao enviar seus dados. Tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contato" className="bg-muted/40 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary-glow">
              Fale conosco
            </span>
            <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
              Receba um orçamento{" "}
              <span className="text-primary-glow">sem compromisso</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Preencha o formulário e nossa equipe vai entrar em contato em até 24h
              úteis com uma proposta personalizada para o seu consumo.
            </p>

            <ul className="mt-8 space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-secondary" />
                <div>
                  <p className="font-semibold text-foreground">(45) 99999-9999</p>
                  <p className="text-sm text-muted-foreground">Atendimento de seg a sáb</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-secondary" />
                <div>
                  <p className="font-semibold text-foreground">contato@voltzdobrasil.com.br</p>
                  <p className="text-sm text-muted-foreground">Resposta em até 24h</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-secondary" />
                <div>
                  <p className="font-semibold text-foreground">Atendimento em todo o Brasil</p>
                  <p className="text-sm text-muted-foreground">Sede em Foz do Iguaçu, PR</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-xl md:p-8">
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center py-8 text-center">
                <CheckCircle2 className="h-16 w-16 text-secondary" />
                <h3 className="mt-4 text-2xl font-bold text-foreground">
                  Tudo certo!
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Recebemos seus dados. Em breve um especialista vai falar com você.
                </p>
                <Button
                  variant="outline"
                  className="mt-6"
                  onClick={() => setSent(false)}
                >
                  Enviar outra solicitação
                </Button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={onSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome completo *</Label>
                    <Input id="nome" name="nome" required placeholder="Seu nome" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefone">WhatsApp *</Label>
                    <Input
                      id="telefone"
                      name="telefone"
                      required
                      type="tel"
                      placeholder="(45) 99999-9999"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail *</Label>
                  <Input
                    id="email"
                    name="email"
                    required
                    type="email"
                    placeholder="voce@email.com"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="cidade">Cidade / UF</Label>
                    <Input id="cidade" name="cidade" placeholder="Cidade/UF" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="conta">Valor médio da conta</Label>
                    <Input id="conta" name="conta" placeholder="R$ 300,00" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mensagem">Mensagem (opcional)</Label>
                  <Textarea
                    id="mensagem"
                    name="mensagem"
                    rows={3}
                    placeholder="Conte mais sobre o seu projeto..."
                  />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  size="lg"
                  className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
                >
                  {loading ? "Enviando..." : "Quero meu orçamento grátis"}
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  Seus dados estão seguros. Não enviamos spam.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
