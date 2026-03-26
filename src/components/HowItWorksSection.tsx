import { motion } from "framer-motion";
import { ClipboardList, Phone, UserCheck, Presentation } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    num: "01",
    title: "Cadastro de interesse",
    desc: "Preencha o formulário com seus dados e sua cidade de interesse.",
  },
  {
    icon: Phone,
    num: "02",
    title: "Contato comercial",
    desc: "Nossa equipe entrará em contato para entender seu perfil e objetivos.",
  },
  {
    icon: UserCheck,
    num: "03",
    title: "Avaliação de perfil e região",
    desc: "Analisamos juntos o potencial da sua praça e a aderência ao modelo.",
  },
  {
    icon: Presentation,
    num: "04",
    title: "Apresentação da oportunidade",
    desc: "Você recebe todos os detalhes para tomar sua decisão com segurança.",
  },
];

const HowItWorksSection = () => (
  <section id="como-funciona" className="py-24 md:py-32 bg-muted/50">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <span className="text-sm font-medium text-secondary uppercase tracking-widest">Jornada</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-5">
          Como <span className="text-gradient">funciona?</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Um processo simples, transparente e pensado para alinhar expectativas desde o primeiro contato.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="relative bg-card rounded-2xl p-8 border border-border text-center group hover:shadow-elegant transition-all"
          >
            <span className="text-5xl font-display font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
              {step.num}
            </span>
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mx-auto mt-4 mb-4">
              <step.icon size={24} className="text-primary" />
            </div>
            <h3 className="text-base font-semibold mb-2">{step.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-border" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
