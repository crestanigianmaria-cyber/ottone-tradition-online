import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Clock, CalendarDays, Users, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const ReservationSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", email: "", date: "", time: "", guests: "2", notes: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Richiesta inviata!",
      description: "Ti contatteremo al più presto per confermare la prenotazione.",
    });
    setForm({ name: "", phone: "", email: "", date: "", time: "", guests: "2", notes: "" });
  };

  const update = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  return (
    <section id="prenotazioni" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-gold text-sm font-medium tracking-widest uppercase">Prenotazioni</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-3 text-foreground">
            Prenota il Tuo Tavolo
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome completo</Label>
                <Input id="name" value={form.name} onChange={(e) => update("name", e.target.value)} required placeholder="Mario Rossi" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Telefono</Label>
                <Input id="phone" type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} required placeholder="+39 ..." />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="mario@email.com" />
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date">Data</Label>
                <Input id="date" type="date" value={form.date} onChange={(e) => update("date", e.target.value)} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="time">Ora</Label>
                <Input id="time" type="time" value={form.time} onChange={(e) => update("time", e.target.value)} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="guests">Ospiti</Label>
                <Input id="guests" type="number" min="1" max="20" value={form.guests} onChange={(e) => update("guests", e.target.value)} required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="notes">Note</Label>
              <Textarea id="notes" value={form.notes} onChange={(e) => update("notes", e.target.value)} placeholder="Allergie, occasioni speciali, richieste..." rows={3} />
            </div>
            <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6">
              Invia Richiesta di Prenotazione
            </Button>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-serif text-2xl font-semibold mb-4 text-foreground">Oppure chiamaci</h3>
              <a href="tel:+390424522206" className="inline-flex items-center gap-3 text-2xl font-serif font-bold text-primary hover:text-primary/80 transition-colors">
                <Phone className="w-6 h-6" />
                +39 0424 522 206
              </a>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-semibold text-foreground">Orari di Apertura</h3>
              <div className="space-y-3">
                {[
                  { day: "Martedì – Sabato", hours: "12:00 – 14:30 / 19:00 – 22:30" },
                  { day: "Domenica", hours: "12:00 – 14:30" },
                  { day: "Lunedì", hours: "Chiuso" },
                ].map((item) => (
                  <div key={item.day} className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-gold flex-shrink-0" />
                    <span className="font-medium text-foreground">{item.day}:</span>
                    <span className="text-muted-foreground">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Per gruppi superiori a 8 persone o eventi privati, vi preghiamo di contattarci telefonicamente
                  per organizzare al meglio la vostra esperienza.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
