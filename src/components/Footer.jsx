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

const Footer = () => {
  return (
    <div>
      <footer className="relative overflow-hidden bg-gradient-to-br from-[#0B132B] via-[#102A43] to-[#0F4C5C] text-white">
        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-[#ED5114]/20 blur-[120px]" />

        <div className="relative z-10 px-20 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-14">
            {/* Logo & About */}
            <div>
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

                <div className=" rounded-xl">
                  <Image
                    src="/images/logopng.png"
                    alt="Oyang India"
                    width={220}
                    height={60}
                  />
                </div>
              </Link>

              <p className="mt-7 text-slate-300 leading-7">
                Oyang India delivers world-class paper bag, nonwoven bag,
                cutlery and printing machinery for sustainable manufacturing and
                packaging solutions.
              </p>

              {/* Social */}
              <div className="flex gap-4 mt-8">
                <Link
                  href="#"
                  className="w-11 h-11 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-all duration-300"
                >
                  <FaFacebook size={18} />
                </Link>

                <Link
                  href="#"
                  className="w-11 h-11 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-all duration-300"
                >
                  <FaInstagram size={18} />
                </Link>

                <Link
                  href="#"
                  className="w-11 h-11 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-all duration-300"
                >
                  <FaYoutube size={18} />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">
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
              <h3 className="text-2xl font-bold mb-6 text-white">
                Our Machines
              </h3>

              <div className="space-y-3 text-slate-300">
                <Link href="#" className="block hover:text-white">
                  Paper Bag Machines
                </Link>

                <Link href="#" className="block hover:text-white">
                  Nonwoven Bag Machines
                </Link>

                <Link href="#" className="block hover:text-white">
                  Paper Cutlery Machines
                </Link>

                <Link href="#" className="block hover:text-white">
                  Pouch Making Machines
                </Link>

                <Link href="#" className="block hover:text-white">
                  Printing Machines
                </Link>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Contact</h3>

              <div className="space-y-5">
                <div className="flex gap-3">
                  <MapPin className="text-[#FFB347] mt-1" size={18} />
                  <span className="text-slate-300">Delhi, India</span>
                </div>

                <div className="flex gap-3">
                  <Phone className="text-[#FFB347] mt-1" size={18} />
                  <span className="text-slate-300">+91 XXXXX XXXXX</span>
                </div>

                <div className="flex gap-3">
                  <Mail className="text-[#FFB347] mt-1" size={18} />
                  <span className="text-slate-300">info@oyangindia.com</span>
                </div>

                <div className="flex gap-3">
                  <Globe className="text-[#FFB347] mt-1" size={18} />
                  <span className="text-slate-300">Serving PAN India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-white/10 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400">
              © 2026 Oyang India. All Rights Reserved | Powered By <Link href="https://www.cybertricksmedia.com/" target="_blank">Bharat Bizmart</Link>
            </p>

            <div className="flex gap-6 text-slate-400">
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
