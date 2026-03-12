import { motion } from "framer-motion";
import { mockVets } from "@/data/mockData";

const TeamSection = () => {
  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Nossa equipe</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-2 text-foreground">
            Profissionais apaixonados por animais
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockVets.map((vet, i) => (
            <motion.div
              key={vet.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl border border-border overflow-hidden text-center"
            >
              <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-3xl">👩‍⚕️</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display font-semibold text-foreground">{vet.name}</h3>
                <p className="text-primary text-sm font-medium mt-1">{vet.specialty}</p>
                <p className="text-muted-foreground text-xs mt-1">{vet.crm}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
