import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Factory } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="flex items-center justify-between text-left px-24 pt-10 gap-10 pb-20">
      <div>
        <Image
          src="/images/oyangfactory.webp"
          alt="oyang factory"
          width={650}
          height={400}
          className="rounded-3xl shadow-[0px_0px_60px] shadow-primary/40"
        />
      </div>
      <div className="flex flex-col items-start w-[50%]">
        <p className="text-secondary font-semibold flex gap-1 items-center bg-secondary/20 px-3 py-2 text-sm rounded-full">
          <Factory />Who We Are
        </p>
        <h3 className="mt-4 text-5xl font-extrabold">
          Two Decades of{" "}
          <span className="bg-linear-to-br from-primary via-secondary to-secondary bg-clip-text text-transparent">
            Manufacturing Excellence
          </span>
        </h3>
        <p className="text-[#52637a] mt-5 leading-7">
          Founded in 2006 in Wenzhou — the manufacturing heartland of China —{" "}
          <strong className="text-black">Zhejiang Ounuo Machinery Co., Ltd.</strong>{" "}
          has grown into a trusted producer of packaging and printing
          machinery under the OUNUO, OYANG and ALLWELL brands. We specialize
          in eco-friendly equipment that helps the world replace plastic with
          sustainable alternatives.
        </p>
        <p className="text-[#52637a] mt-5 leading-7">
          We invested <strong className="text-black">$30 million USD</strong>{" "}
          in a high-standard, high-precision digital manufacturing center
          equipped with Mazak, Okuma and Schaudt machinery, achieving
          complete independent production of our core components. Our
          machines run in production lines from family-owned bag factories to
          multinational packaging plants worldwide.
        </p>
        <ul className="mt-5">
          <li className="flex gap-3 items-center">
            <CheckCircle className="w-5 h-5 text-secondary" />Complete independent production of core components
          </li>
          <li className="flex gap-3 items-center mt-2">
            <CheckCircle className="w-5 h-5 text-secondary" />Chinese National High-Tech Enterprise, CE, IAF & CNAS certified
          </li>
          <li className="flex gap-3 items-center mt-2">
            <CheckCircle className="w-5 h-5 text-secondary" />Customer, inline and spare-parts service departments, 50+ staff
          </li>
          <li className="flex gap-3 items-center mt-2">
            <CheckCircle className="w-5 h-5 text-secondary" />One-to-one dedicated after-sales support
          </li>
        </ul>
        <button className=" group mt-7 text-primary font-bold">
          <Link href="/about" className="flex gap-2 items-center">
            Learn Full Story{" "}
            <ArrowRight className="w-6 h-6 transition-all duration-300 group-hover:translate-x-1.5" />
          </Link>
        </button>
      </div>
    </section>
  );
}