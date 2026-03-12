import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { mockPets, mockVets, mockServices, availableTimeSlots } from "@/data/mockData";
import { cn } from "@/lib/utils";

type Step = 1 | 2 | 3 | 4;

const TutorSchedule = () => {
  const [step, setStep] = useState<Step>(1);
  const [selectedPet, setSelectedPet] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [selectedVet, setSelectedVet] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const canProceed = (s: Step) => {
    if (s === 1) return !!selectedPet && !!selectedService;
    if (s === 2) return !!selectedDate && !!selectedTime;
    if (s === 3) return true;
    return false;
  };

  const steps = [
    { num: 1, label: "Pet e Serviço" },
    { num: 2, label: "Data e Hora" },
    { num: 3, label: "Veterinário" },
    { num: 4, label: "Confirmação" },
  ];

  const selectedServiceObj = mockServices.find((s) => s.id === selectedService);
  const selectedPetObj = mockPets.find((p) => p.id === selectedPet);
  const selectedVetObj = mockVets.find((v) => v.id === selectedVet);

  return (
    <div className="max-w-3xl">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-display font-bold text-foreground mb-1">Agendar Consulta</h1>
        <p className="text-muted-foreground mb-8">Siga os passos abaixo para marcar um atendimento.</p>
      </motion.div>

      {/* Step indicators */}
      <div className="flex items-center gap-2 mb-8">
        {steps.map((s, i) => (
          <div key={s.num} className="flex items-center gap-2">
            <div className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors",
              step >= s.num ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
            )}>
              {step > s.num ? <Check className="w-4 h-4" /> : s.num}
            </div>
            <span className={cn("text-sm hidden sm:inline", step >= s.num ? "text-foreground font-medium" : "text-muted-foreground")}>{s.label}</span>
            {i < steps.length - 1 && <div className={cn("w-8 h-px", step > s.num ? "bg-primary" : "bg-border")} />}
          </div>
        ))}
      </div>

      <Card className="p-6">
        {/* Step 1 */}
        {step === 1 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <div className="space-y-2">
              <Label>Selecione o pet</Label>
              <Select value={selectedPet} onValueChange={setSelectedPet}>
                <SelectTrigger><SelectValue placeholder="Escolha o pet" /></SelectTrigger>
                <SelectContent>
                  {mockPets.map((p) => (
                    <SelectItem key={p.id} value={p.id}>{p.name} — {p.breed}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Tipo de serviço</Label>
              <Select value={selectedService} onValueChange={setSelectedService}>
                <SelectTrigger><SelectValue placeholder="Escolha o serviço" /></SelectTrigger>
                <SelectContent>
                  {mockServices.map((s) => (
                    <SelectItem key={s.id} value={s.id}>{s.name} — R${s.price.toFixed(2)} ({s.duration}min)</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </motion.div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <div className="space-y-2">
              <Label>Data</Label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>
            {selectedDate && (
              <div className="space-y-2">
                <Label>Horário disponível</Label>
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                  {availableTimeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={cn(
                        "px-3 py-2 rounded-lg text-sm font-medium transition-colors border",
                        selectedTime === time
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-card text-foreground border-border hover:border-primary"
                      )}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <div className="space-y-2">
              <Label>Veterinário (opcional)</Label>
              <Select value={selectedVet} onValueChange={setSelectedVet}>
                <SelectTrigger><SelectValue placeholder="Qualquer disponível" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Qualquer disponível</SelectItem>
                  {mockVets.map((v) => (
                    <SelectItem key={v.id} value={v.id}>{v.name} — {v.specialty}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </motion.div>
        )}

        {/* Step 4 - Confirmation */}
        {step === 4 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
                <Check className="w-6 h-6 text-success" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground text-lg">Resumo do agendamento</h3>
                <p className="text-muted-foreground text-sm">Confirme os dados abaixo</p>
              </div>
            </div>
            <div className="space-y-3 bg-secondary rounded-lg p-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Pet</span>
                <span className="font-medium text-foreground">{selectedPetObj?.name}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Serviço</span>
                <span className="font-medium text-foreground">{selectedServiceObj?.name}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Data</span>
                <span className="font-medium text-foreground">
                  {selectedDate && new Date(selectedDate + "T12:00:00").toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "long" })}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Horário</span>
                <span className="font-medium text-foreground">{selectedTime}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Veterinário</span>
                <span className="font-medium text-foreground">{selectedVetObj?.name || "Qualquer disponível"}</span>
              </div>
              <div className="flex justify-between text-sm border-t border-border pt-3 mt-3">
                <span className="text-muted-foreground">Valor</span>
                <span className="font-semibold text-foreground">R$ {selectedServiceObj?.price.toFixed(2)}</span>
              </div>
            </div>
          </motion.div>
        )}

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          {step > 1 ? (
            <Button variant="outline" onClick={() => setStep((s) => (s - 1) as Step)}>Voltar</Button>
          ) : <div />}
          {step < 4 ? (
            <Button
              onClick={() => setStep((s) => (s + 1) as Step)}
              disabled={!canProceed(step)}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Próximo
            </Button>
          ) : (
            <Button
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
              onClick={() => { console.log("Confirmed!"); alert("Agendamento confirmado! 🎉"); }}
            >
              <Calendar className="w-4 h-4 mr-2" /> Confirmar Agendamento
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
};

export default TutorSchedule;
