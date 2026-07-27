import { Factory, Leaf, Recycle, Sun } from "lucide-react";

const impactPoints = [
  { icon: Sun, value: "Solar-Powered", label: "Factory Facility" },
  { icon: Recycle, value: "100%", label: "Recyclable Material Machines" },
  { icon: Leaf, value: "Degradable", label: "Paper Cutlery Technology" },
  { icon: Factory, value: "130,000 m²", label: "Sustainable Manufacturing Base" },
];

export default function Sustainability() {
  return (
    <section className="relative overflow-hidden py-20 px-24 bg-linear-to-br from-[#0A4E54] via-[#0F6D73] to-[#16888E]">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#BFF4D3]/10 rounded-full blur-[140px]" />

      <div className="relative z-10">
        {/* Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 backdrop-blur-md px-5 py-2">
            <Leaf className="w-4 h-4 text-[#D7FFF0]" />
            <span className="font-semibold text-sm text-white">Our Sustainability Commitment</span>
          </div>
        </div>

        {/* Heading */}
        <div className="max-w-5xl mx-auto text-center mt-5">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white">
            Building a Plastic-Free Future,
            <br />
            <span className="bg-linear-to-r from-[#E6FFF2] to-[#BFF4D3] bg-clip-text text-transparent">
              One Machine at a Time
            </span>
          </h2>

          <p className="mt-4 text-lg leading-9 text-white/80">
            From our solar-powered facility to our paper cutlery machines — the
            first and only of their kind in China — sustainability shapes every
            machine we engineer.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">
          {impactPoints.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group rounded-[30px] border border-white/15 bg-white/10 backdrop-blur-md p-5 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-white/15"
              >
                <div className="flex justify-center">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-[#D7FFF0]" />
                  </div>
                </div>

                <h3 className="mt-4 text-2xl font-black text-white">{item.value}</h3>

                <p className="mt-1 text-sm font-semibold text-white/85">{item.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}