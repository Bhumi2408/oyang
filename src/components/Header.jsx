"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  Boxes,
  ChevronDown,
  Droplets,
  Layers,
  Menu,
  Printer,
  ScissorsLineDashed,
  Scroll,
  ShoppingBag,
  Wrench,
  X,
} from "lucide-react";

const productColumns = [
  {
    heading: "Forming Machine",
    icon: ShoppingBag,
    href: "/products/forming-machine",
    links: [
      { label: "Nonwoven Bag Making Machine", href: "/products/forming-machine/nonwoven-bag-making-machine" },
      { label: "Roll Fed Paper Bag Machine", href: "/products/forming-machine/roll-fed-paper-bag-making-machine" },
      { label: "Sheet Fed Box Bag Machine", href: "/products/forming-machine/sheet-fed-box-bag-making-machine" },
      { label: "Flexible Pouch Machine", href: "/products/forming-machine/flexible-pouch-making-machine" },
      { label: "Paper Forming Machine", href: "/products/forming-machine/paper-forming-machine" },
    ],
  },
  {
    heading: "Printing",
    icon: Printer,
    href: "/products/printing",
    links: [
      { label: "Rotogravure Printing", href: "/products/printing/rotogravure-printing-machine" },
      { label: "Flexographic Printing", href: "/products/printing/flexographic-printing-machine" },
      { label: "Screen Printing", href: "/products/printing/screen-printing-machine" },
    ],
  },
  {
    heading: "Post-Press",
    icon: ScissorsLineDashed,
    href: "/products/post-press-converting",
    links: [
      { label: "Flatbed Die Cutting", href: "/products/post-press-converting/flatbed-die-cutting-machine" },
      { label: "Roll to Roll Lamination", href: "/products/post-press-converting/roll-to-roll-lamination" },
      { label: "Flute Laminating Machine", href: "/products/post-press-converting/flute-laminating-machine" },
    ],
  },
  {
    heading: "Auxiliary Equipment",
    icon: Wrench,
    href: "/products/auxiliary-equipment",
    links: [
      { label: "Paper Bag Auxiliary", href: "/products/auxiliary-equipment/paper-bag-auxiliary-equipment" },
      { label: "Nonwoven Bag Auxiliary", href: "/products/auxiliary-equipment/nonwoven-bag-auxiliary-equipment" },
      { label: "Flexible Pouch Auxiliary", href: "/products/auxiliary-equipment/flexible-pouch-auxiliary" },
      { label: "Paper Forming Auxiliary", href: "/products/auxiliary-equipment/paper-forming-auxiliary" },
    ],
  },
  {
    heading: "Raw Material",
    icon: Scroll,
    href: "/products/raw-material",
    links: [
      { label: "Paper Rolls", href: "/products/raw-material/paper-rolls" },
      { label: "Non-woven Fabric Rolls", href: "/products/raw-material/non-woven-fabric-rolls" },
      { label: "Flexible Film Rolls", href: "/products/raw-material/flexible-film-rolls" },
    ],
  },
];

// Solutions is a single page — just 5 flat category links, no separate sub-pages built.
const solutionLinks = [
  { label: "By Application", icon: Boxes, href: "/solutions" },
  { label: "By Production Line", icon: Layers, href: "/solutions" },
  { label: "By Bag Type", icon: ShoppingBag, href: "/solutions" },
  { label: "By Machine Function", icon: Wrench, href: "/solutions" },
  { label: "By Material", icon: Droplets, href: "/solutions" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products", mega: "products" },
  { name: "Solutions", href: "/solutions", mega: "solutions" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const pathname = usePathname();
  const [openMega, setOpenMega] = useState(null); // "products" | "solutions" | null
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);

  const closeMega = () => setOpenMega(null);
  const closeMobile = () => {
    setMobileOpen(false);
    setMobileExpanded(null);
  };

  return (
    <>
      <div
        className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm"
        onMouseLeave={closeMega}
      >
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-20 py-4 lg:py-5">
          {/* Logo */}
          <Link href="/" className="flex gap-1 items-center shrink-0" onClick={closeMobile}>
            <motion.div
              animate={{ scale: [1, 1.1, 1, 1.1, 1] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.2, 0.4, 0.6, 1],
              }}
            >
              <Image src="/favicon.png" alt="fav" width={36} height={36} className="lg:w-9 lg:h-9" />
            </motion.div>
            <Image
              src="/images/logos.png"
              alt="Logo"
              width={130}
              height={44}
              className="object-contain lg:w-[150px] lg:h-[50px]"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const isMegaOpen = openMega === link.mega;

              return (
                <div key={link.name} onMouseEnter={() => setOpenMega(link.mega || null)}>
                  <Link
                    href={link.href}
                    className={`px-5 py-2 rounded-full font-inter text-sm font-medium transition-all duration-300 flex items-center gap-1
                    ${
                      isActive || isMegaOpen
                        ? "bg-linear-to-br from-primary to-secondary text-white shadow-md font-semibold"
                        : "text-gray-700 hover:bg-primary/20 hover:text-primary font-semibold"
                    }`}
                  >
                    {link.name}
                    {link.mega && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${
                          isMegaOpen ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block bg-linear-to-br from-secondary to-[#FFBC47] px-5 py-3 rounded-full transition-all duration-300 hover:scale-105 shrink-0">
            <Link href="/contact">
              <div className="font-semibold text-sm flex items-center gap-2">
                Get a Quote
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full text-gray-700 hover:bg-primary/10 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Mega Menus */}
        <AnimatePresence>
          {openMega === "products" && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="hidden lg:block w-full border-t border-slate-100 bg-white shadow-xl"
            >
              <div className="grid grid-cols-3 xl:grid-cols-5 gap-8 px-10 xl:px-20 py-10">
                {productColumns.map((col) => {
                  const ColIcon = col.icon;
                  return (
                    <div key={col.heading}>
                      <Link href={col.href} onClick={closeMega} className="flex items-center gap-2 mb-4 group">
                        <span className="w-9 h-9 rounded-lg bg-linear-to-br from-primary to-secondary flex items-center justify-center shrink-0">
                          <ColIcon className="w-4.5 h-4.5 text-white" />
                        </span>
                        <span className="font-extrabold text-sm text-[#0f172a] group-hover:text-primary transition-colors duration-200">
                          {col.heading}
                        </span>
                      </Link>
                      <ul className="space-y-2.5">
                        {col.links.map((item) => (
                          <li key={item.label}>
                            <Link
                              href={item.href}
                              onClick={closeMega}
                              className="text-sm text-slate-600 hover:text-primary transition-colors duration-200"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-10 xl:px-20 py-4 bg-slate-50 border-t border-slate-100">
                <p className="text-xs font-semibold text-slate-500">
                  🏭 130,000 m² Factory · 280+ Patents · CE Certified
                </p>
                <Link href="/products" onClick={closeMega} className="flex items-center gap-1.5 text-sm font-bold text-primary">
                  View All Products <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          )}

          {openMega === "solutions" && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="hidden lg:block w-full border-t border-slate-100 bg-white shadow-xl"
            >
              <div className="grid grid-cols-2 xl:grid-cols-5 gap-4 px-10 xl:px-20 py-8">
                {solutionLinks.map((item) => {
                  const ItemIcon = item.icon;
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={closeMega}
                      className="group flex items-center gap-3 rounded-2xl border border-slate-200 p-4 hover:border-primary/40 hover:shadow-md transition-all duration-300"
                    >
                      <span className="w-10 h-10 rounded-xl bg-linear-to-br from-primary to-secondary flex items-center justify-center shrink-0">
                        <ItemIcon className="w-5 h-5 text-white" />
                      </span>
                      <span className="font-bold text-sm text-[#0f172a] group-hover:text-primary transition-colors duration-200">
                        {item.label}
                      </span>
                    </Link>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-10 xl:px-20 py-4 bg-slate-50 border-t border-slate-100">
                <p className="text-xs font-semibold text-slate-500">
                  💡 Find the right machine by application, bag type, production line, function or material.
                </p>
                <Link href="/solutions" onClick={closeMega} className="flex items-center gap-1.5 text-sm font-bold text-primary">
                  Explore All Solutions <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden overflow-hidden border-t border-slate-100 bg-white max-h-[80vh] overflow-y-auto"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link) => {
                  const isExpanded = mobileExpanded === link.mega;
                  const isActive = pathname === link.href;

                  if (!link.mega) {
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={closeMobile}
                        className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-colors duration-200 ${
                          isActive ? "bg-linear-to-br from-primary to-secondary text-white" : "text-gray-700 hover:bg-slate-100"
                        }`}
                      >
                        {link.name}
                      </Link>
                    );
                  }

                  return (
                    <div key={link.name}>
                      <button
                        type="button"
                        onClick={() => setMobileExpanded(isExpanded ? null : link.mega)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-colors duration-200 ${
                          isActive ? "bg-linear-to-br from-primary to-secondary text-white" : "text-gray-700 hover:bg-slate-100"
                        }`}
                      >
                        {link.name}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                        />
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden pl-4 pr-2"
                          >
                            {link.mega === "products" &&
                              productColumns.map((col) => (
                                <div key={col.heading} className="py-3 border-t border-slate-100 first:border-0">
                                  <Link
                                    href={col.href}
                                    onClick={closeMobile}
                                    className="block text-xs font-extrabold text-primary uppercase tracking-wide mb-2"
                                  >
                                    {col.heading}
                                  </Link>
                                  <div className="space-y-1.5">
                                    {col.links.map((item) => (
                                      <Link
                                        key={item.label}
                                        href={item.href}
                                        onClick={closeMobile}
                                        className="block text-sm text-slate-600 py-1"
                                      >
                                        {item.label}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}

                            {link.mega === "solutions" &&
                              solutionLinks.map((item) => (
                                <Link
                                  key={item.label}
                                  href={item.href}
                                  onClick={closeMobile}
                                  className="block text-sm font-semibold text-slate-700 py-2.5 border-t border-slate-100 first:border-0"
                                >
                                  {item.label}
                                </Link>
                              ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}

                <Link
                  href="/contact"
                  onClick={closeMobile}
                  className="mt-3 flex items-center justify-center gap-2 rounded-full bg-linear-to-br from-secondary to-[#FFBC47] px-5 py-3 font-semibold text-sm"
                >
                  Get a Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Spacer to prevent content from hiding behind the fixed header */}
      <div className="h-[68px] lg:h-[76px]" />
    </>
  );
};

export default Header;