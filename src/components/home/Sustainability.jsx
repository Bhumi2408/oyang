import { Factory, Leaf, Recycle, ShieldCheck } from "lucide-react";

const impactPoints = [
  { icon: Recycle, value: "Eco-Friendly", label: "Paper & Nonwoven Machines" },
  { icon: Leaf, value: "Plastic-Free", label: "Packaging Solutions" },
  { icon: ShieldCheck, value: "ISO9001 & CE", label: "Certified Manufacturing" },
  { icon: Factory, value: "130,000 m²", label: "Sustainable Manufacturing Base" },
];

export default function Sustainability() {
  return (
    <section className="relative overflow-hidden py-14 sm:py-20 px-6 sm:px-10 lg:px-24 bg-linear-to-br from-[#0A4E54] via-[#0F6D73] to-[#16888E]">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-white/5 rounded-full blur-[100px] sm:blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#BFF4D3]/10 rounded-full blur-[100px] sm:blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 backdrop-blur-md px-4 sm:px-5 py-2">
            <Leaf className="w-4 h-4 text-[#D7FFF0]" />
            <span className="font-semibold text-sm text-white">Our Sustainability Commitment</span>
          </div>
        </div>

        {/* Heading */}
        <div className="max-w-5xl mx-auto text-center mt-5">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Building a Plastic-Free Future,
            <br className="hidden sm:block" />
            <span className="bg-linear-to-r from-[#E6FFF2] to-[#BFF4D3] bg-clip-text text-transparent">
              One Machine at a Time
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base lg:text-lg leading-6 sm:leading-9 text-white/80">
            From our 130,000 m² manufacturing base to our eco-friendly paper
            and nonwoven bag machines — sustainability shapes every machine
            we engineer, helping the world reduce its reliance on single-use
            plastic.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-10">
          {impactPoints.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group rounded-[24px] sm:rounded-[30px] border border-white/15 bg-white/10 backdrop-blur-md p-5 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-white/15"
              >
                <div className="flex justify-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#D7FFF0]" />
                  </div>
                </div>

                <h3 className="mt-4 text-xl sm:text-2xl font-black text-white">{item.value}</h3>

                <p className="mt-1 text-xs sm:text-sm font-semibold text-white/85">{item.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}