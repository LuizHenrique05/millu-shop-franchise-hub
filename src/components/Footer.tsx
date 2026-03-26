import { Instagram, Facebook, Mail, Phone } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground py-16">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        <div className="space-y-4">
          <h3 className="font-display text-2xl font-bold">Millu Shop</h3>
          <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-xs">
            Marca de eyewear contemporâneo focada na mulher moderna. Estilo, tendência e praticidade em cada armação.
          </p>
          <div className="flex gap-3">
            <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold">Links</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/60">
            <li><a href="#diferenciais" className="hover:text-primary-foreground transition-colors">Diferenciais</a></li>
            <li><a href="#sobre" className="hover:text-primary-foreground transition-colors">Sobre a marca</a></li>
            <li><a href="#mercado" className="hover:text-primary-foreground transition-colors">Oportunidade</a></li>
            <li><a href="#formulario" className="hover:text-primary-foreground transition-colors">Cadastro</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold">Contato</h4>
          <div className="space-y-3 text-sm text-primary-foreground/60">
            <p className="flex items-center gap-2"><Mail size={16} /> contato@millushop.com.br</p>
            <p className="flex items-center gap-2"><Phone size={16} /> (00) 0000-0000</p>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} Millu Shop. Todos os direitos reservados.
        </p>
        <p className="text-xs text-primary-foreground/40">
          Esta página tem caráter informativo. Consulte as condições da franquia diretamente com a empresa.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
