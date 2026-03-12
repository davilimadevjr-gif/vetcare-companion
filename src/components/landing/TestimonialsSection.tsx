import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mariana Costa",
    pet: "Tutora da Mel, Golden Retriever",
    text: "O sistema de agendamento online mudou minha vida. Antes eu precisava ligar várias vezes para conseguir um horário. Agora marco em segundos e ainda recebo lembretes. A equipe é extremamente carinhosa e profissional.",
    rating: 5,
    avatar: "MC",
  },
  {
    name: "Carlos Eduardo Souza",
    pet: "Tutor do Simba, Gato Persa",
    text: "Meu gato precisou de uma cirurgia delicada e fui acolhido desde o primeiro momento. O acompanhamento pós-operatório pelo portal digital me deixou tranquilo, pois podia ver todas as anotações do veterinário em tempo real.",
    rating: 5,
    avatar: "CS",
  },
  {
    name: "Fernanda Lima",
    pet: "Tutora do Buddy, Labrador",
    text: "O prontuário digital é fantástico. Consigo ver o histórico completo do Buddy, incluindo vacinas, exames e peso — tudo no celular. Nunca mais perdi uma vacina graças aos lembretes automáticos. Recomendo demais!",
    rating: 5,
    avatar: "FL",
  },
  {
    name: "Roberto Almeida",
    pet: "Tutor da Nina, Shih Tzu",
    text: "Levo a Nina para banho e tosa toda semana. O atendimento é sempre impecável e recebo notificação quando ela está pronta. A clínica tem uma estrutura impressionante e funcionários muito bem treinados.",
    rating: 5,
    avatar: "RA",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Depoimentos</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-3 text-foreground">
            A confiança de quem nos escolheu
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Veja o que tutores reais dizem sobre a experiência com a VetCare.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 border border-border shadow-sm"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground mb-6 text-sm leading-relaxed">{t.text}</p>
              <div className="flex items-center gap-3 border-t border-border pt-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">{t.avatar}</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.pet}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
