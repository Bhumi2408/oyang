import { Boxes, Gift, Package, ShoppingBag, Truck } from "lucide-react";

const industries = [
  { icon: ShoppingBag, title: "Shopping Bags" },
  { icon: Truck, title: "Transport & Logistics" },
  { icon: Package, title: "Food Packaging" },
  { icon: Gift, title: "Gift Wrapping" },
];

export default function Industries() {
  return (
    <section className="py-24 px-24 bg-[#f8fafc]">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2">
          <Boxes className="w-4 h-4 text-primary" />
          <span className="text-primary font-semibold text-sm">Solutions We Power</span>
        </div>

        <h2 className="mt-5 text-5xl font-extrabold text-[#0f172a]">
          From Local Workshops to Global
          <br />
          Brands
        </h2>

        <p className="mt-3 text-lg text-char">
          Our machines are engineered for four core application categories worldwide.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
        {industries.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="group rounded-[24px] bg-white border border-gray-300 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0px_5px_20px] shadow-primary/30 group"
            >
              <Icon className="w-8 h-8 mx-auto mb-2 text-primary transition-all duration-300 group-hover:scale-110" />

              <h3 className="font-medium text-sm">{item.title}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}