import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TrendingUp, Eye, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-woman.jpg";

const badges = [
  { icon: TrendingUp, text: "Segmento em crescimento" },
  { icon: Eye, text: "Marca com potencial de expansão" },
  { icon: Sparkles, text: "Modelo de negócio atrativo" },
];

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background pt-20">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-accent/50 blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium">
              <Sparkles size={16} />
              Franquia de Eyewear
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight">
              Torne-se um{" "}
              <span className="text-gradient">franqueado</span>{" "}
              Millu Shop
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
              Empreenda com uma marca de eyewear que une estilo, identidade forte e oportunidade em um dos segmentos que mais crescem no Brasil.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollTo("#formulario")}
                className="gradient-primary text-primary-foreground hover:opacity-90 rounded-full px-8 text-base h-14 shadow-elegant"
              >
                Quero receber informações
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollTo("#como-funciona")}
                className="rounded-full px-8 text-base h-14 border-primary/30 text-primary hover:bg-accent"
              >
                Falar com especialista
              </Button>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              {badges.map((badge, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.15 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-background shadow-card border border-border text-sm text-foreground/80"
                >
                  <badge.icon size={16} className="text-secondary" />
                  {badge.text}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-elegant">
              <img
                src={heroImg}
                alt="Mulher elegante usando óculos Millu Shop"
                className="w-full h-[500px] lg:h-[620px] object-cover"
                width={1024}
                height={1280}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -left-4 bottom-12 bg-background rounded-2xl p-4 shadow-card border border-border hidden md:block"
            >
              <p className="text-sm font-medium text-foreground">Eyewear + Moda</p>
              <p className="text-xs text-muted-foreground">Estilo que encanta</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
