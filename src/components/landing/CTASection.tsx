import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Smartphone, Calendar, Bell } from "lucide-react";
import dogCurious from "@/assets/dog-curious.jpg";

const features = [
  {
    icon: Smartphone,
    title: "Prontuário digital completo",
    desc: "Acesse exames, diagnósticos e tratamentos do seu pet a qualquer hora, de qualquer lugar.",
  },
  {
    icon: Calendar,
    title: "Agendamento inteligente",
    desc: "Escolha o horário ideal com visualização em tempo real da disponibilidade.",
  },
  {
    icon: Bell,
    title: "Lembretes automáticos",
    desc: "Nunca mais perca uma vacina ou retorno com nossas notificações personalizadas.",
  },
];

const CTASection = () => {
  return (
    <section className="py-20 lg:py-28 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display text-primary-foreground leading-tight">
              Comece a cuidar do seu pet de forma digital e moderna
            </h2>
            <p className="text-primary-foreground/80 mt-4 mb-8 text-lg leading-relaxed">
              Cadastre-se gratuitamente e tenha acesso ao portal do tutor. Agende consultas,
              acompanhe vacinas e tenha o histórico completo na palma da mão.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Link to="/register">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base px-8 gap-2 shadow-lg">
                  Criar minha conta gratuita
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={dogCurious}
                alt="Cachorro curioso olhando para a câmera"
                className="w-full h-56 object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            {features.map((feature, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-5"
              >
                <div className="w-10 h-10 rounded-lg bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-primary-foreground">{feature.title}</h3>
                  <p className="text-primary-foreground/70 text-sm mt-1">{feature.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
