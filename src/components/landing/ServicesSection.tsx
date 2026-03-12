import { motion } from "framer-motion";
import { Stethoscope, Syringe, Scissors, HeartPulse, Bath, RotateCcw } from "lucide-react";

const services = [
  { icon: Stethoscope, name: "Consultas", desc: "Clínica geral, check-ups e diagnósticos completos." },
  { icon: Syringe, name: "Vacinação", desc: "Calendário completo de vacinas com lembretes automáticos." },
  { icon: HeartPulse, name: "Cirurgias", desc: "Procedimentos com equipe especializada e centro cirúrgico." },
  { icon: Bath, name: "Banho e Tosa", desc: "Cuidados estéticos com produtos premium." },
  { icon: Scissors, name: "Emergência 24h", desc: "Atendimento emergencial com plantão veterinário." },
  { icon: RotateCcw, name: "Internação", desc: "Acompanhamento contínuo com monitoramento 24 horas." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Nossos serviços</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-2 text-foreground">
            Cuidado completo para o seu pet
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Da consulta de rotina à emergência, oferecemos todos os serviços que seu animal precisa em um só lugar.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-border"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold font-display text-foreground mb-2">{service.name}</h3>
              <p className="text-muted-foreground text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
