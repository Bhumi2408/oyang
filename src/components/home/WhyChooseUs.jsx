import { Award, Cog, Globe, Leaf, ShieldCheck, Wrench } from "lucide-react";

const choose = [
  {
    icons: Award,
    title: "Certified Quality",
    description: "Chinese National High-Tech Enterprise status with ISO9001, CE, IAF and CNAS certifications across our product range.",
  },
  {
    icons: Cog,
    title: "In-House Precision Manufacturing",
    description: "Complete independent production of core components using Mazak, Okuma and Schaudt precision equipment.",
  },
  {
    icons: Leaf,
    title: "Eco-Friendly Tech",
    description: "Engineered for biodegradable materials — paper, kraft, nonwoven and compostables.",
  },
  {
    icons: ShieldCheck,
    title: "200+ Engineers",
    description: "A dedicated in-house R&D team averaging 30+ years of experience, behind 280+ patents including 80+ invention patents.",
  },
  {
    icons: Globe,
    title: "Global Export Network",
    description: "Serving customers across North America, Latin America, Europe, MENA, Africa, Southeast Asia, South Asia and Russia & CIS through OYANG and ALLWELL.",
  },
  {
    icons: Wrench,
    title: "Custom Engineering",
    description: "Tailor-made machine configurations based on your paper type, bag size and production requirements.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-14 sm:py-20 px-6 sm:px-10 lg:px-24 flex flex-col items-center text-center">
      <div className="max-w-7xl w-full flex flex-col items-center">
        <h4 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
          Why The World Chooses{" "}
          <span className="bg-linear-to-br from-[#ff7a18] to-[#c23f0b] bg-clip-text text-transparent">
            Ounuo
          </span>
        </h4>
        <p className="text-slate-600 mt-4 sm:mt-5 leading-6 sm:leading-7 text-base sm:text-lg">
          Six pillars that define every machine we build.
        </p>
        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 w-full">
          {choose.map((chooses, index) => {
            const Icon = chooses.icons;
            return (
              <div
                key={index}
                className="p-5 sm:p-7 border border-gray-300 rounded-xl text-left transition-all duration-300 group hover:border-primary hover:shadow-[0px_0px_20px] shadow-primary/50 hover:bg-white"
              >
                <Icon className="p-2.5 sm:p-3 rounded-xl w-10 h-10 sm:w-12 sm:h-12 text-white bg-linear-to-br from-primary via-secondary/60 to-secondary" />
                <p className="text-lg sm:text-xl font-extrabold mt-3">{chooses.title}</p>
                <p className="text-slate-600 mt-2 sm:mt-3 text-sm sm:text-base">
                  {chooses.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}