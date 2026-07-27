import CTA from '@/components/home/CTA'
import Process from '@/components/home/Process'
import IndustriesSection from '@/components/solutions/IndustriesSection'
import SolutionsCatalog from '@/components/solutions/SolutionsCatalog'
import SolutionsDifference from '@/components/solutions/SolutionsDifference'
import SolutionsHero from '@/components/solutions/SolutionsHero'
import React from 'react'

export const metadata = {
  title: "",
  description: "",
  alternates: { canonical: "https://ounuo-machinery.com/about" },
};

const page = () => {
  return (
    <>
      <SolutionsHero/>
      <SolutionsCatalog/>
      <Process/>
      <IndustriesSection/>
      <SolutionsDifference/>
      <CTA/>
    </>
  )
}

export default page