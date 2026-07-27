import CTA from '@/components/home/CTA'
import ProductsHero from '@/components/product/ProductsHero'
import ProductShowcase from '@/components/product/ProductShowcase'
import React from 'react'

export const metadata = {
  title: "",
  description: "",
  alternates: { canonical: "https://ounuo-machinery.com/about" },
};

const page = () => {
  return (
    <>
    <ProductsHero/>
    <ProductShowcase/>
    <CTA/>
    </>
  )
}

export default page