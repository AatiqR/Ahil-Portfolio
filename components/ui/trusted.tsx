"use client"

import { motion } from "framer-motion"

export default function TrustedSection() {
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
        <motion.div 
          className="absolute flex items-center gap-12 sm:gap-20 animate-smooth-marquee"
          // You could also use Framer Motion for the marquee animation instead of CSS
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {[...Array(2)].map((_, outerIndex) => (
            <div key={outerIndex} className="flex items-center gap-12 sm:gap-20">
              {[
  "PineHollow Bakery",
  "SteelWave Fitness",
  "CloudNest IT Services",
  "SageRoot Landscaping",
  "EmberCraft Jewelry",
  "SwiftPace Couriers",
  "BlueFern Spa",
  "IronClad Roofing",
  "GoldenKey Realty",
  "FreshTide Seafood",
  "BrightPath Tutoring",
  "RedOak Carpentry",
  "ClearSky Plumbing",
  "UrbanPulse Marketing",
  "StarGlow Photography",
  "TrueVine Winery",
  "RockSolid Accounting",
  "WildBloom Florist",
  "HorizonAuto Repair",
  "SilkThread Tailoring",
  "PeakPulse Event Planning",
  "QuietHaven Counseling",
  "SolarCrest Energy",
  "TrailBound Outfitters",
  "CrystalWave Pool Services",
  "HomeHearth Interior Design",
  "FastTrack Moving Co.",
  "GreenSprout Nursery",
  "SkyHigh Drone Services",
  "PureBrew Coffee Roasters"
].map((name, index) => (
                <div 
                  key={index}
                  className="flex items-center opacity-70 hover:opacity-100 transition duration-500"
                >
                  <span className="text-neutral-300 text-lg sm:text-xl font-semibold whitespace-nowrap">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}