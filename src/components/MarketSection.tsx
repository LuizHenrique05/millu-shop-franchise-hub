import { motion } from "framer-motion";
import { ArrowUpRight, RefreshCw, Gem, Shield } from "lucide-react";

const cards = [
  {
    icon: RefreshCw,
    title: "Demanda recorrente",
    desc: "O segmento óptico é movido por necessidade real e atualização constante de armações e lentes.",
  },
  {
    icon: Gem,
    title: "Necessidade + Estética",
    desc: "O consumidor busca cada vez mais estilo e identidade visual nos seus óculos — uma tendência que só cresce.",
  },
  {
    icon: ArrowUpRight,
    title: "Crescimento consistente",
    desc: "O mercado óptico brasileiro segue em expansão, com forte potencial em cidades médias e grandes.",
  },
  {
    icon: Shield,
    title: "Segmento resiliente",
    desc: "Mesmo em cenários econômicos desafiadores, a demanda por saúde visual e estilo se mantém estável.",
  },
];

const MarketSection = () => (
  <section id="mercado" className="py-16 md:py-20 bg-section-dourado">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <span className="text-sm font-medium text-secondary uppercase tracking-widest">Oportunidade</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-5">
          Um mercado com <span className="text-gradient">potencial real</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          O setor óptico é um dos mais atrativos do varejo brasileiro, com demanda crescente e consumidores cada vez mais atentos a estilo.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-2xl p-8 border border-border shadow-card hover:shadow-elegant transition-all"
          >
            <div className="w-10 h-10 rounded-lg bg-secondary/15 flex items-center justify-center mb-4">
              <card.icon size={20} className="text-secondary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default MarketSection;
