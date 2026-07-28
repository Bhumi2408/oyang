import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Boxes, Flame, Layers, Package, Printer, Scissors, Shapes, Stamp } from "lucide-react";

const functions = [
  {
    number: "01",
    icon: Scissors,
    color: "#135CA1",
    image: "/solutions/machine-functions/slitting.png",
    title: "Slitting",
    desc: "Cuts wide rolls of paper, nonwoven fabric or flexible film into narrower widths required for bag making and pouch production.",
    tags: ["Paper Rolls", "Nonwoven Fabric Rolls", "Flexible Film Rolls", "Self-Adhesive Labels"],
  },
  {
    number: "02",
    icon: Layers,
    color: "#809783",
    image: "/solutions/machine-functions/lamination.png",
    title: "Lamination",
    desc: "Bonds two or more layers of material together to improve barrier properties, appearance and strength — for nonwoven bag and flexible pouch lines.",
    tags: ["Nonwoven + PE Film", "PET / BOPP / AL / PE", "Eco Solvent-Free", "High Barrier Film"],
  },
  {
    number: "03",
    icon: Printer,
    color: "#BC0019",
    image: "/solutions/machine-functions/printing.png",
    title: "Printing",
    desc: "Rotogravure, flexographic and screen printing for packaging film, paper rolls and nonwoven fabric — matched to pouch, paper bag and nonwoven bag lines.",
    tags: ["Rotogravure (Gravure)", "Flexographic (Flexo)", "Screen Printing", "BOPP · PET · PE · Paper · Nonwoven"],
  },
  {
    number: "04",
    icon: Shapes,
    color: "#9D5FC8",
    image: "/solutions/machine-functions/die-cutting.png",
    title: "Die Cutting",
    desc: "Cuts packaging materials into precise shapes for paper bags, gift boxes and luxury packaging, with stripping, embossing and hot stamping combinations.",
    tags: ["Flatbed Die Cutting", "Stripping", "Paper · Paperboard · Corrugated", "Gift Box · Luxury Packaging"],
  },
  {
    number: "05",
    icon: Stamp,
    color: "#ff7a18",
    image: "/solutions/machine-functions/embossing.png",
    title: "Embossing",
    desc: "Creates raised or recessed surface patterns on packaging materials to enhance tactile feel and visual appearance for post-press finishing.",
    tags: ["Surface Embossing", "Paper · Paperboard", "Luxury Packaging", "Combined with Die Cutting"],
  },
  {
    number: "06",
    icon: Flame,
    color: "#C2790B",
    image: "/solutions/machine-functions/hot-stamping.png",
    title: "Hot Stamping",
    desc: "Applies metallic or holographic foil onto packaging surfaces for luxury paper bags, gift boxes and premium brand packaging.",
    tags: ["Hot Foil Stamping", "Gold · Silver · Holographic Foil", "Luxury Paper Bags", "Gift Boxes · Premium Packaging"],
  },
  {
    number: "07",
    icon: Package,
    color: "#2563EB",
    image: "/solutions/machine-functions/packing.png",
    title: "Packing",
    desc: "Automatically counts, bundles, bags and boxes finished bags at the end of the production line — for nonwoven, paper and formed product lines.",
    tags: ["Bag Bundling", "Auto Bagging", "Auto Boxing", "Nonwoven · Paper · Formed Products"],
  },
  {
    number: "08",
    icon: Boxes,
    color: "#0D5B63",
    image: "/solutions/machine-functions/palletizing.jpg",
    title: "Palletizing",
    desc: "Automatically stacks packed boxes or bundled bags onto pallets at the end of the line, reducing manual labor and improving logistics efficiency.",
    tags: ["Robotic Palletizing", "Auto Stacking", "Nonwoven Bag Lines", "Paper Bag Lines", "End-of-Line Automation"],
  },
];

export default function MachineFunctionsGrid() {
  return (
    <section className="py-14 sm:py-20 px-6 sm:px-10 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
  

        {/* Functions grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {functions.map((fn, index) => {
            const Icon = fn.icon;
            return (
              <div
                key={index}
                id={fn.title.toLowerCase().replace(/[^a-z]+/g, "-").replace(/(^-|-$)/g, "")}
                className="group rounded-[24px] overflow-hidden bg-white border border-slate-200 transition-all duration-300 hover:-translate-y-1.5 scroll-mt-24"
                style={{ boxShadow: `0px 8px 30px ${fn.color}1a` }}
              >
                {/* Image */}
                <div className="relative h-[160px] sm:h-[180px] overflow-hidden">
                  <Image
                    src={fn.image}
                    alt={fn.title}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(to top, ${fn.color}55, transparent 60%)` }}
                  />
                  <span className="absolute top-3 right-3 text-white/80 font-extrabold text-xs tracking-wider">
                    {fn.number}
                  </span>
                  <div
                    className="absolute bottom-3 left-3 w-10 h-10 rounded-xl flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: fn.color }}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5">
                  <h3 className="font-extrabold text-base sm:text-lg text-[#0f172a]">{fn.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-6">{fn.desc}</p>

                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {fn.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-semibold px-2 py-1 rounded-full"
                        style={{ backgroundColor: `${fn.color}14`, color: fn.color }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold group/link"
                    style={{ color: fn.color }}
                  >
                    Get Solution
                    <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}