import { useState } from "react";
import { motion } from "framer-motion";
import { PawPrint, Plus, Syringe, FileText, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mockPets, mockVaccines, mockAppointments } from "@/data/mockData";
import type { Pet } from "@/types";

const serviceLabels: Record<string, string> = {
  consultation: "Consulta", vaccination: "Vacinação", surgery: "Cirurgia",
  grooming: "Banho e Tosa", emergency: "Emergência", followup: "Retorno",
};

const TutorPets = () => {
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);

  return (
    <div className="max-w-5xl">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-display font-bold text-foreground">Meus Pets</h1>
            <p className="text-muted-foreground">Gerencie os perfis e históricos dos seus animais.</p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Plus className="w-4 h-4 mr-2" /> Adicionar Pet
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="font-display">Cadastrar novo pet</DialogTitle>
              </DialogHeader>
              <form className="space-y-4 mt-4" onSubmit={(e) => { e.preventDefault(); console.log("Add pet"); }}>
                <div className="space-y-2">
                  <Label>Nome</Label>
                  <Input placeholder="Nome do pet" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Espécie</Label>
                    <Select>
                      <SelectTrigger><SelectValue placeholder="Selecione" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dog">Cachorro</SelectItem>
                        <SelectItem value="cat">Gato</SelectItem>
                        <SelectItem value="bird">Pássaro</SelectItem>
                        <SelectItem value="other">Outro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Sexo</Label>
                    <Select>
                      <SelectTrigger><SelectValue placeholder="Selecione" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Macho</SelectItem>
                        <SelectItem value="female">Fêmea</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Raça</Label>
                  <Input placeholder="Raça" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Data de nascimento</Label>
                    <Input type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label>Peso (kg)</Label>
                    <Input type="number" step="0.1" placeholder="0.0" />
                  </div>
                </div>
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Cadastrar</Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </motion.div>

      {/* Pet grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {mockPets.map((pet, i) => (
          <motion.div key={pet.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
            <Card
              className={`p-6 cursor-pointer transition-all hover:shadow-md ${selectedPet?.id === pet.id ? "ring-2 ring-primary" : ""}`}
              onClick={() => setSelectedPet(pet)}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <PawPrint className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground text-lg">{pet.name}</h3>
                <p className="text-muted-foreground text-sm">{pet.breed}</p>
                <div className="flex items-center gap-2 mt-2">
                  <Badge variant="secondary" className="text-xs">
                    {pet.species === "dog" ? "🐕 Cachorro" : pet.species === "cat" ? "🐈 Gato" : "🐾 Outro"}
                  </Badge>
                  <Badge variant="secondary" className="text-xs">{pet.weight}kg</Badge>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Pet details */}
      {selectedPet && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <Card className="p-6">
            <h2 className="font-display font-semibold text-xl text-foreground mb-4">
              {selectedPet.name} — Detalhes
            </h2>
            <Tabs defaultValue="history">
              <TabsList>
                <TabsTrigger value="history" className="gap-2"><Calendar className="w-4 h-4" /> Histórico</TabsTrigger>
                <TabsTrigger value="vaccines" className="gap-2"><Syringe className="w-4 h-4" /> Vacinas</TabsTrigger>
                <TabsTrigger value="docs" className="gap-2"><FileText className="w-4 h-4" /> Documentos</TabsTrigger>
              </TabsList>
              <TabsContent value="history" className="mt-4">
                <div className="space-y-3">
                  {mockAppointments.filter((a) => a.petId === selectedPet.id).map((apt) => (
                    <div key={apt.id} className="flex items-center justify-between p-3 rounded-lg bg-secondary">
                      <div>
                        <p className="text-sm font-medium text-foreground">{serviceLabels[apt.service]}</p>
                        <p className="text-xs text-muted-foreground">{new Date(apt.date).toLocaleDateString("pt-BR")} • {apt.vetName || "—"}</p>
                      </div>
                      <Badge variant={apt.status === "completed" ? "secondary" : "default"} className="text-xs">
                        {apt.status === "completed" ? "Concluída" : apt.status === "confirmed" ? "Confirmada" : "Agendada"}
                      </Badge>
                    </div>
                  ))}
                  {mockAppointments.filter((a) => a.petId === selectedPet.id).length === 0 && (
                    <p className="text-muted-foreground text-sm">Nenhum atendimento registrado.</p>
                  )}
                </div>
              </TabsContent>
              <TabsContent value="vaccines" className="mt-4">
                <div className="space-y-3">
                  {mockVaccines.filter((v) => v.petId === selectedPet.id).map((vac) => {
                    const isOverdue = vac.nextDate && new Date(vac.nextDate) < new Date();
                    return (
                      <div key={vac.id} className="flex items-center justify-between p-3 rounded-lg bg-secondary">
                        <div>
                          <p className="text-sm font-medium text-foreground">{vac.name}</p>
                          <p className="text-xs text-muted-foreground">Aplicada em {new Date(vac.date).toLocaleDateString("pt-BR")} • {vac.vetName}</p>
                        </div>
                        {vac.nextDate && (
                          <Badge className={isOverdue ? "bg-destructive/10 text-destructive" : "bg-primary/10 text-primary"}>
                            {isOverdue ? "Vencida" : `Próx: ${new Date(vac.nextDate).toLocaleDateString("pt-BR")}`}
                          </Badge>
                        )}
                      </div>
                    );
                  })}
                </div>
              </TabsContent>
              <TabsContent value="docs" className="mt-4">
                <p className="text-muted-foreground text-sm">Nenhum documento anexado.</p>
              </TabsContent>
            </Tabs>
          </Card>
        </motion.div>
      )}
    </div>
  );
};

export default TutorPets;
