import { Star, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-restaurant.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 rounded-full px-4 py-2 mb-8 backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <Award className="w-4 h-4 text-gold" />
          <span className="text-gold text-sm font-medium">Vincitore 4 Ristoranti – Alessandro Borghese</span>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          Birraria <span className="text-gradient-gold">Ottone</span>
        </h1>

        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-4 font-light animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          Tradizione, sapori e storia nel cuore di Bassano del Grappa
        </p>

        <p className="text-white/60 text-sm mb-8 animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
          Dal 1865 — Cinque generazioni di passione culinaria
        </p>

        {/* Rating */}
        <div className="flex items-center justify-center gap-2 mb-10 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${i < 4 ? "text-gold fill-gold" : "text-gold/60 fill-gold/60"}`}
              />
            ))}
          </div>
          <span className="text-white/80 text-sm font-medium">4,6</span>
          <span className="text-white/50 text-sm">• oltre 1.700 recensioni</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "1s" }}>
          <a href="#prenotazioni">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 shadow-xl">
              Prenota un Tavolo
            </Button>
          </a>
          <a href="#menu">
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6">
              Scopri il Menu
            </Button>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
