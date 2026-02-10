const Footer = () => {
  return (
    <footer className="bg-foreground text-background/70 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-2xl font-bold text-background mb-3">
              Birraria <span className="text-gold">Ottone</span>
            </h3>
            <p className="text-sm leading-relaxed">
              Dal 1865, tradizione e innovazione culinaria nel cuore di Bassano del Grappa.
            </p>
          </div>
          <div>
            <h4 className="font-serif text-lg font-semibold text-background mb-3">Link Rapidi</h4>
            <div className="flex flex-col gap-2 text-sm">
              <a href="#storia" className="hover:text-gold transition-colors">La Nostra Storia</a>
              <a href="#menu" className="hover:text-gold transition-colors">Menu</a>
              <a href="#prenotazioni" className="hover:text-gold transition-colors">Prenotazioni</a>
              <a href="#contatti" className="hover:text-gold transition-colors">Contatti</a>
            </div>
          </div>
          <div>
            <h4 className="font-serif text-lg font-semibold text-background mb-3">Contattaci</h4>
            <div className="flex flex-col gap-2 text-sm">
              <p>Via Giacomo Matteotti 48/50</p>
              <p>36061 Bassano del Grappa (VI)</p>
              <a href="tel:+390424522206" className="hover:text-gold transition-colors">+39 0424 522 206</a>
              <a href="mailto:info@birrariaottone.it" className="hover:text-gold transition-colors">info@birrariaottone.it</a>
            </div>
          </div>
        </div>
        <div className="border-t border-background/10 pt-6 text-center text-xs text-background/40">
          <p>© {new Date().getFullYear()} Birraria Ottone. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
