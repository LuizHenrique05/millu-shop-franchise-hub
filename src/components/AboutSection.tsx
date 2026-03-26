import { motion } from "framer-motion";
import brandImg from "@/assets/brand-eyewear.jpg";

const AboutSection = () => (
  <section id="sobre" className="py-24 md:py-32">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-3xl overflow-hidden">
            <img
              src={brandImg}
              alt="Coleção de óculos Millu Shop"
              className="w-full h-[400px] lg:h-[500px] object-cover"
              loading="lazy"
              width={1280}
              height={860}
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl gradient-warm opacity-20 hidden lg:block" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <span className="text-sm font-medium text-secondary uppercase tracking-widest">Sobre a marca</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Eyewear que une <span className="text-gradient">moda e propósito</span>
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              A Millu Shop é uma marca de eyewear contemporâneo com curadoria focada na mulher moderna. Nossos óculos de grau, sol e clipon são pensados para quem busca estilo, praticidade e personalidade em cada detalhe.
            </p>
            <p>
              Com identidade visual marcante e comunicação que dialoga com as tendências atuais, a Millu Shop construiu uma presença digital sólida e uma base de clientes engajada — pronta para expandir com presença física em todo o Brasil.
            </p>
            <p>
              Ser franqueado Millu Shop é levar para sua cidade uma experiência de compra moderna, visual e encantadora, com o respaldo de uma marca que sabe se comunicar com seu público.
            </p>
          </div>
          <div className="flex gap-8 pt-4">
            <div>
              <p className="text-2xl font-bold text-primary">Eyewear</p>
              <p className="text-sm text-muted-foreground">Feminino & Fashion</p>
            </div>
            <div className="w-px bg-border" />
            <div>
              <p className="text-2xl font-bold text-primary">Digital</p>
              <p className="text-sm text-muted-foreground">First & Escalável</p>
            </div>
            <div className="w-px bg-border" />
            <div>
              <p className="text-2xl font-bold text-primary">Marca</p>
              <p className="text-sm text-muted-foreground">Forte & Memorável</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
