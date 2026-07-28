import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Box, FileText, Film, Layers, Shirt } from "lucide-react";

const materials = [
  {
    icon: FileText,
    color: "#ff7a18",
    image: "/solutions/materials/paper-rolls.png",
    title: "Paper Rolls",
    desc: "Kraft paper rolls, coated paper rolls, greaseproof paper and white paper rolls are the core raw materials for paper bag production, processed at 30–300 GSM.",
    chips: ["Kraft Paper (Brown & White)", "Coated Art Paper", "Greaseproof Paper", "30–300 GSM", "φ76mm Core", "FSC Certified Available"],
    produces: ["Twisted Handle Paper Bag", "Flat Handle Paper Bag", "SOS Square Bottom Paper Bag", "D-Cut Paper Bag", "V-Bottom Paper Bag"],
    cta: "Need to match a paper bag machine to your paper roll specification?",
  },
  {
    icon: Shirt,
    color: "#135CA1",
    image: "/solutions/materials/non-woven-fabric-rolls.png",
    title: "Non-woven Fabric Rolls",
    desc: "PP spunbond, laminated and RPET nonwoven fabric rolls are the core materials for reusable bag production, processed at 30–120 GSM in widths up to 1800mm.",
    chips: ["PP Spunbond Nonwoven", "Laminated Nonwoven (PE Coated)", "RPET Nonwoven", "30–120 GSM", "Width up to 1800mm"],
    produces: ["Insulated Box Bag", "Loop Handle Box Bag", "D-Cut Bag", "T-Shirt Bag", "Handle Bag", "Drawstring Bag", "D-Cut Box Bag", "Side Gusset Bag"],
    cta: "Need to match a nonwoven bag machine to your fabric roll specification?",
  },
  {
    icon: Film,
    color: "#9D5FC8",
    image: "/solutions/materials/flexible-film-rolls.png",
    title: "Flexible Film Rolls",
    desc: "BOPP, OPP, CPP, PET, PE and aluminum foil composite laminated film rolls are the core materials for flexible pouch production — single-layer and multi-layer structures for food, beverage, pharma and personal care packaging.",
    chips: ["BOPP · OPP · CPP", "PET · PE · NY", "Aluminum Foil Composite", "Retort Film", "High Barrier Film"],
    produces: ["Stand-Up Pouch", "Flat Bottom Pouch", "3-Side Seal Pouch", "Center Seal Pouch", "Center Seal Gusset Pouch", "Quad Seal Pouch"],
    cta: "Need to match a pouch making machine to your film structure and pouch type?",
  },
  {
    icon: Layers,
    color: "#BC0019",
    image: "/solutions/materials/paperboard.png",
    title: "Paperboard",
    desc: "Art board, coated board, grey board and duplex board (180–400 GSM) are used for premium sheet-fed paper bags, luxury gift packaging and post-press finishing.",
    chips: ["Art Board (Coated)", "Grey Board", "Duplex Board", "180–400 GSM", "Luxury · Gift · Premium"],
    produces: ["Non-Crease Sheet Fed Paper Bag", "Twisted Handle Paper Bag"],
    cta: "Need to match a machine to your paperboard specification for luxury or gift packaging?",
  },
  {
    icon: Box,
    color: "#809783",
    image: "/solutions/materials/corrugated-board.png",
    title: "Corrugated Board",
    desc: "Single-face, single-wall and double-wall corrugated board are used for outer carton packaging, shipping boxes and protective packaging.",
    chips: ["E Flute · B Flute · F Flute", "Single Wall · Double Wall", "Carton · Shipping Box", "Flute Laminating · Die Cutting"],
    produces: ["Shipping Carton Box", "Gift Box (Flute Laminated)", "Protective Packaging Insert", "Food Delivery Box", "Printed Corrugated Display"],
    cta: "Need flute laminating or die cutting machines for your corrugated board packaging line?",
  },
];

export default function MaterialsGrid() {
  return (
    <section className="py-14 sm:py-20 px-6 sm:px-10 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
      

        {/* Materials */}
        <div className="space-y-14 sm:space-y-20">
          {materials.map((mat, index) => {
            const Icon = mat.icon;
            const reversed = index % 2 === 1;
            const sectionId = mat.title.toLowerCase().replace(/[^a-z]+/g, "-").replace(/(^-|-$)/g, "");

            return (
              <div
                key={index}
                id={sectionId}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center scroll-mt-24 ${
                  reversed ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Image */}
                <div className="relative rounded-[24px] overflow-hidden h-[240px] sm:h-[320px] lg:h-[380px] shadow-lg">
                  <Image src={mat.image} alt={mat.title} fill className="object-cover" />
                  <div
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(to top, ${mat.color}40, transparent 50%)` }}
                  />
                </div>

                {/* Content */}
                <div className="min-w-0">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: mat.color }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="mt-4 text-2xl sm:text-3xl font-extrabold text-[#0f172a]">
                    {mat.title}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base text-slate-600 leading-6 sm:leading-7">
                    {mat.desc}
                  </p>

                  {/* Spec chips */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {mat.chips.map((chip, i) => (
                      <span
                        key={i}
                        className="text-xs font-semibold px-3 py-1.5 rounded-full"
                        style={{ backgroundColor: `${mat.color}14`, color: mat.color }}
                      >
                        {chip}
                      </span>
                    ))}
                  </div>

                  {/* Produces */}
                  <div className="mt-5">
                    <p className="text-xs font-bold tracking-wide uppercase text-slate-400 mb-2">
                      Produces
                    </p>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                      {mat.produces.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: mat.color }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="mt-5 text-sm text-slate-500 italic">{mat.cta}</p>

                  <Link
                    href="/contact"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold group/link"
                    style={{ color: mat.color }}
                  >
                    Ask OYANG Engineer
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