import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5511999990000?text=Olá! Gostaria de agendar uma consulta."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-success text-success-foreground rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};

export default WhatsAppButton;
