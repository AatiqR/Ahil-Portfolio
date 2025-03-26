"use client"

import { motion } from "framer-motion"

export function TrustedSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      className="container mx-auto px-4 mt-16 sm:mt-20"
    >
      <p className="text-center text-neutral-400 mb-6 sm:mb-10 text-sm sm:text-base">
        Trusted by 30+ businesses worldwide
      </p>

      <div className="relative w-full overflow-hidden h-12 sm:h-16">
        <div className="absolute flex items-center gap-12 sm:gap-20 animate-smooth-marquee">
          {[...Array(2)].map((_, outerIndex) => (
            <div key={outerIndex} className="flex items-center gap-12 sm:gap-20">
              <div className="flex items-center opacity-70 hover:opacity-100 transition duration-500">
                <span className="text-neutral-300 text-lg sm:text-xl font-semibold whitespace-nowrap">um</span>
              </div>
              <div className="flex items-center opacity-70 hover:opacity-100 transition duration-500">
                <span className="text-neutral-300 text-lg sm:text-xl font-semibold whitespace-nowrap">Lumina</span>
              </div>
              <div className="flex items-center opacity-70 hover:opacity-100 transition duration-500">
                <span className="text-neutral-300 text-lg sm:text-xl font-semibold whitespace-nowrap">Vortex</span>
              </div>
              <div className="flex items-center opacity-70 hover:opacity-100 transition duration-500">
                <span className="text-neutral-300 text-lg sm:text-xl font-semibold whitespace-nowrap">Velocity</span>
              </div>
              <div className="flex items-center opacity-70 hover:opacity-100 transition duration-500">
                <span className="text-neutral-300 text-lg sm:text-xl font-semibold whitespace-nowrap">Synergy</span>
              </div>
              <div className="flex items-center opacity-70 hover:opacity-100 transition duration-500">
                <span className="text-neutral-300 text-lg sm:text-xl font-semibold whitespace-nowrap">Enigma</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

