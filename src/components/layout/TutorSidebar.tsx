import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { LayoutDashboard, PawPrint, CalendarPlus, Bell, Receipt, LogOut } from "lucide-react";
import logoVetcare from "@/assets/logo-vetcare.png";

const links = [
  { to: "/tutor", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/tutor/pets", icon: PawPrint, label: "Meus Pets" },
  { to: "/tutor/schedule", icon: CalendarPlus, label: "Agendar" },
  { to: "/tutor/notifications", icon: Bell, label: "Notificações" },
  { to: "/tutor/billing", icon: Receipt, label: "Financeiro" },
];

const TutorSidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-64 bg-card border-r border-border min-h-screen flex flex-col">
      <div className="p-6 border-b border-border">
        <Link to="/">
          <img src={logoVetcare} alt="VetCare" className="h-10 w-auto" />
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {links.map((link) => {
          const isActive = location.pathname === link.to;
          return (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              )}
            >
              <link.icon className="w-5 h-5" />
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-3 px-4 py-2 mb-2">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-sm font-semibold text-primary">JD</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">João da Silva</p>
            <p className="text-xs text-muted-foreground truncate">joao@email.com</p>
          </div>
        </div>
        <Link
          to="/login"
          className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
        >
          <LogOut className="w-5 h-5" />
          Sair
        </Link>
      </div>
    </aside>
  );
};

export default TutorSidebar;
