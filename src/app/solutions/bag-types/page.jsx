import CategoryHero from "@/components/solutions/CategoryHero";
import SolutionsCatalog from "@/components/solutions/SolutionsCatalog";
import CTA from "@/components/home/CTA";

export const metadata = {
  title: "Solutions By Bag Type | Ounuo Machinery",
  description:
    "Browse 21 bag structures across Paper Bag, Nonwoven Bag and Flexible Pouch categories — search and filter to find your exact shape.",
  alternates: { canonical: "https://ounuo-machinery.com/solutions/bag-types" },
};

export default function BagTypesPage() {
  return (
    <>
      <CategoryHero
        breadcrumb="Bag Types"
        badge="By Bag Type"
        title="21 Bag Structures,"
        highlight="One Search"
        description="From twisted handle paper bags to stand-up pouches — search or filter by category to find the exact bag shape you need."
      />
      <SolutionsCatalog />
      <CTA />
    </>
  );
}