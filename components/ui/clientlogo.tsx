"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function LogoSlider() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (containerRef.current) {
      // Calculate the width of all logos combined minus the visible width
      setWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth)
    }
  }, [])

  const companies = [
    {
      name: "Adobe",
      logo: "/Assets/client/f.svg",
      height: 70,
      width: 140,
    },
    {
      name: "Google",
      logo: "/Assets/client/1.png",
      height: 70,
      width: 140,
    },
    {
      name: "Meta",
      logo: "/Assets/client/2.png",
      height: 70,
      width: 140,
    },
    {
      name: "Netflix",
      logo: "/Assets/client/3.png",
      height: 70,
      width: 140,
    },
 
    {
      name: "Airbnb",
      logo: "/Assets/client/4.png",
      height: 70,
      width: 140,
    },
    {
      name: "Microsoft",
      logo: "/Assets/client/5.png",
      height: 70,
      width: 140,
    },
    {
      name: "Apple",
      logo: "/Assets/client/6.png",
      height: 80,
      width: 160,
    },
    {
      name: "Spotify",
      logo: "/Assets/client/7.png",
      height: 90,
      width: 180,
    },
    {
      name: "Twitter",
      logo: "/Assets/client/8.png",
      height: 70,
      width: 140,
    },
    {
      name: "Amazon",
      logo: "/Assets/client/9.png",
      height: 70,
      width: 140,
    },   {
      name: "Amazon",
      logo: "/Assets/client/10.png",
      height: 70,
      width: 140,
    },   {
      name: "Amazon",
      logo: "/Assets/client/11.png",
      height: 70,
      width: 140,
    },
  ]

  return (
    <div className="w-full h-[300px] bg-black flex flex-col justify-center px-4 md:px-10 overflow-hidden rounded-4xl">
      <div className="mb-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-green-400 mb-2">
          Trusted by job seekers who are landed at top companies
        </h2>
        <p className="text-base text-white">
          Trusted By this companies and many more World wide
        </p>
      </div>

      <div className="overflow-hidden">
        <motion.div
          ref={containerRef}
          className="flex gap-16 items-center"
          animate={{
            x: [-width, 0],
          }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {companies.map((company, index) => (
   <div key={index} className="flex-shrink-0 flex items-center justify-center h-28 w-40">
   <div className="bg-white rounded-lg p-1 flex items-center justify-center w-full h-full">
     <Image
       src={company.logo || "/placeholder.svg"}
       alt={`${company.name} logo`}
       width={company.width } // Increased fallback width
       height={company.height} // Increased fallback height
       className="object-contain max-h-full max-w-full"
     />
   </div>
 </div>
          ))}

          {/* Duplicate companies for seamless loop */}
          {companies.map((company, index) => (
            <div key={`duplicate-${index}`} className="flex-shrink-0 flex items-center justify-center h-20">
              <div className="bg-white rounded-lg p-4 flex items-center justify-center">
                <Image
                  src={company.logo || "/placeholder.svg"}
                  alt={`${company.name} logo`}
                  width={company.width}
                  height={company.height}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
