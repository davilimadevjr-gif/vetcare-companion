import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Heart, Shield, Clock } from "lucide-react";

const features = [
  { icon: Calendar, text: "Agendamento online 24h" },
  { icon: Heart, text: "Equipe apaixonada por pets" },
  { icon: Shield, text: "Prontuário digital seguro" },
  { icon: Clock, text: "Atendimento de emergência" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              🐾 Cuidado veterinário de excelência
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight mb-6 text-foreground">
              O melhor cuidado para quem mais{" "}
              <span className="text-primary">importa</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Agende consultas, acompanhe vacinas e tenha o histórico completo
              do seu pet na palma da mão. Tudo digital, simples e seguro.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <Link to="/register">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base px-8 shadow-lg shadow-accent/25">
                  Agendar Consulta
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline" className="font-semibold text-base px-8">
                  Já sou cliente
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{f.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative w-full max-w-lg aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <div className="absolute inset-4 rounded-2xl bg-card shadow-xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-8xl mb-4">🐕</div>
                  <p className="text-2xl font-display font-bold text-foreground">VetCare</p>
                  <p className="text-muted-foreground">Saúde e bem-estar animal</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
