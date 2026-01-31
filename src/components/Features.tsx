const features = [
  {
    number: "01",
    title: "Klarheit",
    description: "Reduktion auf das Wesentliche. Jedes Element hat seinen Zweck.",
  },
  {
    number: "02",
    title: "Präzision",
    description: "Durchdachte Details, die den Unterschied machen.",
  },
  {
    number: "03",
    title: "Wirkung",
    description: "Design, das nicht nur schön ist, sondern funktioniert.",
  },
];

const Features = () => {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-20 animate-fade-up">
          Unsere Prinzipien
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {features.map((feature, index) => (
            <div 
              key={feature.number} 
              className={`animate-fade-up-delay-${index + 1}`}
            >
              <span className="text-sm text-muted-foreground font-medium">
                {feature.number}
              </span>
              <h3 className="mt-4 text-2xl font-semibold">
                {feature.title}
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
