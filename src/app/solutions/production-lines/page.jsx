import CategoryHero from "@/components/solutions/CategoryHero";
import ProductionLinesGrid from "@/components/solutions/ProductionLinesGrid";
import CTA from "@/components/home/CTA";

export const metadata = {
  title: "Solutions By Production Line | Ounuo Machinery",
  description:
    "Explore complete production line configurations — Nonwoven Bag, Paper Bag, Sheet Fed Paper Bag, Flexible Pouch and Paper Forming lines.",
  alternates: { canonical: "https://ounuo-machinery.com/solutions/production-lines" },
};

export default function ProductionLinesPage() {
  return (
    <>
      <CategoryHero
        breadcrumb="Production Lines"
        badge="By Production Line"
        title="Complete"
        highlight="Production Lines"
        description="End-to-end configurations covering raw material feeding, forming, printing and finishing — engineered to run as one continuous line."
      />
      <ProductionLinesGrid />
      <CTA />
    </>
  );
}