import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import serviceConsultation from "@/assets/service-consultation.jpg";
import serviceVaccination from "@/assets/service-vaccination.jpg";
import serviceSurgery from "@/assets/service-surgery.jpg";
import serviceGrooming from "@/assets/service-grooming.png";

const services = [
  {
    image: serviceConsultation,
    name: "Consultas Clínicas",
    desc: "Avaliação completa com anamnese detalhada, exame físico e diagnóstico preciso. Check-ups preventivos e acompanhamento de doenças crônicas.",
    price: "A partir de R$ 150",
  },
  {
    image: serviceVaccination,
    name: "Vacinação",
    desc: "Protocolo vacinal completo para cães e gatos. Carteirinha digital com lembretes automáticos para nunca perder uma dose.",
    price: "A partir de R$ 80",
  },
  {
    image: serviceSurgery,
    name: "Cirurgias",
    desc: "Centro cirúrgico equipado com monitoramento cardíaco, anestesia inalatória e equipe especializada em procedimentos complexos.",
    price: "Sob consulta",
  },
  {
    image: serviceGrooming,
    name: "Banho e Tosa",
    desc: "Banho terapêutico com produtos hipoalergênicos, tosa higiênica e estética. Hidratação de pelagem e cuidados com unhas e ouvidos.",
    price: "A partir de R$ 70",
  },
];

const moreServices = [
  { name: "Emergência 24h", desc: "Plantão veterinário com atendimento imediato para casos urgentes." },
  { name: "Exames Laboratoriais", desc: "Hemograma, bioquímico, urinálise e mais com resultados rápidos." },
  { name: "Internação", desc: "Monitoramento contínuo com câmeras e atualizações para o tutor." },
  { name: "Odontologia", desc: "Limpeza dentária, extrações e tratamento periodontal completo." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Nossos serviços</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-3 text-foreground">
            Cuidado completo em um só lugar
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
            Oferecemos uma gama completa de serviços veterinários para atender todas as
            necessidades do seu pet, desde a prevenção até tratamentos especializados.
          </p>
        </motion.div>

        {/* Main services with images */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-border group"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold font-display text-foreground">{service.name}</h3>
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full whitespace-nowrap">
                    {service.price}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional services */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {moreServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="bg-card rounded-xl p-5 border border-border hover:border-primary/30 transition-colors"
            >
              <h3 className="font-semibold font-display text-foreground mb-2">{service.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/register" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
            Agende agora e conheça todos os serviços
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
