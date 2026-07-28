import CTA from '@/components/home/CTA'
import ServiceHero from '@/components/services/ServiceHero'
import ServicesGrid from '@/components/services/ServicesGrid'
import ServiceWorkflow from '@/components/services/ServiceWorkflow'
import SparePartsWarehouse from '@/components/services/SparePartsWarehouse'
import SupportPillars from '@/components/services/SupportPillars'
import React from 'react'

export const metadata = {
  title: "",
  description: "",
  alternates: { canonical: "https://ounuo-machinery.com/about" },
};

const page = () => {
  return (
    <>
      <ServiceHero/>
      <ServicesGrid/>
      <SupportPillars/>
      <ServiceWorkflow/>
      <SparePartsWarehouse/>
      <CTA/>
    </>
  )
}

export default page