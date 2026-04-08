import { motion } from "framer-motion";
import { TrendingUp, RotateCcw, Globe, BarChart3, Clock, Wrench, Package } from "lucide-react";

const highlights = [
  { num: 1, icon: TrendingUp, text: "Fature com uma ótica de marca própria" },
  { num: 2, icon: RotateCcw, text: "Operação simples e alto giro de produto" },
  { num: 3, icon: Globe, text: "Expansão nacional — entre cedo na rede" },
  { num: 4, icon: BarChart3, text: "Margem acima da média do mercado" },
  { num: 5, icon: Clock, text: "Invista menos e recupere mais rápido" },
  { num: 6, icon: Wrench, text: "Modelo pronto e suporte completo" },
];

const specs = [
  { label: "Área média da loja", value: "60 m²" },
  { label: "Investimento total", value: "R$ 190 mil" },
  { label: "Taxa de franquia", value: "R$ 50 mil" },
  { label: "Margem de lucro", value: "22%" },
  { label: "Prazo médio de retorno", value: "12 meses" },
];

const InvestmentSection = () => (
  <section id="investimento" className="py-16 md:py-20 bg-muted/50">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-10"
      >
        <span className="text-sm font-medium text-secondary uppercase tracking-widest">Investimento</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-5">
          Números da <span className="text-gradient">franquia</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Conheça os valores e condições para abrir sua unidade Millu Shop.
        </p>
      </motion.div>

      {/* Specs grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto mb-8">
        {specs.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-card rounded-2xl p-6 border border-border text-center shadow-card"
          >
            <p className="text-2xl md:text-3xl font-bold text-primary">{s.value}</p>
            <p className="text-xs text-muted-foreground mt-2 leading-snug">{s.label}</p>
          </motion.div>
        ))}
      </div>

      {/* First stock badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto mb-16"
      >
        <div className="flex items-center gap-3 justify-center bg-primary/10 rounded-2xl p-5 border border-primary/20">
          <Package size={22} className="text-primary shrink-0" />
          <p className="text-sm md:text-base font-medium text-foreground">
            <span className="text-primary font-bold">Primeiro estoque incluso</span> — o franqueado já recebe o estoque inicial para começar a operar desde o primeiro dia.
          </p>
        </div>
      </motion.div>

      {/* Numbered benefits */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {highlights.map((h, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex items-start gap-4 bg-card rounded-2xl p-6 border border-border hover:shadow-elegant transition-all"
          >
            <span className="shrink-0 w-9 h-9 rounded-lg gradient-primary flex items-center justify-center text-sm font-bold text-primary-foreground">
              {h.num}
            </span>
            <div>
              <h3 className="font-semibold text-foreground leading-snug">{h.text}</h3>
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
          onClick={() => document.querySelector("#formulario")?.scrollIntoView({ behavior: "smooth" })}
          className="gradient-primary text-primary-foreground hover:opacity-90 rounded-full px-8 h-12 text-base shadow-elegant"
        >
          Solicitar informações <ArrowRight size={18} className="ml-1" />
        </Button>
      </motion.div>
    </div>
  </section>
);

export default InvestmentSection;
