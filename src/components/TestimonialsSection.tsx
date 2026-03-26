import { motion } from "framer-motion";
import { Star, Globe, ShoppingBag, Award } from "lucide-react";

const trustItems = [
  { icon: Globe, title: "Presença digital sólida", desc: "Marca com forte engajamento e comunidade ativa nas redes sociais." },
  { icon: ShoppingBag, title: "Experiência em eyewear", desc: "Curadoria de produtos que alia tendência, qualidade e acessibilidade." },
  { icon: Award, title: "Apelo comercial comprovado", desc: "Produtos com alta conversão e forte identificação com o público feminino." },
];

const testimonials = [
  {
    text: "A identidade visual da Millu Shop é o que mais me chamou atenção. É uma marca que respira moda e estilo.",
    name: "Mariana S.",
    role: "Investidora interessada",
    placeholder: true,
  },
  {
    text: "Busco uma franquia no segmento óptico há anos. A proposta da Millu Shop é exatamente o que o mercado precisa.",
    name: "Carla M.",
    role: "Empreendedora",
    placeholder: true,
  },
];

const TestimonialsSection = () => (
  <section className="py-24 md:py-32 bg-muted/50">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <span className="text-sm font-medium text-secondary uppercase tracking-widest">Confiança</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-5">
          Por que <span className="text-gradient">confiar</span> na Millu Shop
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {trustItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center p-8 rounded-2xl bg-card border border-border"
          >
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4">
              <item.icon size={24} className="text-primary" />
            </div>
            <h3 className="font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.1 }}
            className="bg-card rounded-2xl p-8 border border-border shadow-card"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={16} className="fill-secondary text-secondary" />
              ))}
            </div>
            <p className="text-foreground/80 mb-4 italic leading-relaxed">"{t.text}"</p>
            <div>
              <p className="font-semibold text-sm">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
            {t.placeholder && (
              <p className="text-[10px] text-muted-foreground/50 mt-3">* Conteúdo ilustrativo</p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
