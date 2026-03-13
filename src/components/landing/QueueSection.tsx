import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Clock, UserCheck, AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface QueueEntry {
  id: string;
  name: string;
  pet: string;
  service: string;
  position: number;
  estimatedWait: number; // minutes
  status: "waiting" | "being_attended" | "next";
  arrivedAt: string;
}

// Mock data — will be replaced by real-time backend
const mockQueue: QueueEntry[] = [
  { id: "1", name: "Mariana C.", pet: "Mel (Golden)", service: "Consulta", position: 1, estimatedWait: 0, status: "being_attended", arrivedAt: "09:15" },
  { id: "2", name: "Carlos E.", pet: "Simba (Gato Persa)", service: "Vacinação", position: 2, estimatedWait: 12, status: "next", arrivedAt: "09:30" },
  { id: "3", name: "Fernanda L.", pet: "Buddy (Labrador)", service: "Consulta", position: 3, estimatedWait: 25, status: "waiting", arrivedAt: "09:42" },
  { id: "4", name: "Roberto A.", pet: "Nina (Shih Tzu)", service: "Banho e Tosa", position: 4, estimatedWait: 38, status: "waiting", arrivedAt: "09:55" },
  { id: "5", name: "Juliana M.", pet: "Thor (Bulldog)", service: "Retorno", position: 5, estimatedWait: 50, status: "waiting", arrivedAt: "10:05" },
];

const statusConfig = {
  being_attended: { label: "Em atendimento", color: "bg-green-500", textColor: "text-green-700", bgLight: "bg-green-50" },
  next: { label: "Próximo", color: "bg-amber-500", textColor: "text-amber-700", bgLight: "bg-amber-50" },
  waiting: { label: "Aguardando", color: "bg-muted", textColor: "text-muted-foreground", bgLight: "bg-muted/30" },
};

const QueueSection = () => {
  const [queue, setQueue] = useState<QueueEntry[]>(mockQueue);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  const totalInQueue = queue.filter((q) => q.status === "waiting" || q.status === "next").length;
  const avgWait = Math.round(queue.filter((q) => q.status === "waiting").reduce((sum, q) => sum + q.estimatedWait, 0) / Math.max(queue.filter((q) => q.status === "waiting").length, 1));
  const beingAttended = queue.filter((q) => q.status === "being_attended").length;

  // Simulate real-time refresh
  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setLastUpdated(new Date());
      setIsRefreshing(false);
    }, 800);
  };

  // Auto-refresh every 30s (simulated)
  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdated(new Date());
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="queue" className="py-20 lg:py-28 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Fila em tempo real
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-3 text-foreground">
            Acompanhe a fila da clínica
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
            Veja quantas pessoas estão aguardando e o tempo estimado de espera antes de sair de casa.
            Atualização automática a cada 30 segundos.
          </p>
        </motion.div>

        {/* Stats cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
        >
          <div className="bg-card rounded-xl border border-border p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <p className="text-3xl font-display font-bold text-foreground">{totalInQueue}</p>
            <p className="text-sm text-muted-foreground mt-1">Pessoas na fila</p>
          </div>
          <div className="bg-card rounded-xl border border-border p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
              <Clock className="w-6 h-6 text-accent" />
            </div>
            <p className="text-3xl font-display font-bold text-foreground">~{avgWait} min</p>
            <p className="text-sm text-muted-foreground mt-1">Tempo médio de espera</p>
          </div>
          <div className="bg-card rounded-xl border border-border p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-3">
              <UserCheck className="w-6 h-6 text-green-600" />
            </div>
            <p className="text-3xl font-display font-bold text-foreground">{beingAttended}</p>
            <p className="text-sm text-muted-foreground mt-1">Em atendimento agora</p>
          </div>
        </motion.div>

        {/* Queue list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-card rounded-xl border border-border overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border bg-muted/30">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-foreground">Fila ao vivo</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-muted-foreground">
                Atualizado às {lastUpdated.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleRefresh}
                disabled={isRefreshing}
                className="h-8 w-8 p-0"
              >
                <RefreshCw className={`w-4 h-4 text-muted-foreground ${isRefreshing ? "animate-spin" : ""}`} />
              </Button>
            </div>
          </div>

          {/* Table header */}
          <div className="hidden md:grid grid-cols-[3rem_1fr_1fr_1fr_8rem_7rem] gap-4 px-4 py-3 bg-muted/20 text-xs font-semibold text-muted-foreground uppercase tracking-wider border-b border-border">
            <span>#</span>
            <span>Tutor / Pet</span>
            <span>Serviço</span>
            <span>Chegada</span>
            <span>Espera estimada</span>
            <span>Status</span>
          </div>

          {/* Queue entries */}
          <AnimatePresence>
            {queue.map((entry) => {
              const config = statusConfig[entry.status];
              return (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className={`grid grid-cols-1 md:grid-cols-[3rem_1fr_1fr_1fr_8rem_7rem] gap-2 md:gap-4 px-4 py-4 border-b border-border last:border-b-0 items-center ${
                    entry.status === "being_attended" ? "bg-green-50/50" : ""
                  }`}
                >
                  {/* Position */}
                  <div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">
                    {entry.position}
                  </div>

                  {/* Tutor / Pet */}
                  <div>
                    <p className="font-medium text-foreground text-sm">{entry.name}</p>
                    <p className="text-xs text-muted-foreground">{entry.pet}</p>
                  </div>

                  {/* Service */}
                  <div className="text-sm text-foreground">{entry.service}</div>

                  {/* Arrival */}
                  <div className="text-sm text-muted-foreground">{entry.arrivedAt}</div>

                  {/* Wait */}
                  <div className="text-sm font-medium text-foreground">
                    {entry.status === "being_attended" ? (
                      <span className="text-green-600">Agora</span>
                    ) : (
                      <span>~{entry.estimatedWait} min</span>
                    )}
                  </div>

                  {/* Status badge */}
                  <div>
                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full ${config.bgLight} ${config.textColor}`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${config.color}`} />
                      {config.label}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Info note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex items-start gap-3 mt-6 p-4 bg-primary/5 rounded-xl border border-primary/10"
        >
          <AlertCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm font-medium text-foreground">Dica para evitar filas</p>
            <p className="text-sm text-muted-foreground mt-1">
              Agende sua consulta pelo portal do tutor e tenha horário garantido, sem precisar esperar.
              Clientes com agendamento têm prioridade sobre a fila de encaixes.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QueueSection;
