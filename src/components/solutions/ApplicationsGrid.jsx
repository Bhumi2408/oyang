import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Coffee,
  Droplets,
  Gift,
  Pill,
  PawPrint,
  Shirt,
  ShoppingCart,
  Truck,
  Utensils,
} from "lucide-react";

const applications = [
  {
    number: "01",
    icon: Utensils,
    color: "#ff7a18",
    image: "/solutions/application/take-away.png",
    title: "Food & Takeaway",
    desc: "For bakeries, quick-service restaurants, takeaway chains and food packaging suppliers — food-grade bag structures with reliable seal strength.",
    tags: ["V-Bottom Paper Bag", "SOS Square Bottom Paper Bag", "Nonwoven Box Bag", "Insulated Box Bag", "D-Cut Bag", "T-Shirt Bag"],
  },
  {
    number: "02",
    icon: Shirt,
    color: "#135CA1",
    image: "/solutions/application/festival.png",
    title: "Fashion & Apparel",
    desc: "Strong, attractive shopping bags for apparel brands and fashion retailers — clean crease-free finish and premium handle options.",
    tags: ["Twisted Handle Paper Bag", "Flat Handle Paper Bag", "Non-Crease Sheet Fed Paper Bag", "Nonwoven Box Bag", "Loop Handle Box Bag"],
  },
  {
    number: "03",
    icon: Coffee,
    color: "#809783",
    image: "/solutions/application/Beverages.png",
    title: "Beverages",
    desc: "Laminated film pouches for coffee, tea powder and drink products — stand-up, flat bottom and 3-side seal structures.",
    tags: ["Stand-Up Pouch", "Flat Bottom Pouch", "3-Side Seal Pouch", "Stand-Up Zipper Pouch", "Center Seal Gusset Pouch"],
  },
  {
    number: "04",
    icon: ShoppingCart,
    color: "#9D5FC8",
    image: "/solutions/application/supermarket.png",
    title: "Retail & Supermarket",
    desc: "Cost-efficient shopping bag production with stable sealing strength for supermarkets and retail chains.",
    tags: ["T-Shirt Bag", "D-Cut Bag", "Drawstring Bag", "Twisted Handle Paper Bag", "SOS Square Bottom Paper Bag", "Nonwoven Box Bag"],
  },
  {
    number: "05",
    icon: Gift,
    color: "#BC0019",
    image: "/solutions/application/gift.png",
    title: "Gift & Luxury",
    desc: "Stable bag forming with clean crease-free appearance and premium material compatibility for gift and luxury packaging.",
    tags: ["Non-Crease Sheet Fed Paper Bag", "Twisted Handle Paper Bag", "Flat Handle Paper Bag", "Loop Handle Box Bag", "Flip Handle Box Bag"],
  },
  {
    number: "06",
    icon: Truck,
    color: "#0D5B63",
    image: "/solutions/application/logistics.png",
    title: "E-commerce & Logistics",
    desc: "Efficient production of carrier bags, nonwoven courier bags, drawstring bags and reusable delivery bags.",
    tags: ["D-Cut Bag", "Drawstring Bag", "T-Shirt Bag", "Handle Bag", "SOS Square Bottom Paper Bag", "Twisted Handle Paper Bag"],
  },
  {
    number: "07",
    icon: Droplets,
    color: "#E091A3",
    image: "/solutions/application/personal-care.png",
    title: "Personal Care & Household",
    desc: "For facial masks, shampoo refills, detergent packs and household product pouches — laminated films with consistent sealing quality.",
    tags: ["3-Side Seal Pouch", "Stand-Up Pouch", "Stand-Up Zipper Pouch", "Center Seal Pouch", "Quad Seal Pouch"],
  },
  {
    number: "08",
    icon: Pill,
    color: "#2563EB",
    image: "/solutions/application/pharma.jpg",
    title: "Pharmaceutical & Healthcare",
    desc: "Consistent pouch forming and stable sealing for 3-side seal pouches, sterile bags and aluminum foil composite bags.",
    tags: ["3-Side Seal Pouch", "Quad Seal Pouch", "Center Seal Pouch", "Flat Bottom Pouch", "Aluminum Foil Composite Bag"],
  },
  {
    number: "09",
    icon: PawPrint,
    color: "#C2790B",
    image: "/solutions/application/pet-food.png",
    title: "Pet Food & Supplies",
    desc: "Strong shelf display performance, resealable structures and durable laminated films for pet food packaging.",
    tags: ["Flat Bottom Pouch", "Stand-Up Zipper Pouch", "Stand-Up Pouch", "Quad Seal Pouch", "Center Seal Gusset Pouch"],
  },
];

export default function ApplicationsGrid() {
  return (
    <section className="py-14 sm:py-20 px-6 sm:px-10 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
    

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {applications.map((app, index) => {
            const Icon = app.icon;
            return (
              <div
                key={index}
                id={app.title.toLowerCase().replace(/[^a-z]+/g, "-").replace(/(^-|-$)/g, "")}
                className="group rounded-[24px] overflow-hidden bg-white border border-slate-200 transition-all duration-300 hover:-translate-y-1.5 scroll-mt-24"
                style={{ boxShadow: `0px 8px 30px ${app.color}1a` }}
              >
                {/* Image */}
                <div className="relative h-[210px] sm:h-[210px] overflow-hidden">
                  <Image
                    src={app.image}
                    alt={app.title}
                    fill
                    className="object-contain transition-all duration-500 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(to top, ${app.color}55, transparent 60%)` }}
                  />

                  {/* Number badge */}
                  <span className="absolute top-4 right-4 text-white/80 font-extrabold text-sm tracking-wider">
                    {app.number}
                  </span>

                  {/* Icon badge */}
                  <div
                    className="absolute bottom-4 left-4 w-11 h-11 rounded-xl flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: app.color }}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <h3 className="font-extrabold text-lg text-[#0f172a]">{app.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-6">{app.desc}</p>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {app.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
                        style={{ backgroundColor: `${app.color}14`, color: app.color }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold group/link"
                    style={{ color: app.color }}
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