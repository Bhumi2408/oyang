import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Cog, Leaf, Package, Printer, ShoppingBag, Sparkles } from "lucide-react";

export default function Products() {
  return (
    <section className="bg-[#f2f5f866] py-24 px-24 flex flex-col items-center text-center">
      <p className="px-3 py-2 rounded-full bg-secondary/20 text-sm font-semibold flex gap-1 items-center">
        <Cog className="w-5 h-5 animate-rotation" />Our Products
      </p>
      <h4 className="text-5xl font-extrabold mt-5 max-w-3xl">
        Machines For Every{" "}
        <span className="bg-linear-to-br from-[#ff7a18] to-[#c23f0b] bg-clip-text text-transparent">
          Packaging Need
        </span>
      </h4>
      <p className="text-char mt-5 leading-7 text-lg">
        From paper bags to flexible pouches and full-color printing — discover our complete <br /> portfolio of industrial machinery.
      </p>

      <div className="grid grid-cols-3 gap-7 items-center items-stretch justify-center mt-10">
        <div className="rounded-2xl overflow-hidden group transition-all duration-300 hover:-translate-y-1.5 shadow-[0px_5px_20px] shadow-[#ff7a18]/20">
          <div className="h-[250px] w-full overflow-hidden relative group">
            <Image
              src="/images/hero.jpg"
              alt="product"
              width={1920}
              height={1080}
              className="w-full h-full object-cover object-bottom relative transition-all duration-300 group-hover:scale-105"
            />
            <div className="absolute z-10 top-5 left-5">
              <ShoppingBag className="text-primary w-12 h-12 bg-white p-3 rounded-xl" />
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-[#ff7a18]/20 to-[#ff7a18]/40 group-hover:bg-linear-to-t group-hover:from-[#ff7a18]/40 group-hover:to-[#ff7a18]/60"></div>
          </div>
          <div className="bg-white p-7 text-left">
            <p className="text-lg font-extrabold">Paper Bag Machines</p>
            <p className="mt-3 text-char text-sm">Roll-fed & sheet-fed paper bag lines with square, sharp and V-bottom options.</p>
            <button className=" group mt-5 text-[#ff7a18] font-bold text-sm">
              <Link href="/products" className="flex gap-2 items-center">
                View Details <ArrowRight className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1.5" />
              </Link>
            </button>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden group transition-all duration-300 hover:-translate-y-1.5 shadow-[0px_5px_20px] shadow-[#135CA1]/20">
          <div className="h-[250px] w-full overflow-hidden relative group">
            <Image
              src="/images/product2.jpg"
              alt="product"
              width={1920}
              height={1080}
              className="w-full h-full object-cover object-bottom relative transition-all duration-300 group-hover:scale-105"
            />
            <div className="absolute z-10 top-5 left-5">
              <Package className="text-[#135CA1] w-12 h-12 bg-white p-3 rounded-xl" />
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-[#135CA1]/20 to-[#135CA1]/40 group-hover:bg-linear-to-t group-hover:from-[#135CA1]/40 group-hover:to-[#135CA1]/60"></div>
          </div>
          <div className="bg-white p-7 text-left">
            <p className="text-lg font-extrabold">Non Woven Bag Machines</p>
            <p className="mt-3 text-char text-sm">Our first product line since 2006 — D-cut, W-cut and box bag making machines.</p>
            <button className=" group mt-5 text-[#135CA1] font-bold text-sm">
              <Link href="/products" className="flex gap-2 items-center">
                View Details <ArrowRight className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1.5" />
              </Link>
            </button>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden group transition-all duration-300 hover:-translate-y-1.5 shadow-[0px_5px_20px] shadow-[#809783]/20">
          <div className="h-[250px] w-full overflow-hidden relative group">
            <Image
              src="/images/product3.jpg"
              alt="product"
              width={1920}
              height={1080}
              className="w-full h-full object-cover object-bottom relative transition-all duration-300 group-hover:scale-105"
            />
            <div className="absolute z-10 top-5 left-5">
              <Leaf className="text-[#809783] w-12 h-12 bg-white p-3 rounded-xl" />
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-[#809783]/20 to-[#809783]/40 group-hover:bg-linear-to-t group-hover:from-[#809783]/40 group-hover:to-[#809783]/60"></div>
          </div>
          <div className="bg-white p-7 text-left">
            <p className="text-lg font-extrabold">Paper Moulding Machines</p>
            <p className="mt-3 text-char text-sm">China's first & only manufacturer of degradable, recyclable paper cutlery lines.</p>
            <button className=" group mt-5 text-[#809783] font-bold text-sm">
              <Link href="/products" className="flex gap-2 items-center">
                View Details <ArrowRight className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1.5" />
              </Link>
            </button>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden group transition-all duration-300 hover:-translate-y-1.5 shadow-[0px_5px_20px] shadow-[#9D5FC8]/20">
          <div className="h-[250px] w-full overflow-hidden relative group">
            <Image
              src="/images/product4.jpg"
              alt="product"
              width={1920}
              height={1080}
              className="w-full h-full object-cover object-bottom relative transition-all duration-300 group-hover:scale-105"
            />
            <div className="absolute z-10 top-5 left-5">
              <Package className="text-[#9D5FC8] w-12 h-12 bg-white p-3 rounded-xl" />
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-[#9D5FC8]/20 to-[#9D5FC8]/40 group-hover:bg-linear-to-t group-hover:from-[#9D5FC8]/40 group-hover:to-[#9D5FC8]/60"></div>
          </div>
          <div className="bg-white p-7 text-left">
            <p className="text-lg font-extrabold">Pouch Making Machines</p>
            <p className="mt-3 text-char text-sm">For food, pharmaceutical and cosmetic packaging pouches.</p>
            <button className=" group mt-5 text-[#9D5FC8] font-bold text-sm">
              <Link href="/products" className="flex gap-2 items-center">
                View Details <ArrowRight className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1.5" />
              </Link>
            </button>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden group transition-all duration-300 hover:-translate-y-1.5 shadow-[0px_5px_20px] shadow-[#BC0019]/20">
          <div className="h-[250px] w-full overflow-hidden relative group">
            <Image
              src="/images/product5.jpg"
              alt="product"
              width={1920}
              height={1080}
              className="w-full h-full object-cover object-bottom relative transition-all duration-300 group-hover:scale-105"
            />
            <div className="absolute z-10 top-5 left-5">
              <Printer className="text-[#BC0019] w-12 h-12 bg-white p-3 rounded-xl" />
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-[#BC0019]/20 to-[#BC0019]/40 group-hover:bg-linear-to-t group-hover:from-[#BC0019]/40 group-hover:to-[#BC0019]/60"></div>
          </div>
          <div className="bg-white p-7 text-left">
            <p className="text-lg font-extrabold">Printing Machines</p>
            <p className="mt-3 text-char text-sm">Rotogravure, digital, flexographic and screen printing solutions.</p>
            <button className=" group mt-5 text-[#BC0019] font-bold text-sm">
              <Link href="/products" className="flex gap-2 items-center">
                View Details <ArrowRight className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1.5" />
              </Link>
            </button>
          </div>
        </div>

        <div className="rounded-2xl bg-linear-to-br from-primary via-secondary/70 to-secondary p-8 flex flex-col justify-between items-start text-left">
          <div>
            <Sparkles className="w-10 h-10 text-white" />
            <h4 className="text-white font-extrabold mt-4 text-2xl">Need a Custom Machine?</h4>
            <p className="text-sm text-white mt-3">Tell us your production goals — we'll engineer the perfect solution.</p>
          </div>
          <div>
            <button className=" group mt-5 text-white font-bold">
              <Link href="/products" className="flex gap-2 items-center">
                Talk to an Engineer <ArrowRight className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1.5" />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}