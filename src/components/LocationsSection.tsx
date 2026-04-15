import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const locations = [
  { city: "Marília", state: "SP", image: "/placeholder.svg" },
  { city: "Bauru", state: "SP", image: "/placeholder.svg" },
  { city: "Botucatu", state: "SP", image: "/placeholder.svg" },
];

const LocationsSection = () => (
  <section className="py-16 md:py-20 bg-section-rosa">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-12"
      >
        <span className="text-sm font-medium text-secondary uppercase tracking-widest">
          Unidades
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 leading-tight">
          Onde <span className="text-gradient">Estamos</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Conheça unidades da nossa operação que refletem a essência visual da marca MILLU SHOP.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {locations.map((loc, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="group text-center"
          >
            <div className="rounded-2xl overflow-hidden shadow-card mb-4 aspect-[4/5] bg-muted">
              <img
                src={loc.image}
                alt={`Loja Millu Shop ${loc.city}/${loc.state}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="flex items-center justify-center gap-1.5 text-foreground font-semibold tracking-wide uppercase">
              <MapPin size={14} className="text-primary" />
              {loc.city}/{loc.state}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default LocationsSection;
