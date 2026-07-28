import CategoryHero from "@/components/solutions/CategoryHero";
import MaterialsGrid from "@/components/solutions/MaterialsGrid";
import CTA from "@/components/home/CTA";

export const metadata = {
  title: "Solutions By Material | Ounuo Machinery",
  description:
    "Explore raw materials our machines process — Paper Rolls, Non-woven Fabric Rolls, Flexible Film Rolls, Paperboard and Corrugated Board.",
  alternates: { canonical: "https://ounuo-machinery.com/solutions/materials" },
};

export default function MaterialsPage() {
  return (
    <>
      <CategoryHero
        breadcrumb="Materials"
        badge="By Material"
        title="Engineered For Your"
        highlight="Raw Material"
        description="Already sourcing a specific material? Find the machine configuration built around it."
      />
      <MaterialsGrid />
      <CTA />
    </>
  );
}