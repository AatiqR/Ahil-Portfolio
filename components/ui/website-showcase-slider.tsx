"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image"; // ✅ Used Next.js optimized Image component

interface WebsiteDesign {
  id: number;
  title: string;
  category: string;
  image: string;
}

// Custom hook for media queries
const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const updateMatch = () => setMatches(media.matches);

    updateMatch(); // Initial match
    media.addEventListener("change", updateMatch);

    return () => media.removeEventListener("change", updateMatch);
  }, [query]);

  return matches;
};

export default function WebsiteShowcaseSlider() {
  const websites: WebsiteDesign[] = [
    { id: 1, title: "E-Commerce Platform", category: "Shopping", image: "/Assets/Pro1.png" },
    { id: 2, title: "Food Delivery App", category: "Food & Beverage", image: "/Assets/Pro1.png" },
    { id: 3, title: "Finance Dashboard", category: "Finance", image: "/Assets/pro2.png" },
    { id: 4, title: "Healthcare Portal", category: "Healthcare", image: "/Assets/pro3.png" },
    { id: 5, title: "Utility Services", category: "Utilities", image: "/Assets/pro4.png" },
    { id: 6, title: "Social Media App", category: "Social", image: "/Assets/pro5.png" },
    { id: 7, title: "Travel Booking", category: "Travel", image: "/Assets/pro2.png" },
  ];

  const [activeIndex, setActiveIndex] = useState(3);
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const isXs = useMediaQuery("(max-width: 480px)");
  const isSm = useMediaQuery("(min-width: 481px) and (max-width: 640px)");
  const isMd = useMediaQuery("(min-width: 641px) and (max-width: 768px)");
  const isLg = useMediaQuery("(min-width: 769px) and (max-width: 1024px)");

  const getCardDimensions = () => {
    if (isXs) return { width: 270, height: 360 };
    if (isSm) return { width: 290, height: 400 };
    if (isMd) return { width: 320, height: 440 };
    if (isLg) return { width: 380, height: 480 };
    return { width: 420, height: 550 };
  };

  const getOffsetPercentage = () => (isXs ? 15 : isSm || isMd ? 20 : 25);

  const handlePrev = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((prev) => (prev === 0 ? websites.length - 1 : prev - 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  }, [isAnimating, websites.length]);

  const handleNext = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((prev) => (prev === websites.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  }, [isAnimating, websites.length]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    },
    [handlePrev, handleNext]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const { width: cardWidth, height: cardHeight } = getCardDimensions();
  const offsetPercentage = getOffsetPercentage();

  return (
    <div className="relative w-full bg-black py-8 flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full z-10">
        {/* Title */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h2 className="text-4xl font-bold text-white text-center mb-4">Recent Projects</h2>
          <p className="text-gray-300 text-center max-w-lg mx-auto">
            Explore how we&apos;ve helped businesses grow through a perfect website.
          </p>
        </motion.div>

        {/* Slider */}
        <div ref={sliderRef} className="relative w-full flex items-center justify-center" style={{ height: `${cardHeight + 40}px` }}>
          {websites.map((website, index) => {
            const position = (index - activeIndex + websites.length) % websites.length;
            const normalizedPosition = position > 3 ? position - websites.length : position;
            if (Math.abs(normalizedPosition) > 3) return null;

            return (
              <div
                key={website.id}
                className={cn("absolute transition-all duration-500 flex items-center justify-center", isAnimating && "pointer-events-none")}
                style={{
                  zIndex: normalizedPosition === 0 ? 10 : 5 - Math.abs(normalizedPosition),
                  opacity: Math.abs(normalizedPosition) > 2 ? 0.4 : 1,
                  transform: `translateX(${normalizedPosition * offsetPercentage}%) scale(${1 - Math.abs(normalizedPosition) * 0.15})`,
                }}
              >
                <div className="overflow-hidden border-2 border-white/20 transition-all duration-500">
                  <Image
                    src={website.image || "/placeholder.svg"}
                    alt={`${website.title} design`}
                    width={cardWidth}
                    height={cardHeight}
                    className="object-cover w-full h-full"
                    priority
                  />
                  {normalizedPosition === 0 && (
                    <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-4 text-white">
                      <p className="font-medium">{website.title}</p>
                      <p className="text-sm opacity-70">{website.category}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows */}
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
          <button onClick={handlePrev} className="w-10 h-10 bg-black border border-white/20 text-white flex items-center justify-center rounded-full hover:bg-white/10">
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>

        <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
          <button onClick={handleNext} className="w-10 h-10 bg-black border border-white/20 text-white flex items-center justify-center rounded-full hover:bg-white/10">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
