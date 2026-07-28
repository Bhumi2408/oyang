import { Loader } from "lucide-react";

const items = [
  "NONWOVEN BAG MAKING",
  "PAPER BAG MAKING",
  "FLEXIBLE POUCH SOLUTIONS",
  "ROTOGRAVURE PRINTING",
  "WORLDWIDE EXPORT",
];

export default function Marquee() {
  return (
    <section className="bg-linear-to-r from-primary via-secondary/60 to-secondary py-3 sm:py-4 overflow-hidden">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-8 sm:gap-16 px-4 sm:px-8 text-white font-bold tracking-wider text-sm sm:text-xl"
          >
            <span>{item}</span>
            <span className="text-white text-lg sm:text-2xl">
              <Loader className="w-4 h-4 sm:w-6 sm:h-6" />
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}