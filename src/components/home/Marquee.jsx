import { Loader } from "lucide-react";

const items = [
  "NONWOVEN LINES",
  "CUTLERY TECH",
  "POUCH SOLUTIONS",
  "PRINTING PRESS",
  "WORLDWIDE EXPORT",
];

export default function Marquee() {
  return (
    <section className="bg-linear-to-r from-primary via-secondary/60 to-secondary py-4 overflow-hidden">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-16 px-8 text-white font-bold tracking-wider text-xl"
          >
            <span>{item}</span>
            <span className="text-white text-2xl">
              <Loader />
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}