import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const profiles = [
  "Empreendedores que querem investir em uma marca com apelo visual forte e identidade reconhecível",
  "Pessoas que buscam entrar no varejo com suporte, estrutura e uma proposta moderna",
  "Investidores que valorizam segmentos de alta recorrência e demanda estável",
  "Profissionais que se identificam com moda, beleza, estilo e experiência do consumidor",
  "Quem deseja empreender com uma marca feminina, atual e com linguagem digital",
  "Pessoas que acreditam no poder de uma marca forte para diferenciação local",
];

const scrollTo = (id: string) => {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
};

const TargetProfileSection = () => (
  <section className="py-16 md:py-20 bg-section-rosa">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <span className="text-sm font-medium text-secondary uppercase tracking-widest">Perfil ideal</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Para quem é a <span className="text-gradient">franquia?</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A franquia Millu Shop é para quem quer empreender com propósito, estilo e o respaldo de uma marca que sabe se conectar com o público.
          </p>
          <Button
            size="lg"
            onClick={() => scrollTo("#formulario")}
            className="gradient-primary text-primary-foreground hover:opacity-90 rounded-full px-8 h-12 text-base shadow-elegant"
          >
            Tenho interesse <ArrowRight size={18} className="ml-1" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          {profiles.map((profile, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:shadow-card transition-shadow"
            >
              <div className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check size={14} className="text-primary-foreground" />
              </div>
              <p className="text-sm leading-relaxed text-foreground/80">{profile}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default TargetProfileSection;
