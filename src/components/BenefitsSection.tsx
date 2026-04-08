import { motion } from "framer-motion";
import { Star, Fingerprint, BarChart3, Headphones, Rocket, MessageCircle, Award } from "lucide-react";

const benefits = [
  { icon: Star, title: "Força de marca", desc: "Identidade visual memorável que gera reconhecimento imediato." },
  { icon: Fingerprint, title: "Identidade marcante", desc: "Estética premium acessível que se diferencia no ponto de venda." },
  { icon: BarChart3, title: "Demanda constante", desc: "Segmento com recorrência de compra e necessidade real." },
  { icon: Headphones, title: "Suporte comercial", desc: "Acompanhamento estruturado para sua operação." },
  { icon: Rocket, title: "Estratégia de expansão", desc: "Modelo pensado para crescer com consistência e inteligência." },
  { icon: MessageCircle, title: "Linguagem atual", desc: "Marca com comunicação digital-first que engaja o público." },
  { icon: Award, title: "Diferenciação local", desc: "Posicionamento único que destaca sua operação na região." },
];

const BenefitsSection = () => (
  <section id="beneficios" className="py-16 md:py-20 bg-section-dourado">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-10"
      >
        <span className="text-sm font-medium text-secondary uppercase tracking-widest">Benefícios</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-5">
          Vantagens de ser <span className="text-gradient">franqueado</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Descubra por que a Millu Shop é a marca ideal para quem busca empreender com identidade e propósito.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {benefits.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className={`bg-card rounded-2xl p-7 border border-border hover:shadow-elegant transition-all ${
              i === benefits.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""
            }`}
          >
            <div className="w-10 h-10 rounded-lg gradient-warm flex items-center justify-center mb-4">
              <b.icon size={20} className="text-primary-foreground" />
            </div>
            <h3 className="font-semibold mb-1">{b.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
