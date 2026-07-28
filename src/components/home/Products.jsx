import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Cog, Leaf, Package, Printer, ShoppingBag, Sparkles } from "lucide-react";

const products = [
  {
    icon: ShoppingBag,
    color: "#ff7a18",
    image: "/images/hero.jpg",
    title: "Paper Bag Machines",
    desc: "Roll-fed & sheet-fed paper bag lines with square, sharp and V-bottom options.",
  },
  {
    icon: Package,
    color: "#135CA1",
    image: "/images/product2.jpg",
    title: "Nonwoven Bag Machines",
    desc: "D-cut, W-cut and box bag making machines for supermarket, eco bag and takeaway use.",
  },
  {
    icon: Leaf,
    color: "#809783",
    image: "/images/product3.jpg",
    title: "Paper Forming Machines",
    desc: "Eco-friendly paper cutlery, plates and forming machines for a plastic-free future.",
  },
  {
    icon: Package,
    color: "#9D5FC8",
    image: "/images/product4.jpg",
    title: "Flexible Pouch Machines",
    desc: "For food, beverage, pharmaceutical, pet food and daily care packaging pouches.",
  },
  {
    icon: Printer,
    color: "#BC0019",
    image: "/images/product5.jpg",
    title: "Printing Machines",
    desc: "Rotogravure, flexographic and screen printing solutions for film, paper and nonwoven.",
  },
];

export default function Products() {
  return (
    <section className="bg-[#f2f5f866] py-16 sm:py-24 px-6 sm:px-10 lg:px-24 flex flex-col items-center text-center">
      <p className="px-3 py-2 rounded-full bg-secondary/20 text-sm font-semibold flex gap-1 items-center">
        <Cog className="w-5 h-5 animate-rotation" />
        Our Products
      </p>
      <h4 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-5 max-w-3xl leading-tight">
        Machines For Every{" "}
        <span className="bg-linear-to-br from-[#ff7a18] to-[#c23f0b] bg-clip-text text-transparent">
          Packaging Need
        </span>
      </h4>
      <p className="text-slate-600 mt-4 sm:mt-5 leading-6 sm:leading-7 text-base sm:text-lg max-w-2xl">
        From paper bags to flexible pouches and full-color printing — discover our complete
        portfolio of industrial machinery.
      </p>

      <div className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mt-8 sm:mt-10">
        {products.map((p, index) => {
          const Icon = p.icon;
          return (
            <div
              key={index}
              className="rounded-2xl overflow-hidden group transition-all duration-300 hover:-translate-y-1.5"
              style={{ boxShadow: `0px 5px 20px ${p.color}33` }}
            >
              <div className="h-[200px] sm:h-[250px] w-full overflow-hidden relative">
                <Image
                  src={p.image}
                  alt={p.title}
                  width={1920}
                  height={1080}
                  className="w-full h-full object-cover object-bottom transition-all duration-300 group-hover:scale-105"
                />
                <div className="absolute z-10 top-4 sm:top-5 left-4 sm:left-5">
                  <Icon
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-white p-2.5 sm:p-3 rounded-xl"
                    style={{ color: p.color }}
                  />
                </div>
                <div
                  className="absolute inset-0 transition-all duration-300"
                  style={{
                    background: `linear-gradient(to top, ${p.color}33, ${p.color}66)`,
                  }}
                />
              </div>
              <div className="bg-white p-5 sm:p-7 text-left">
                <p className="text-base sm:text-lg font-extrabold">{p.title}</p>
                <p className="mt-2 sm:mt-3 text-slate-600 text-sm">{p.desc}</p>
                <Link
                  href="/products"
                  className="group/link mt-4 sm:mt-5 font-bold text-sm inline-flex gap-2 items-center"
                  style={{ color: p.color }}
                >
                  View Details
                  <ArrowRight className="w-5 h-5 transition-all duration-300 group-hover/link:translate-x-1.5" />
                </Link>
              </div>
            </div>
          );
        })}

        {/* CTA card */}
        <div className="rounded-2xl bg-linear-to-br from-primary via-secondary/70 to-secondary p-6 sm:p-8 flex flex-col justify-between items-start text-left">
          <div>
            <Sparkles className="w-9 h-9 sm:w-10 sm:h-10 text-white" />
            <h4 className="text-white font-extrabold mt-4 text-xl sm:text-2xl">
              Need a Custom Machine?
            </h4>
            <p className="text-sm text-white mt-3">
              Tell us your production goals — we'll engineer the perfect solution.
            </p>
          </div>
          <Link
            href="/products"
            className="group/link mt-5 text-white font-bold flex gap-2 items-center"
          >
            Talk to an Engineer
            <ArrowRight className="w-5 h-5 transition-all duration-300 group-hover/link:translate-x-1.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}