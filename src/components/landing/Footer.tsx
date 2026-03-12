import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🐾</span>
              <span className="font-display font-bold text-xl text-background">VetCare</span>
            </div>
            <p className="text-background/60 text-sm">
              Cuidando da saúde e bem-estar do seu pet com carinho e tecnologia.
            </p>
          </div>
          <div>
            <h4 className="font-display font-semibold text-background mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-background/60">
              <li>Consultas</li>
              <li>Vacinação</li>
              <li>Cirurgias</li>
              <li>Banho e Tosa</li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-background mb-4">Links</h4>
            <ul className="space-y-2 text-sm text-background/60">
              <li><Link to="/login" className="hover:text-background transition-colors">Portal do Tutor</Link></li>
              <li><a href="#team" className="hover:text-background transition-colors">Nossa Equipe</a></li>
              <li><a href="#location" className="hover:text-background transition-colors">Localização</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-background mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-background/60">
              <li>(11) 99999-0000</li>
              <li>contato@vetcare.com.br</li>
              <li>São Paulo — SP</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/10 mt-8 pt-8 text-center">
          <p className="text-background/40 text-sm">© 2026 VetCare. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
