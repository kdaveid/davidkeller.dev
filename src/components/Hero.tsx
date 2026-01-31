import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] tracking-tight animate-fade-up text-balance">
          Weniger ist
          <br />
          <span className="text-muted-foreground">mehr.</span>
        </h1>
        
        <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed animate-fade-up-delay-1">
          Klare Gedanken. Fokussiertes Design. Wir gestalten digitale Erlebnisse, die im Gedächtnis bleiben.
        </p>
        
        <div className="mt-12 flex flex-col sm:flex-row gap-4 animate-fade-up-delay-2">
          <Button variant="hero" size="xl">
            Projekt starten
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="heroOutline" size="xl">
            Mehr erfahren
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
