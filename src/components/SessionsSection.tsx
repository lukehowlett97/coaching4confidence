export default function SessionsSection() {
  return (
    <section className="mx-auto max-w-screen-sm px-4 py-6">
      <div className="rounded-2xl bg-white p-4 shadow">
        <h2 className="text-xl font-bold">Sessions at a glance</h2>
        <ul className="mt-3 space-y-2 text-slate-700">
          <li><strong>When:</strong> Saturdays 10–11am</li>
          <li><strong>Where:</strong> Beaulieu Community Centre, Chelmsford</li>
          <li><strong>Ages:</strong> 5–7 years</li>
          <li><strong>Price:</strong> £X per session</li>
          <li><strong>First session:</strong> <span className="text-green-700 font-semibold">Free</span></li>
        </ul>
        <div className="mt-4 flex gap-3">
          {/* reuse same CTAs if you like */}
        </div>
      </div>
    </section>
  );
}
