import BlogHero from "@/components/blog/BlogHero";
import BlogGrid from "@/components/blog/BlogGrid";

export const metadata = {
  title: "Blog | Ounuo Machinery — Packaging & Printing Machine Insights",
  description:
    "Buying guides, industry trends and engineering insights on paper bag, nonwoven, pouch and printing machinery from Zhejiang Ounuo Machinery.",
  openGraph: {
    title: "Blog | Ounuo Machinery",
    description:
      "Buying guides, industry trends and engineering insights on packaging machinery.",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogGrid />
    </>
  );
}