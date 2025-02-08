"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Range() {
  return (
    <div className="w-full max-w-[1183px] mx-auto mt-12 px-4">
      {/* Heading */}
      <div className="max-w-[559px] mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold">Browse The Range</h1>
        <p className="text-lg md:text-xl font-light p-2">
          Discover our collection of high-quality furniture.
        </p>
      </div>

      {/* Range Items */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { image: "/Mask Group (1).png", label: "Dining" },
          { image: "/koko2.png", label: "Living" },
          { image: "/koko.png", label: "Bedroom" },
        ].map((item, index) => (
          <Link key={index} href="/products" passHref>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative cursor-pointer rounded-lg shadow-md overflow-hidden transition-all duration-300 group"
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.label}
                width={381}
                height={480}
                className="w-full h-auto rounded-lg transition-transform duration-300"
              />

              {/* Label with Better Spacing */}
              <div className="pt-6 pb-4 text-center">
                <p className="font-semibold text-xl md:text-2xl text-gray-800 group-hover:text-yellow-500 transition-colors duration-300">
                  {item.label}
                </p>
              </div>

              {/* Hover Overlay (Only on Desktop) */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:flex items-center justify-center">
                <ArrowRight className="w-12 h-12 text-white group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
