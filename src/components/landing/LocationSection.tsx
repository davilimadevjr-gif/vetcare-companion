import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const LocationSection = () => {
  return (
    <section id="location" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Localização</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-2 text-foreground">
            Venha nos visitar
          </h2>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Endereço</h3>
                <p className="text-muted-foreground text-sm">Rua dos Animais, 123 — Centro, São Paulo - SP</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Telefone</h3>
                <p className="text-muted-foreground text-sm">(11) 99999-0000</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">E-mail</h3>
                <p className="text-muted-foreground text-sm">contato@vetcare.com.br</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Horário de Funcionamento</h3>
                <p className="text-muted-foreground text-sm">Segunda a Sexta: 8h às 20h</p>
                <p className="text-muted-foreground text-sm">Sábado: 8h às 14h</p>
                <p className="text-muted-foreground text-sm">Emergência: 24h</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden border border-border h-80"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197!2d-46.6333!3d-23.5505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzAxLjgiUyA0NsKwMzcnNTkuOSJX!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Localização VetCare"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
