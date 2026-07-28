import { Globe2 } from "lucide-react";

const countries = [
  "USA",
  "Brazil",
  "Germany",
  "Saudi Arabia",
  "South Africa",
  "Thailand",
  "India",
  "Russia",
];

export default function WorldwidePresence() {
  return (
    <section className="relative overflow-hidden py-14 sm:py-20 px-6 sm:px-10 lg:px-24 bg-linear-to-br from-[#111827] via-[#1F2937] to-[#374151]">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-[#6366F1]/20 rounded-full blur-[100px] sm:blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[260px] sm:w-[500px] h-[260px] sm:h-[500px] bg-[#A855F7]/20 rounded-full blur-[100px] sm:blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 backdrop-blur-md px-4 py-2">
            <Globe2 className="w-4 h-4 text-[#C4B5FD]" />
            <span className="font-semibold text-white text-sm">Global Footprint</span>
          </div>
        </div>

        {/* Heading */}
        <div className="max-w-5xl mx-auto text-center mt-5">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Trusted Across{" "}
            <span className="bg-linear-to-r from-[#C4B5FD] to-[#E9D5FF] bg-clip-text text-transparent">
              North America, Europe, MENA, Africa, LATAM, South & Southeast Asia
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base lg:text-lg text-white/75 leading-6 sm:leading-8">
            Our machines power production lines across 8 global regions, backed
            by 80+ bilingual engineers and dedicated regional support teams.
          </p>
        </div>

        {/* Countries */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5 mt-8 sm:mt-10">
          {countries.map((country, index) => (
            <div
              key={index}
              className="group rounded-[18px] sm:rounded-[22px] border border-white/10 bg-white/8 backdrop-blur-md p-4 sm:p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
            >
              <h3 className="font-semibold text-white text-sm sm:text-base">{country}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}