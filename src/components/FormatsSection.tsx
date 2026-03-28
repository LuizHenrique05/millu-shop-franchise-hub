import { motion } from "framer-motion";
import { Store, MapPin, Ruler, Eye } from "lucide-react";
import storeImg from "@/assets/store-interior.jpg";

const details = [
  { icon: Store, label: "Formato", value: "Loja de rua" },
  { icon: MapPin, label: "Localização", value: "Ponto comercial com fachada própria" },
  { icon: Ruler, label: "Área média", value: "60 m²" },
  { icon: Eye, label: "Visibilidade", value: "Alto impacto visual na região" },
];

const FormatsSection = () => (
  <section className="py-24 md:py-32">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <span className="text-sm font-medium text-secondary uppercase tracking-widest">Formato</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-5 leading-tight">
          Modelo de <span className="text-gradient">operação</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          A franquia Millu Shop opera no formato loja de rua, com presença direta no fluxo da cidade e identidade visual de alto impacto.
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-border shadow-elegant">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={storeImg}
              alt="Interior de loja Millu Shop"
              className="w-full h-64 lg:h-full object-cover"
              loading="lazy"
              width={1280}
              height={860}
            />
          </motion.div>

          {/* Details side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card p-8 md:p-10 lg:p-12 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-6 w-fit">
              <Store size={16} />
              Loja de Rua
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Sua loja com a cara da Millu Shop
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Ponto comercial com fachada exclusiva, posicionado no fluxo da cidade para máxima visibilidade e conexão com o público.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {details.map((d, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <d.icon size={14} className="text-secondary" />
                    <span className="text-xs uppercase tracking-wider">{d.label}</span>
                  </div>
                  <p className="text-sm font-semibold text-foreground">{d.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default FormatsSection;
