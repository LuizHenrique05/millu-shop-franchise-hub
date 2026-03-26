import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const estados = [
  "AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA",
  "PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"
];

const LeadFormSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Cadastro recebido!",
        description: "Entraremos em contato em breve. Obrigado pelo interesse na franquia Millu Shop!",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="formulario" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 gradient-primary opacity-[0.04]" />
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-sm font-medium text-secondary uppercase tracking-widest">Cadastro</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-5">
              Quero saber mais sobre a <span className="text-gradient">franquia</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Preencha o formulário abaixo e nossa equipe entrará em contato com todas as informações.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-elegant space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Nome *</label>
                <Input required placeholder="Seu nome" className="h-12 rounded-xl bg-muted/50 border-border" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Sobrenome *</label>
                <Input required placeholder="Seu sobrenome" className="h-12 rounded-xl bg-muted/50 border-border" />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">E-mail *</label>
                <Input required type="email" placeholder="seu@email.com" className="h-12 rounded-xl bg-muted/50 border-border" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Celular *</label>
                <Input required type="tel" placeholder="(00) 00000-0000" className="h-12 rounded-xl bg-muted/50 border-border" />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Cidade de interesse *</label>
                <Input required placeholder="Sua cidade" className="h-12 rounded-xl bg-muted/50 border-border" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Estado *</label>
                <select required className="h-12 rounded-xl bg-muted/50 border border-border px-4 w-full text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                  <option value="">Selecione</option>
                  {estados.map(uf => <option key={uf} value={uf}>{uf}</option>)}
                </select>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Atua em qual ramo?</label>
                <Input placeholder="Ex: Varejo, Saúde, Moda..." className="h-12 rounded-xl bg-muted/50 border-border" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Faixa de investimento disponível</label>
                <select className="h-12 rounded-xl bg-muted/50 border border-border px-4 w-full text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                  <option value="">Selecione</option>
                  <option value="ate-100k">Até R$ 100 mil</option>
                  <option value="100k-200k">R$ 100 mil a R$ 200 mil</option>
                  <option value="200k-500k">R$ 200 mil a R$ 500 mil</option>
                  <option value="acima-500k">Acima de R$ 500 mil</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Como conheceu a Millu Shop?</label>
              <Input placeholder="Instagram, Google, indicação..." className="h-12 rounded-xl bg-muted/50 border-border" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Comentários</label>
              <Textarea placeholder="Conte-nos um pouco mais sobre você e seu interesse..." rows={4} className="rounded-xl bg-muted/50 border-border resize-none" />
            </div>

            <Button
              type="submit"
              disabled={loading}
              size="lg"
              className="w-full gradient-primary text-primary-foreground hover:opacity-90 rounded-full h-14 text-base shadow-elegant"
            >
              {loading ? "Enviando..." : (
                <span className="flex items-center gap-2">
                  Quero me tornar franqueado <Send size={18} />
                </span>
              )}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default LeadFormSection;
