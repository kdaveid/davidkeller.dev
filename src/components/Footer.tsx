const Footer = () => {
  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <span className="text-xl font-semibold">Studio</span>
          <p className="mt-2 text-sm text-muted-foreground">
            Minimalistisches Design
          </p>
        </div>
        
        <nav className="flex gap-8 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors duration-300">
            Projekte
          </a>
          <a href="#" className="hover:text-foreground transition-colors duration-300">
            Über uns
          </a>
          <a href="#" className="hover:text-foreground transition-colors duration-300">
            Kontakt
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
