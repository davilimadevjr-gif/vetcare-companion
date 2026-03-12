import { motion } from "framer-motion";
import { Calendar, AlertTriangle, PawPrint, Dog, Cat } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { mockPets, mockAppointments, mockVaccines } from "@/data/mockData";

const serviceLabels: Record<string, string> = {
  consultation: "Consulta", vaccination: "Vacinação", surgery: "Cirurgia",
  grooming: "Banho e Tosa", emergency: "Emergência", followup: "Retorno",
};

const statusColors: Record<string, string> = {
  confirmed: "bg-success/10 text-success",
  scheduled: "bg-primary/10 text-primary",
  completed: "bg-muted text-muted-foreground",
  cancelled: "bg-destructive/10 text-destructive",
};

const TutorDashboard = () => {
  const nextAppointment = mockAppointments.find((a) => a.status === "confirmed" || a.status === "scheduled");
  const overdueVaccines = mockVaccines.filter((v) => v.nextDate && new Date(v.nextDate) < new Date());

  return (
    <div className="max-w-5xl">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-display font-bold text-foreground mb-1">Olá, João!</h1>
        <p className="text-muted-foreground mb-8">Veja o resumo dos seus pets e próximos compromissos.</p>
      </motion.div>

      {nextAppointment && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Card className="p-6 mb-8 border-l-4 border-l-primary">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Próximo agendamento</p>
                  <p className="font-display font-semibold text-foreground text-lg">
                    {serviceLabels[nextAppointment.service]} — {nextAppointment.petName}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {new Date(nextAppointment.date).toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "long" })} às {nextAppointment.time}
                  </p>
                  {nextAppointment.vetName && (
                    <p className="text-sm text-muted-foreground mt-1">{nextAppointment.vetName}</p>
                  )}
                </div>
              </div>
              <Badge className={statusColors[nextAppointment.status]}>
                {nextAppointment.status === "confirmed" ? "Confirmado" : "Agendado"}
              </Badge>
            </div>
          </Card>
        </motion.div>
      )}

      {overdueVaccines.length > 0 && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
          <Card className="p-4 mb-8 border-l-4 border-l-destructive bg-destructive/5">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-destructive" />
              <div>
                <p className="font-medium text-foreground text-sm">Vacinas em atraso</p>
                <p className="text-muted-foreground text-xs">
                  {overdueVaccines.map((v) => `${v.name} (vence ${new Date(v.nextDate!).toLocaleDateString("pt-BR")})`).join(", ")}
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      )}

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-display font-semibold text-foreground">Meus Pets</h2>
          <Link to="/tutor/pets">
            <Button variant="ghost" size="sm" className="text-primary">Ver todos</Button>
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {mockPets.map((pet) => (
            <Card key={pet.id} className="p-5 hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  {pet.species === "dog" ? (
                    <Dog className="w-7 h-7 text-primary" />
                  ) : pet.species === "cat" ? (
                    <Cat className="w-7 h-7 text-primary" />
                  ) : (
                    <PawPrint className="w-7 h-7 text-primary" />
                  )}
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground">{pet.name}</p>
                  <p className="text-muted-foreground text-sm">{pet.breed}</p>
                  <p className="text-muted-foreground text-xs">{pet.weight}kg</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        <h2 className="text-lg font-display font-semibold text-foreground mb-4">Últimos atendimentos</h2>
        <div className="space-y-3">
          {mockAppointments.filter((a) => a.status === "completed").map((apt) => (
            <Card key={apt.id} className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">{serviceLabels[apt.service]} — {apt.petName}</p>
                  <p className="text-muted-foreground text-xs">{new Date(apt.date).toLocaleDateString("pt-BR")} • {apt.vetName}</p>
                </div>
              </div>
              <Badge className={statusColors[apt.status]}>Concluída</Badge>
            </Card>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default TutorDashboard;
