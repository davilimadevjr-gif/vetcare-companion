import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoVetcare from "@/assets/logo-vetcare.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Sobre", href: "#about" },
    { label: "Serviços", href: "#services" },
    { label: "Equipe", href: "#team" },
    { label: "Depoimentos", href: "#testimonials" },
    { label: "Blog", href: "#blog" },
    { label: "Contato", href: "#location" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-card/90 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 h-18 flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoVetcare} alt="VetCare" className="h-10 w-auto" />
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-3 ml-4">
            <Link to="/login">
              <Button variant="ghost" size="sm" className="font-medium">Entrar</Button>
            </Link>
            <Link to="/register">
              <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shadow-sm">
                Agendar Consulta
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-card border-b border-border px-4 pb-4 space-y-3 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-medium text-muted-foreground hover:text-primary py-2"
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-2 pt-2">
            <Link to="/login"><Button variant="ghost" className="w-full">Entrar</Button></Link>
            <Link to="/register"><Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">Agendar Consulta</Button></Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
