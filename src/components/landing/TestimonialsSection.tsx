import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Mariana Costa", pet: "Mel (Golden Retriever)", text: "Atendimento incrível! A equipe é super carinhosa e o agendamento online facilitou demais minha vida.", rating: 5 },
  { name: "Carlos Eduardo", pet: "Simba (Gato Persa)", text: "Meu gato precisou de cirurgia e foi tudo impecável. Recomendo a todos os tutores!", rating: 5 },
  { name: "Fernanda Lima", pet: "Buddy (Labrador)", text: "O prontuário digital é fantástico. Consigo acompanhar tudo sobre a saúde do Buddy pelo celular.", rating: 5 },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Depoimentos</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-2 text-foreground">
            O que dizem nossos tutores
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 border border-border shadow-sm"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground mb-4 text-sm leading-relaxed">"{t.text}"</p>
              <div>
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.pet}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
