import Link from "next/link";
import { ArrowRight, FileText, MapPin, Phone, TimerReset } from "lucide-react";

export default function CTA() {
  return (
    <section className="pt-10 pb-16 sm:pb-20 px-6 sm:px-10 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Top Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-8 sm:mb-10">
          <div className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 flex items-center gap-4 sm:gap-5 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-linear-to-br from-primary via-secondary/80 to-secondary flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>

            <div className="min-w-0">
              <p className="text-xs font-bold tracking-wider text-slate-500 uppercase">
                Call / WhatsApp Sales
              </p>
              <p className="text-base sm:text-lg font-extrabold text-slate-900">
                +86 150 5893 3503
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 flex items-center gap-4 sm:gap-5 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-linear-to-br from-primary via-secondary/80 to-secondary flex items-center justify-center shrink-0">
              <TimerReset className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>

            <div className="min-w-0">
              <p className="text-xs font-bold tracking-wider text-slate-500 uppercase">
                Response Time
              </p>
              <p className="text-base sm:text-lg font-extrabold text-slate-900">
                Within 24 Hours
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 flex items-center gap-4 sm:gap-5 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-linear-to-br from-primary via-secondary/80 to-secondary flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>

            <div className="min-w-0">
              <p className="text-xs font-bold tracking-wider text-slate-500 uppercase">
                Visit Factory
              </p>
              <p className="text-base sm:text-lg font-extrabold text-slate-900">
                Pingyang County, Wenzhou, China
              </p>
            </div>
          </div>
        </div>

        {/* Main CTA */}
        <div className="relative overflow-hidden rounded-[28px] sm:rounded-[40px] bg-linear-to-r from-[#0F172A] via-[#1E293B] to-[#0F4C5C]">
          {/* Glow */}
          <div className="absolute right-0 top-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#0F6F88]/20 blur-[100px] sm:blur-[150px] rounded-full" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-center justify-between gap-8 sm:gap-10 px-6 sm:px-12 lg:px-20 py-12 sm:py-16 lg:py-20 text-center lg:text-left">
            {/* Left */}
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-white">
                Ready to Power Your
                <br />
                Production Line?
              </h2>

              <p className="mt-4 sm:mt-5 text-base sm:text-lg leading-7 sm:leading-9 text-slate-300">
                Get a personalized quote and free consultation from our engineering
                team within 24 hours.
              </p>
            </div>

            {/* Right */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full sm:w-auto">
              <Link
                href="/contact"
                className="group px-6 sm:px-7 py-4 sm:py-5 rounded-full bg-linear-to-r from-[#ED5114] to-[#ff7a18] text-white font-bold text-sm shadow-[0_15px_40px_rgba(237,81,20,0.35)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <FileText className="w-5 h-5" />
                Get Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-all duration-300" />
              </Link>

              <button className="px-6 sm:px-7 py-4 sm:py-5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white font-bold text-sm hover:bg-white/15 transition-all duration-300">
                Browse Catalog
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}