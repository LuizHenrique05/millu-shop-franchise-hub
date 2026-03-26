import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCtaSection = () => (
  <section className="py-24 md:py-32 relative overflow-hidden">
    <div className="absolute inset-0 gradient-primary opacity-100" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent)]" />
    
    <div className="container relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto space-y-8"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight">
          Leve a Millu Shop para sua cidade
        </h2>
        <p className="text-primary-foreground/80 text-lg md:text-xl max-w-xl mx-auto">
          Faça parte da próxima fase de expansão de uma marca de eyewear que une estilo, oportunidade e identidade.
        </p>
        <Button
          size="lg"
          onClick={() => document.querySelector("#formulario")?.scrollIntoView({ behavior: "smooth" })}
          className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full px-10 h-14 text-base shadow-elegant"
        >
          Solicitar informações <ArrowRight size={18} className="ml-2" />
        </Button>
      </motion.div>
    </div>
  </section>
);

export default FinalCtaSection;
