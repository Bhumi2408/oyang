import { Boxes, Gift, Package, ShoppingBag, Truck } from "lucide-react";

const industries = [
  { icon: ShoppingBag, title: "Retail & Supermarket" },
  { icon: Package, title: "Food & Takeaway" },
  { icon: Truck, title: "E-commerce & Logistics" },
  { icon: Gift, title: "Gift & Luxury" },
];

export default function Industries() {
  return (
    <section className="py-16 sm:py-24 px-6 sm:px-10 lg:px-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 sm:px-5 py-2">
            <Boxes className="w-4 h-4 text-primary" />
            <span className="text-primary font-semibold text-sm">Solutions We Power</span>
          </div>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] leading-tight">
            From Local Workshops to Global
            <br className="hidden sm:block" /> Brands
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Our machines serve applications across food, retail, e-commerce and luxury packaging worldwide.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-8 sm:mt-10">
          {industries.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group rounded-[20px] sm:rounded-[24px] bg-white border border-gray-300 p-4 sm:p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0px_5px_20px] shadow-primary/30"
              >
                <Icon className="w-7 h-7 sm:w-8 sm:h-8 mx-auto mb-2 text-primary transition-all duration-300 group-hover:scale-110" />

                <h3 className="font-medium text-xs sm:text-sm">{item.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}