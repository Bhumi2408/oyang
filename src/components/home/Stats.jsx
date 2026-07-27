"use client";
import CountUp from "react-countup";

const stats = [
  { number: 20, suffix: "+", label: "YEARS EXPERIENCE" },
  { number: 130000, suffix: " m²", label: "MANUFACTURING FACILITY", format: true },
  { number: 280, suffix: "+", label: "PATENTS GRANTED" },
  { number: 70, suffix: "+", label: "R&D TECHNICIANS" },
];

export default function Stats() {
  return (
    <section className="py-20 px-24">
      <div className="container mx-auto">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-[0px_15px_40px] shadow-primary/20 transition-all duration-300 hover:scale-105"
            >
              <h3 className="text-4xl font-bold bg-linear-to-br from-primary via-secondary to-secondary bg-clip-text text-transparent">
                <CountUp
                  end={item.number}
                  duration={2.5}
                  separator={item.format ? "," : ""}
                  enableScrollSpy
                  scrollSpyOnce
                />
                {item.suffix}
              </h3>

              <p className="mt-1 text-sm font-semibold tracking-[0.15em] text-slate-600">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}