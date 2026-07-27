import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import Stats from "@/components/home/Stats";
import AboutUs from "@/components/home/AboutUs";
import Products from "@/components/home/Products";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Process from "@/components/home/Process";
import Testimonials from "@/components/home/Testimonials";
import Industries from "@/components/home/Industries";
import Difference from "@/components/home/Difference";
import FAQ from "@/components/home/FAQ";
import Blog from "@/components/home/Blog";
import CTA from "@/components/home/CTA";
import Sustainability from "@/components/home/Sustainability";
import WorldwidePresence from "@/components/home/WorldWidePresence";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Stats />
      <AboutUs />
      <Products />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <Industries />
      <Difference />
      <Sustainability />
      <FAQ />
      <WorldwidePresence />
      <Blog />
      <CTA />
    </>
  );
}