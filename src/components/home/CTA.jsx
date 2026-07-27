import Link from "next/link";
import { ArrowRight, FileText, MapPin, Phone, TimerReset } from "lucide-react";

export default function CTA() {
  return (
    <section className="pt-10 pb-20 px-24">
      {/* Top Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white border border-slate-200 rounded-xl p-6 flex items-center gap-5 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
          <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-primary via-secondary/80 to-secondary flex items-center justify-center">
            <Phone className="w-8 h-8 text-white" />
          </div>

          <div>
            <p className="text-xs font-bold tracking-wider text-slate-500 uppercase">Call / WhatsApp Sales</p>

            <p className="text-lg font-extrabold text-slate-900">+86 150 5897 6313</p>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-6 flex items-center gap-5 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
          <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-primary via-secondary/80 to-secondary flex items-center justify-center">
            <TimerReset className="w-8 h-8 text-white" />
          </div>

          <div>
            <p className="text-xs font-bold tracking-wider text-slate-500 uppercase">Response Time</p>

            <p className="text-lg font-extrabold text-slate-900">Within 24 Hours</p>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-6 flex items-center gap-5 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
          <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-primary via-secondary/80 to-secondary flex items-center justify-center">
            <MapPin className="w-8 h-8 text-white" />
          </div>

          <div>
            <p className="text-xs font-bold tracking-wider text-slate-500 uppercase">Visit Factory</p>

            <p className="text-lg font-extrabold text-slate-900">Pingyang County, Wenzhou, China</p>
          </div>
        </div>
      </div>

      {/* Main CTA */}
      <div className="relative overflow-hidden rounded-[40px] bg-linear-to-r from-[#0F172A] via-[#1E293B] to-[#0F4C5C]">
        {/* Glow */}
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-[#0F6F88]/20 blur-[150px] rounded-full" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 px-20 py-20">
          {/* Left */}
          <div className="max-w-2xl">
            <h2 className="text-3xl lg:text-5xl font-extrabold text-white">
              Ready to Power Your
              <br />
              Production Line?
            </h2>

            <p className="mt-5 text-lg leading-9 text-slate-300">
              Get a personalized quote and free consultation from our engineering
              team within 24 hours.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col sm:flex-row gap-5">
            <button className="group px-7 py-5 rounded-full bg-linear-to-r from-[#ED5114] to-[#ff7a18] text-white font-bold text-sm shadow-[0_15px_40px_rgba(237,81,20,0.35)] hover:scale-105 transition-all duration-300">
              <Link href="/contact">
                <span className="flex items-center gap-3 ">
                  <FileText className="w-5 h-5" />
                  Get Free Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-all duration-300" />
                </span>
              </Link>
            </button>

            <button className="px-7 py-5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white font-bold text-sm hover:bg-white/15 transition-all duration-300">
              Browse Catalog
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}