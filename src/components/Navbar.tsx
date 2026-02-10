import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#storia", label: "La Nostra Storia" },
  { href: "#menu", label: "Menu" },
  { href: "#galleria", label: "Galleria" },
  { href: "#recensioni", label: "Recensioni" },
  { href: "#prenotazioni", label: "Prenotazioni" },
  { href: "#contatti", label: "Contatti" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-wood/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#home" className="font-serif text-2xl font-bold text-primary-foreground tracking-wider">
          Birraria <span className="text-gold">Ottone</span>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-primary-foreground/80 hover:text-gold text-sm font-medium tracking-wide transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a href="tel:+390424522206">
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
              <Phone className="w-3.5 h-3.5" />
              Prenota
            </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-wood/98 backdrop-blur-md border-t border-gold/20 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-primary-foreground/80 hover:text-gold py-2 text-sm font-medium tracking-wide transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="tel:+390424522206">
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full gap-2 mt-2">
                <Phone className="w-3.5 h-3.5" />
                Prenota Ora
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
