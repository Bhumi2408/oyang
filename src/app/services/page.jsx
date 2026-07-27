import CTA from '@/components/home/CTA'
import ServiceHero from '@/components/services/ServiceHero'
import ServicesGrid from '@/components/services/ServicesGrid'
import ServiceWorkflow from '@/components/services/ServiceWorkflow'
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
      <ServiceWorkflow/>
      <CTA/>
    </>
  )
}

export default page