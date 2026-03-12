import { Link } from "react-router-dom";
import logoVetcare from "@/assets/logo-vetcare.png";

const Footer = () => {
  return (
    <footer className="bg-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <img src={logoVetcare} alt="VetCare" className="h-12 w-auto mb-4 brightness-0 invert" />
            <p className="text-background/60 text-sm leading-relaxed">
              Cuidando da saúde e bem-estar do seu pet com tecnologia, carinho e excelência clínica desde 2014.
            </p>
          </div>
          <div>
            <h4 className="font-display font-semibold text-background mb-4">Serviços</h4>
            <ul className="space-y-2.5 text-sm text-background/60">
              <li><a href="#services" className="hover:text-background transition-colors">Consultas Clínicas</a></li>
              <li><a href="#services" className="hover:text-background transition-colors">Vacinação</a></li>
              <li><a href="#services" className="hover:text-background transition-colors">Cirurgias</a></li>
              <li><a href="#services" className="hover:text-background transition-colors">Banho e Tosa</a></li>
              <li><a href="#services" className="hover:text-background transition-colors">Emergência 24h</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-background mb-4">Institucional</h4>
            <ul className="space-y-2.5 text-sm text-background/60">
              <li><a href="#about" className="hover:text-background transition-colors">Sobre a VetCare</a></li>
              <li><a href="#team" className="hover:text-background transition-colors">Nossa Equipe</a></li>
              <li><a href="#blog" className="hover:text-background transition-colors">Blog e Dicas</a></li>
              <li><a href="#testimonials" className="hover:text-background transition-colors">Depoimentos</a></li>
              <li><a href="#location" className="hover:text-background transition-colors">Localização</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-background mb-4">Portal do Tutor</h4>
            <ul className="space-y-2.5 text-sm text-background/60">
              <li><Link to="/login" className="hover:text-background transition-colors">Entrar</Link></li>
              <li><Link to="/register" className="hover:text-background transition-colors">Criar Conta</Link></li>
              <li><Link to="/tutor" className="hover:text-background transition-colors">Meus Pets</Link></li>
              <li><Link to="/tutor/schedule" className="hover:text-background transition-colors">Agendar Consulta</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/40 text-sm">© 2026 VetCare. Todos os direitos reservados.</p>
          <div className="flex gap-6 text-sm text-background/40">
            <a href="#" className="hover:text-background/60 transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-background/60 transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
