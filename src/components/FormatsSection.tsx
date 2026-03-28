import { motion } from "framer-motion";
import { Store, Building2, LayoutGrid, MapPin } from "lucide-react";
import storeImg from "@/assets/store-interior.jpg";

const formats = [
  { icon: Store, title: "Loja de rua", desc: "Ponto comercial com fachada própria, presença direta no fluxo da cidade e identidade visual de alto impacto." },
];

const FormatsSection = () => (
  <section className="py-24 md:py-32">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <span className="text-sm font-medium text-secondary uppercase tracking-widest">Formatos</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-5 leading-tight">
              Modelos de <span className="text-gradient">operação</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              A franquia Millu Shop oferece possibilidades estratégicas para diferentes perfis de investimento e tipos de praça.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {formats.map((fmt, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-5 rounded-xl border border-border bg-card hover:shadow-card transition-shadow"
              >
                <fmt.icon size={20} className="text-primary mb-3" />
                <h4 className="font-semibold text-sm mb-1">{fmt.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{fmt.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden shadow-elegant"
        >
          <img
            src={storeImg}
            alt="Interior de loja Millu Shop"
            className="w-full h-[400px] lg:h-[500px] object-cover"
            loading="lazy"
            width={1280}
            height={860}
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default FormatsSection;
