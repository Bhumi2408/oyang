"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Solutions", href: "/solutions" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-20 py-5 bg-white shadow-sm">
        {/* Logo */}
        <div>
          <Link href="/" className="flex gap-1 items-center">
            {/* Favicon - Heartbeat */}
            <motion.div
              animate={{ scale: [1, 1.1, 1, 1.1, 1] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.2, 0.4, 0.6, 1],
              }}
            >
              <Image src="/favicon.png" alt="fav" width={40} height={40} />
            </motion.div>
            <Image src="/images/logos.png" alt="Logo" width={150} height={50} />
          </Link>
        </div>

        <div className="flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-5 py-2 rounded-full font-inter text-sm font-medium transition-all duration-300
                ${
                  isActive
                    ? "bg-linear-to-br from-primary to-secondary text-white shadow-md font-semibold"
                    : "text-gray-700 hover:bg-primary/20 hover:text-primary font-semibold"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="bg-linear-to-br from-secondary to-[#FFBC47] px-5 py-3 rounded-full transition-all duration-300 hover:scale-105">
          <Link href="/contact">
            <div className="font-semibold text-sm">
              Get a Quote{" "}
              <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
            </div>
          </Link>
        </div>
      </div>
      {/* Spacer to prevent content from hiding behind the fixed header */}
      <div className="h-[76px]" />
    </>
  );
};

export default Header;