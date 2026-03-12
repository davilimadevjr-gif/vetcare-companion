import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Serviços", href: "#services" },
    { label: "Equipe", href: "#team" },
    { label: "Depoimentos", href: "#testimonials" },
    { label: "Localização", href: "#location" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl">🐾</span>
          <span className="font-display font-bold text-xl text-foreground">VetCare</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-3">
            <Link to="/login">
              <Button variant="ghost" size="sm">Entrar</Button>
            </Link>
            <Link to="/register">
              <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Agendar
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-card border-b border-border px-4 pb-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-2 pt-2">
            <Link to="/login"><Button variant="ghost" className="w-full">Entrar</Button></Link>
            <Link to="/register"><Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Agendar</Button></Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
