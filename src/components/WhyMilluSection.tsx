import { motion } from "framer-motion";
import { Palette, Heart, TrendingUp, ShoppingBag, Monitor, HeadphonesIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const differentials = [
  {
    icon: Palette,
    title: "Identidade visual forte",
    desc: "Marca com estética memorável, pensada para se destacar no ponto de venda e no digital.",
  },
  {
    icon: Heart,
    title: "Posicionamento feminino e atual",
    desc: "Comunicação que fala com a mulher contemporânea, unindo moda, beleza e praticidade.",
  },
  {
    icon: TrendingUp,
    title: "Segmento com alta demanda",
    desc: "O mercado óptico é um dos mais resilientes e com recorrência de compra no Brasil.",
  },
  {
    icon: ShoppingBag,
    title: "Produtos com apelo comercial",
    desc: "Curadoria de óculos que unem tendência e acessibilidade, com alta conversão.",
  },
  {
    icon: Monitor,
    title: "Digital e físico integrados",
    desc: "Marca que nasceu forte no digital e pode expandir com presença física estratégica.",
  },
  {
    icon: HeadphonesIcon,
    title: "Suporte para expansão",
    desc: "Estrutura pensada para apoiar o franqueado em cada etapa do crescimento.",
  },
];

const scrollTo = (id: string) => {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
};

const WhyMilluSection = () => (
  <section id="diferenciais" className="py-16 md:py-20 bg-section-rosa">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-10"
      >
        <span className="text-sm font-medium text-secondary uppercase tracking-widest">Diferenciais</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-5">
          Por que a <span className="text-gradient">Millu Shop</span>?
        </h2>
        <p className="text-muted-foreground text-lg">
          Uma marca de eyewear que reúne estilo, propósito e oportunidade em cada detalhe.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {differentials.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group flex items-start gap-4 bg-card rounded-xl p-5 border border-border hover:shadow-elegant hover:border-primary/20 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
              <item.icon size={20} className="text-primary" />
            </div>
            <div>
              <h3 className="text-base font-semibold mb-1">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-10"
      >
        <Button
          size="lg"
          onClick={() => scrollTo("#formulario")}
          className="gradient-primary text-primary-foreground hover:opacity-90 rounded-full px-8 h-12 text-base shadow-elegant"
        >
          Quero ser franqueado <ArrowRight size={18} className="ml-1" />
        </Button>
      </motion.div>
    </div>
  </section>
);

export default WhyMilluSection;
