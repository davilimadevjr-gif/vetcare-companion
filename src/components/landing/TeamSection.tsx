import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import vetAna from "@/assets/vet-ana.jpg";
import vetRicardo from "@/assets/vet-ricardo.jpg";
import vetBeatriz from "@/assets/vet-beatriz.jpg";
import vetFelipe from "@/assets/vet-felipe.jpg";

const team = [
  {
    name: "Dra. Ana Carolina Silva",
    specialty: "Clínica Geral e Medicina Preventiva",
    crm: "CRMV-SP 12345",
    photo: vetAna,
    bio: "Especialista em medicina interna com foco em diagnóstico precoce e protocolos preventivos.",
  },
  {
    name: "Dr. Ricardo Mendes",
    specialty: "Cirurgia e Ortopedia",
    crm: "CRMV-SP 12346",
    photo: vetRicardo,
    bio: "Mais de 15 anos de experiência em cirurgias ortopédicas e procedimentos minimamente invasivos.",
  },
  {
    name: "Dra. Beatriz Santos",
    specialty: "Dermatologia Veterinária",
    crm: "CRMV-SP 12347",
    photo: vetBeatriz,
    bio: "Referência em dermatologia, com formação internacional e foco em alergias e doenças de pele.",
  },
  {
    name: "Dr. Felipe Oliveira",
    specialty: "Cardiologia e Emergência",
    crm: "CRMV-SP 12348",
    photo: vetFelipe,
    bio: "Cardiologista veterinário e coordenador do plantão de emergência 24 horas da clínica.",
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Nossa equipe</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-3 text-foreground">
            Profissionais que fazem a diferença
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
            Nossa equipe é formada por veterinários com especialização reconhecida,
            que aliam competência técnica a um cuidado verdadeiramente humano.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((vet, i) => (
            <motion.div
              key={vet.crm}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl border border-border overflow-hidden group hover:shadow-lg transition-shadow"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={vet.photo}
                  alt={`Foto profissional de ${vet.name}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display font-semibold text-foreground">{vet.name}</h3>
                <p className="text-primary text-sm font-medium mt-1">{vet.specialty}</p>
                <p className="text-muted-foreground text-xs mt-1 mb-3">{vet.crm}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{vet.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
