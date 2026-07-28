import CategoryHero from "@/components/solutions/CategoryHero";
import MachineFunctionsGrid from "@/components/solutions/MachineFunctionsGrid";
import CTA from "@/components/home/CTA";

export const metadata = {
  title: "Solutions By Machine Function | Ounuo Machinery",
  description:
    "Explore core machine functions — Slitting, Lamination, Printing, Die Cutting, Embossing, Hot Stamping, Packing and Palletizing.",
  alternates: { canonical: "https://ounuo-machinery.com/solutions/machine-functions" },
};

export default function MachineFunctionsPage() {
  return (
    <>
      <CategoryHero
        breadcrumb="Machine Functions"
        badge="By Machine Function"
        title="The Functions Behind"
        highlight="Every Line"
        description="Every OYANG production line is built from these core processes — mix and match the functions your product needs."
      />
      <MachineFunctionsGrid />
      <CTA />
    </>
  );
}