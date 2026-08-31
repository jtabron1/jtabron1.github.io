import Reveal from "./Reveal.jsx";

/* All figures are real, sourced from the resume. */
const stats = [
  { value: "$78M", label: "product portfolio directed at Twilio" },
  { value: "44.4B", label: "annual transactions enabled" },
  { value: "53%", label: "YoY growth in revenue" },
  { value: "$10M+", label: "reduction in compute costs" },
  { value: "95%", label: "annual engineer retention" },
  { value: "38", label: "engineers and managers led" },
];

export default function Stats() {
  return (
    <section className="border-y border-line bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-8">
        <Reveal>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-6">
            {stats.map((s) => (
              <div key={s.label}>
                <dd className="font-mono text-3xl font-medium tracking-tight text-accent md:text-4xl">
                  {s.value}
                </dd>
                <dt className="mt-2 text-sm leading-snug text-muted">{s.label}</dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
