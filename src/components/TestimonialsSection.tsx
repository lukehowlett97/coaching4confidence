const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "Oliver is brilliant with the kids — my son came out beaming with confidence after just one session.",
      name: "Sarah, Chelmsford",
    },
    {
      quote:
        "Lovely atmosphere, small groups and really positive coaching. We’ve already recommended to friends!",
      name: "James, Beaulieu",
    },
    {
      quote:
        "Perfect for younger ones — fun games, friendly coach, and my daughter can’t wait for Saturdays.",
      name: "Emma, Springfield",
    },
  ];

  return (
    <section id="testimonials" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">What parents say</h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((t, i) => (
            <blockquote key={i} className="bg-white rounded-xl shadow-custom p-6">
              <p className="text-primary text-base md:text-lg">“{t.quote}”</p>
              <footer className="mt-3 text-sm text-muted-foreground">— {t.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
