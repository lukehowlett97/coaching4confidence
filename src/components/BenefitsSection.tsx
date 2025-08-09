export default function BenefitsSection() {
  const items = [
    { title: "Football Fun", text: "Games-first sessions kids love." },
    { title: "Making Friends", text: "Small groups, positive coaching." },
    { title: "Learning Skills", text: "Balance, coordination, teamwork." },
  ];
  return (
    <section className="mx-auto max-w-screen-sm px-4 py-6">
      <div className="grid gap-3">
        {items.map((i) => (
          <div
            key={i.title}
            className="rounded-2xl bg-slate-900 text-white px-4 py-4"
          >
            <h3 className="text-lg font-semibold">{i.title}</h3>
            <p className="mt-1 text-slate-200">{i.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
