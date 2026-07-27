import AboutHero from '@/components/about/AboutHero'
import Certifications from '@/components/about/Certifications'
import CoreValues from '@/components/about/CoreValues'
import Leadership from '@/components/about/Leadership'
import OurJourney from '@/components/about/OurJourney'
import OurStory from '@/components/about/OurStory'
import QuoteSection from '@/components/about/QuoteSection'
import StatsStrip from '@/components/about/StatsStrip'
import WhatDrivesUs from '@/components/about/WhatDrivesUs'
import CTA from '@/components/home/CTA'
import Sustainability from '@/components/home/Sustainability'
import React from 'react'

export const metadata = {
  title: "",
  description: "",
  alternates: { canonical: "https://ounuo-machinery.com/about" },
};

const page = () => {
  return (
    <>
      <AboutHero/>
      <StatsStrip/>
      <QuoteSection/>
      <OurStory/>
      <WhatDrivesUs/>
      <OurJourney/>
      <CoreValues/>
      <Leadership/>
      <Sustainability/>
      <Certifications/>
      <CTA/>
    </>
  )
}

export default page