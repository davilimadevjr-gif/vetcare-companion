import { motion } from "framer-motion";
import clinicInterior from "@/assets/clinic-interior.jpg";
import { CheckCircle } from "lucide-react";

const highlights = [
  "Equipamentos de última geração importados",
  "Centro cirúrgico com monitoramento completo",
  "Laboratório próprio para exames rápidos",
  "Internação com acompanhamento 24 horas",
  "Farmácia veterinária integrada",
  "Ambiente climatizado e acolhedor",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl blur-xl" />
              <img
                src={clinicInterior}
                alt="Interior moderno da clínica VetCare com recepção"
                className="relative rounded-2xl shadow-lg w-full object-cover aspect-[4/3]"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Sobre a VetCare</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display mt-3 mb-6 text-foreground">
              Mais de uma década dedicada à saúde animal
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Fundada em 2014, a VetCare nasceu com a missão de transformar o cuidado veterinário
              em São Paulo. Nossa clínica combina infraestrutura de ponta com uma equipe
              altamente qualificada e apaixonada por animais.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Acreditamos que tecnologia e humanização caminham juntas. Por isso, investimos
              em um sistema digital completo que permite aos tutores acompanhar de perto
              a saúde dos seus pets, com transparência e praticidade.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
