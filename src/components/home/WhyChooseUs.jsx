import { Award, Cog, Globe, Leaf, ShieldCheck, Wrench } from "lucide-react";

const choose = [
  {
    icons: Award,
    title: "Certified Quality",
    description: "Chinese National High-Tech Enterprise status with CE, IAF and CNAS certifications across our product range.",
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
    title: "70+ R&D Technicians",
    description: "A dedicated in-house R&D team behind 280+ patents, including 80+ invention patents.",
  },
  {
    icons: Globe,
    title: "Global Export Network",
    description: "Serving customers across USA, EU, MENA, Africa, LATAM and Southeast Asia through OYANG and ALLWELL.",
  },
  {
    icons: Wrench,
    title: "Custom Engineering",
    description: "Tailor-made machine configurations based on your paper type, bag size and production requirements.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-24 flex flex-col items-center text-center">
      <h4 className="text-5xl font-extrabold">
        Why The World Chooses{" "}
        <span className="bg-linear-to-br from-[#ff7a18] to-[#c23f0b] bg-clip-text text-transparent">
          Ounuo
        </span>
      </h4>
      <p className="text-char mt-5 leading-7 text-lg">Six pillars that define every machine we build.</p>
      <div className="mt-10 grid grid-cols-3 gap-5">
        {choose.map((chooses, index) => {
          const Icon = chooses.icons;
          return (
            <div
              key={index}
              className="p-7 border border-gray-300 rounded-xl text-left transition-all duration-300 group hover:border-primary hover:shadow-[0px_0px_20px] shadow-primary/50 hover:bg-white"
            >
              <Icon className="p-3 rounded-xl w-12 h-12 text-white bg-linear-to-br from-primary via-secondary/60 to-secondary" />
              <p className="text-xl font-extrabold mt-3">{chooses.title}</p>
              <p className="text-char mt-3">{chooses.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}