import { ShieldCheck, BadgeCheck, HeartPulse, Shield } from "lucide-react";

const TrustSection = () => {
  const trust = [
    { icon: <ShieldCheck className="w-6 h-6" />, label: "Enhanced DBS checked" },
    { icon: <BadgeCheck className="w-6 h-6" />, label: "FA Qualified" },
    { icon: <HeartPulse className="w-6 h-6" />, label: "Paediatric First Aid trained" },
    { icon: <Shield className="w-6 h-6" />, label: "Public liability insured" },
  ];

  return (
    <section id="trust" className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">Trusted and safe coaching</h2>
          <p className="text-muted-foreground mt-2">We take safety and safeguarding seriously.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {trust.map((t, i) => (
            <div key={i} className="bg-white rounded-xl p-5 shadow-custom flex items-center gap-3">
              <div className="text-accent">{t.icon}</div>
              <span className="text-primary font-medium">{t.label}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Read our <a href="#safeguarding" className="underline story-link">Safeguarding Policy</a> in the footer.
        </p>
      </div>
    </section>
  );
};

export default TrustSection;
