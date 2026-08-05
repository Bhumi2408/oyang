"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import { ArrowRight, Globe, Mail, MapPin, Phone } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Solutions", href: "/solutions" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const machineLinks = [
  { name: "Forming Machine", href: "/products/forming-machine" },
  { name: "Printing", href: "/products/printing" },
  { name: "Post-Press & Converting", href: "/products/post-press-converting" },
  { name: "Auxiliary Equipment", href: "/products/auxiliary-equipment" },
  { name: "Raw Material", href: "/products/raw-material" },
];

const Footer = () => {
  return (
    <div>
      <footer className="relative overflow-hidden bg-linear-to-br from-[#0B132B] via-[#102A43] to-[#0F4C5C] text-white">
        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-[#ED5114]/20 blur-[120px]" />

        <div className="relative z-10 px-6 sm:px-10 lg:px-20 py-14 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 lg:gap-14">
            {/* Logo & About */}
            <div className="sm:col-span-2 lg:col-span-1">
              <Link href="/" className="flex items-center gap-1">
                <motion.div
                  animate={{ scale: [1, 1.1, 1, 1.1, 1] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src="/images/heart.png"
                    alt="favicon"
                    width={50}
                    height={50}
                  />
                </motion.div>

                <div className="rounded-xl">
                  <Image
                    src="/images/logopng.png"
                    alt="Oyang India"
                    width={220}
                    height={60}
                  />
                </div>
              </Link>

              <p className="mt-7 text-slate-300 leading-7">
                Oyang India brings Zhejiang Ounuo Machinery's paper bag, nonwoven
                bag, paper forming and printing machinery — engineered in a
                130,000 m² facility in Wenzhou, China — to manufacturers across
                India.
              </p>

              {/* Social */}
              <div className="flex gap-4 mt-8">
                <Link
                  href="https://www.facebook.com/oyangpackaging"
                  target="_blank"
                  className="w-11 h-11 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-all duration-300"
                >
                  <FaFacebook size={18} />
                </Link>

                <Link
                  href="https://www.instagram.com/oyangpackaging"
                  target="_blank"
                  className="w-11 h-11 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-all duration-300"
                >
                  <FaInstagram size={18} />
                </Link>

                <Link
                  href="https://www.youtube.com/@oyang.packaging"
                  target="_blank"
                  className="w-11 h-11 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-all duration-300"
                >
                  <FaYoutube size={18} />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl lg:text-2xl font-bold mb-6 text-white">
                Quick Links
              </h3>

              <div className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="group flex items-center gap-2 text-slate-300 hover:text-white transition-all duration-300"
                  >
                    <ArrowRight
                      size={15}
                      className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                    />
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Machines */}
            <div>
              <h3 className="text-xl lg:text-2xl font-bold mb-6 text-white">
                Our Machines
              </h3>

              <div className="space-y-3 text-slate-300">
                {machineLinks.map((link) => (
                  <Link key={link.name} href={link.href} className="block hover:text-white transition-colors duration-300">
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xl lg:text-2xl font-bold mb-6 text-white">Contact</h3>

              <div className="space-y-5">
                <div className="flex gap-3">
                  <MapPin className="text-[#FFB347] mt-1 shrink-0" size={18} />
                  <span className="text-slate-300">New Delhi, India</span>
                </div>

                <div className="flex gap-3">
                  <Phone className="text-[#FFB347] mt-1 shrink-0" size={18} />
                  <a href="tel:+918047547003" className="text-slate-300 hover:text-white transition-colors duration-300">
                    +91 80475 47003
                  </a>
                </div>

                <div className="flex gap-3">
                  <Mail className="text-[#FFB347] mt-1 shrink-0" size={18} />
                  <a href="mailto:info@oyangindia.com" className="text-slate-300 hover:text-white transition-colors duration-300 break-all">
                    info@oyangindia.com
                  </a>
                </div>

                <div className="flex gap-3">
                  <Globe className="text-[#FFB347] mt-1 shrink-0" size={18} />
                  <span className="text-slate-300">Serving PAN India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-white/10 mt-12 lg:mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-slate-400 text-sm">
              © 2026 Oyang India. All Rights Reserved | Powered By{" "}
              <Link href="https://www.cybertricksmedia.com/" target="_blank" className="hover:text-white transition-colors duration-300">
                Cybertricksmedia Pvt Ltd
              </Link>
            </p>

          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;