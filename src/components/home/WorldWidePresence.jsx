import { Globe2 } from "lucide-react";

const countries = [
  "China",
  "Saudi Arabia",
  "Colombia",
  "Brazil",
  "Germany",
  "Thailand",
  "USA",
  "India",
];

export default function WorldwidePresence() {
  return (
    <section className="relative overflow-hidden py-20 px-24 bg-linear-to-br from-[#111827] via-[#1F2937] to-[#374151]">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#6366F1]/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#A855F7]/20 rounded-full blur-[140px]" />

      <div className="relative z-10">
        {/* Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 backdrop-blur-md px-4 py-2">
            <Globe2 className="w-4 h-4 text-[#C4B5FD]" />
            <span className="font-semibold text-white text-sm">Global Footprint</span>
          </div>
        </div>

        {/* Heading */}
        <div className="max-w-5xl mx-auto text-center mt-5">
          <h2 className="text-5xl font-extrabold text-white">
            Trusted Across{" "}
            <span className="bg-linear-to-r from-[#C4B5FD] to-[#E9D5FF] bg-clip-text text-transparent">
              USA, EU, MENA, Africa, LATAM & SEA
            </span>
          </h2>

          <p className="mt-4 text-lg text-white/75">
            Our machines power production lines across major manufacturing hubs worldwide,
            represented at trade shows from Bangkok to São Paulo.
          </p>
        </div>

        {/* Countries */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-10">
          {countries.map((country, index) => (
            <div
              key={index}
              className="group rounded-[22px] border border-white/10 bg-white/8 backdrop-blur-md p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
            >
              <h3 className="font-semibold text-white">{country}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}