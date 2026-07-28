import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Factory } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="px-6 sm:px-10 lg:px-24 pt-10 pb-16 sm:pb-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-10">
        <div className="w-full min-w-0">
          <Image
            src="/images/oyangfactory.webp"
            alt="oyang factory"
            width={650}
            height={400}
            className="rounded-3xl shadow-[0px_0px_60px] shadow-primary/40 w-full h-auto object-cover"
          />
        </div>

        <div className="flex flex-col items-start w-full min-w-0">
          <p className="text-secondary font-semibold flex gap-1.5 items-center bg-secondary/20 px-3 py-2 text-sm rounded-full">
            <Factory className="w-4 h-4 sm:w-5 sm:h-5" />
            Who We Are
          </p>
          <h3 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Two Decades of{" "}
            <span className="bg-linear-to-br from-primary via-secondary to-secondary bg-clip-text text-transparent">
              Manufacturing Excellence
            </span>
          </h3>
          <p className="text-[#52637a] text-sm sm:text-base mt-4 sm:mt-5 leading-6 sm:leading-7">
            Founded in 2006 in Wenzhou — the manufacturing heartland of China —{" "}
            <strong className="text-black">Zhejiang Ounuo Machinery Co., Ltd.</strong>{" "}
            has grown into a trusted producer of packaging and printing
            machinery under the OUNUO, OYANG and ALLWELL brands. We specialize
            in eco-friendly equipment that helps the world replace plastic with
            sustainable alternatives.
          </p>
          <p className="text-[#52637a] text-sm sm:text-base mt-4 sm:mt-5 leading-6 sm:leading-7">
            We invested <strong className="text-black">$30 million USD</strong>{" "}
            in a high-standard, high-precision digital manufacturing center
            equipped with Mazak, Okuma and Schaudt machinery, achieving
            complete independent production of our core components. Our
            machines run in production lines from family-owned bag factories to
            multinational packaging plants worldwide.
          </p>
          <ul className="mt-5 space-y-2 w-full">
            <li className="flex gap-3 items-start">
              <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
              <span className="text-sm sm:text-base">Complete independent production of core components</span>
            </li>
            <li className="flex gap-3 items-start">
              <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
              <span className="text-sm sm:text-base">Chinese National High-Tech Enterprise, CE, IAF & CNAS certified</span>
            </li>
            <li className="flex gap-3 items-start">
              <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
              <span className="text-sm sm:text-base">80+ bilingual after-sales engineers, with overseas offices in India & Russia</span>
            </li>
            <li className="flex gap-3 items-start">
              <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
              <span className="text-sm sm:text-base">One-to-one dedicated after-sales support</span>
            </li>
          </ul>
          <button className="group mt-6 sm:mt-7 text-primary font-bold">
            <Link href="/about" className="flex gap-2 items-center">
              Learn Full Story{" "}
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 group-hover:translate-x-1.5" />
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}