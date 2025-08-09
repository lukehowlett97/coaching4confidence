import { Activity, Users as UsersIcon, ThumbsUp } from "lucide-react";

const BenefitsSection = () => {
  const items = [
    {
      icon: <ThumbsUp className="w-6 h-6 text-accent" />,
      title: "Confidence building",
      text: "Praise, encouragement, and positive feedback in every session.",
    },
    {
      icon: <Activity className="w-6 h-6 text-accent" />,
      title: "Movement & coordination",
      text: "Fun drills designed specifically for young players.",
    },
    {
      icon: <UsersIcon className="w-6 h-6 text-accent" />,
      title: "Social skills",
      text: "Make friends and learn teamwork in a supportive environment.",
    },
  ];

  return (
    <section id="benefits" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">Benefits for your child</h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {items.map((item, i) => (
            <article key={i} className="bg-white rounded-xl shadow-custom p-6 hover-lift">
              <div className="flex items-center gap-3 mb-3">
                {item.icon}
                <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
              </div>
              <p className="text-muted-foreground">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
