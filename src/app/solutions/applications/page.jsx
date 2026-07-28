import CategoryHero from "@/components/solutions/CategoryHero";
import ApplicationsGrid from "@/components/solutions/ApplicationsGrid";
import CTA from "@/components/home/CTA";

export const metadata = {
  title: "Solutions By Application | Ounuo Machinery",
  description:
    "Explore packaging machine solutions by industry application — Food, Fashion, Beverages, Retail, Gift, E-commerce, Personal Care, Pharma and Pet Food.",
  alternates: { canonical: "https://ounuo-machinery.com/solutions/applications" },
};

export default function ApplicationsPage() {
  return (
    <>
      <CategoryHero
        breadcrumb="Applications"
        badge="By Application"
        title="Solutions For Every"
        highlight="Industry"
        description="From food takeaway to pharmaceutical packaging — find the bag, pouch or forming solution engineered for your industry's exact requirements."
      />
      <ApplicationsGrid />
      <CTA />
    </>
  );
}