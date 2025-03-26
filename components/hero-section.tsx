"use client"

import { useState, useEffect } from "react"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  const phrases = [
    "visitors into paying customers.",
    "visitors into buyers instantly!",
    "traffic into paying customers.",
    "engage, attract, and sell!",
    "boost sales by converting visitors.",
    "clicks into cash!",
  ]

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length)
        setIsAnimating(false)
      }, 500) // Half a second for fade out
    }, 4000) // Change every 4 seconds

    return () => {
      clearInterval(interval)
    }
  }, [phrases.length])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container mx-auto px-4 flex flex-col items-center text-center mt-32 sm:mt-36 md:mt-40"
    >
      <motion.h1
        variants={itemVariants}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-green-500 max-w-5xl leading-tight"
      >
        We build websites that turn{" "}
        <span
          className={`inline-block min-h-[1.2em] transition-opacity duration-500 ${isAnimating ? "opacity-0" : "opacity-100"}`}
        >
          {phrases[currentPhraseIndex]}
        </span>
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="text-neutral-300 max-w-3xl mt-6 sm:mt-8 md:mt-10 text-base sm:text-lg"
      >
        High-converting websites designed with strategic copy and seamless development to attract ready-to-buy
        customers—helping brands worldwide turn visitors into loyal clients and drive growth.
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="flex flex-col sm:flex-row gap-4 mt-8 sm:mt-10 md:mt-12 w-full sm:w-auto"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="bg-green-500 text-black font-medium px-6 sm:px-8 py-3 rounded-full hover:bg-green-400 transition w-full sm:w-auto shadow-[0_0_15px_rgba(62,250,140,0.3)]"
        >
          Get Your Website Built
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="border border-neutral-700 text-white font-medium px-6 sm:px-8 py-3 rounded-full hover:border-green-500 hover:bg-black/50 transition flex items-center justify-center gap-2 w-full sm:w-auto"
        >
          See Our Plans <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

