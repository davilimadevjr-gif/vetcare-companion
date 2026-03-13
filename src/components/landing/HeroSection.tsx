import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Shield, Clock, Award, ArrowRight } from "lucide-react";
import vetUltrasound from "@/assets/vet-ultrasound.jpg";

const stats = [
  { value: "15.000+", label: "Pets atendidos" },
  { value: "98%", label: "Satisfação" },
  { value: "12+", label: "Anos de experiência" },
  { value: "24h", label: "Emergência" },
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-6">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-semibold">Clínica referência em São Paulo</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold font-display leading-[1.1] mb-6 text-foreground">
              Cuidado veterinário de{" "}
              <span className="text-primary">excelência</span> para quem mais importa
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
              Agende consultas online, acompanhe o prontuário digital e receba lembretes
              automáticos de vacinas. Uma experiência moderna e completa para tutores e pets.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <Link to="/register">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base px-8 shadow-lg shadow-accent/20 gap-2">
                  Agendar Consulta
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <a href="#services">
                <Button size="lg" variant="outline" className="font-semibold text-base px-8">
                  Conhecer Serviços
                </Button>
              </a>
            </div>
            <div className="flex items-center gap-6 flex-wrap">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4 text-primary" />
                <span>Agendamento 24h</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-primary" />
                <span>Prontuário seguro</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-primary" />
                <span>Atendimento emergencial</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
                <img
                  src={vetUltrasound}
                  alt="Veterinário realizando ultrassom em pet na clínica"
                className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 lg:mt-24"
        >
          <div className="bg-card rounded-2xl border border-border shadow-sm p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-3xl md:text-4xl font-display font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
