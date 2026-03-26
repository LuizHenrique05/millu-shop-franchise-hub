import { motion } from "framer-motion";
import { Palette, Heart, TrendingUp, ShoppingBag, Monitor, HeadphonesIcon } from "lucide-react";

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

const WhyMilluSection = () => (
  <section id="diferenciais" className="py-24 md:py-32 bg-muted/50">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <span className="text-sm font-medium text-secondary uppercase tracking-widest">Diferenciais</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-5">
          Por que a <span className="text-gradient">Millu Shop</span>?
        </h2>
        <p className="text-muted-foreground text-lg">
          Uma marca de eyewear que reúne estilo, propósito e oportunidade em cada detalhe.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {differentials.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group bg-card rounded-2xl p-8 border border-border hover:shadow-elegant hover:border-primary/20 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
              <item.icon size={24} className="text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyMilluSection;
