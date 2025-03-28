"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa"
import { Mail, Phone, MapPin, ArrowRight, CheckCircle, ChevronRight } from "lucide-react"

// Define the props for the SocialIcon component
interface SocialIconProps {
  icon: React.ComponentType<React.SVGAttributes<SVGElement>>
  name?: string
}

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <footer id="Contact" className="bg-black text-white pt-16 pb-8 px-4 md:px-8 relative overflow-hidden">
      {/* Enhanced background with animated gradient */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-black to-[#0a1a0a] opacity-80"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#4AE54A] opacity-[0.03] blur-[150px] rounded-full animate-pulse"></div>
        <div
          className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#4AE54A] opacity-[0.02] blur-[120px] rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div
        className={`max-w-7xl mx-auto relative z-10 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          {/* Company Info - Wider column */}
          <div className="lg:col-span-5 bg-gradient-to-br from-black/60 to-[#0c1f0c]/30 p-6 rounded-xl border border-gray-800/50 shadow-xl backdrop-blur-sm">
            <div className="flex items-center mb-5">
              <div className="w-12 h-12 bg-[#4AE54A] rounded-md flex items-center justify-center mr-3 shadow-[0_0_15px_rgba(74,229,74,0.5)]">
                <span className="text-black font-bold text-4xl">A</span>
              </div>
              <h3 className="text-white text-2xl font-bold">Ahil</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
            Strategically crafted websites with persuasive copy and seamless development—designed to convert visitors into loyal customers. Helping brands worldwide maximize growth, boost sales, and create lasting impact
            </p>

            {/* Certifications with enhanced styling */}
            <div className="flex flex-col space-y-3 mb-6">
              <div className="flex items-center p-2 rounded-lg bg-black/30 border border-gray-800/50 transition-all duration-300 hover:border-[#4AE54A]/50 hover:bg-black/50 group">
                <div className="w-8 h-8 rounded-full bg-black/40 border border-gray-800 flex items-center justify-center mr-3 group-hover:border-[#4AE54A]/70 transition-all duration-300">
                  <CheckCircle className="text-[#4AE54A] w-4 h-4" />
                </div>
                <span className="text-white text-sm group-hover:text-[#4AE54A] transition-colors duration-300">
                 50+ Projects Completed
                </span>
              </div>
              <div className="flex items-center p-2 rounded-lg bg-black/30 border border-gray-800/50 transition-all duration-300 hover:border-[#4AE54A]/50 hover:bg-black/50 group">
                <div className="w-8 h-8 rounded-full bg-black/40 border border-gray-800 flex items-center justify-center mr-3 group-hover:border-[#4AE54A]/70 transition-all duration-300">
                  <CheckCircle className="text-[#4AE54A] w-4 h-4" />
                </div>
                <span className="text-white text-sm group-hover:text-[#4AE54A] transition-colors duration-300">
                  100% Satisfaction Rate 
                </span>
              </div>
              <div className="flex items-center p-2 rounded-lg bg-black/30 border border-gray-800/50 transition-all duration-300 hover:border-[#4AE54A]/50 hover:bg-black/50 group">
                <div className="w-8 h-8 rounded-full bg-black/40 border border-gray-800 flex items-center justify-center mr-3 group-hover:border-[#4AE54A]/70 transition-all duration-300">
                  <CheckCircle className="text-[#4AE54A] w-4 h-4" />
                </div>
                <span className="text-white text-sm group-hover:text-[#4AE54A] transition-colors duration-300">
                100% Money-Back Guaranteed
                </span>
              </div>
            </div>

            {/* Enhanced social icons */}
            <div className="flex flex-wrap gap-3 mb-2">
              <SocialIcon icon={FaLinkedin} name="LinkedIn" />
              <SocialIcon icon={FaTwitter} name="Twitter" />
              <SocialIcon icon={FaFacebook} name="Facebook" />
              <SocialIcon icon={FaInstagram} name="Instagram" />
            </div>
          </div>

          {/* Services & Quick Links - Narrower column */}
          <div className="lg:col-span-3 bg-gradient-to-br from-black/60 to-[#0c1f0c]/30 p-6 rounded-xl border border-gray-800/50 shadow-xl backdrop-blur-sm">
            <h3 className="text-white text-lg font-semibold mb-5 pb-2 border-b border-gray-800 inline-block">
              <span className="text-[#4AE54A]">Our</span> Services
            </h3>
            <div className="space-y-3">
              <FooterLink href="#" text="Custom Website" />
              <FooterLink href="#" text="Portfolio Website" />
              <FooterLink href="#" text="Redesign Website" />
              <FooterLink href="#" text="Business Website" />
              <FooterLink href="#" text="E-commerce Website" />
            </div>
          </div>

          {/* Contact & CTA - Wider column */}
          <div className="lg:col-span-4 bg-gradient-to-br from-black/80 to-[#0c1f0c]/50 p-6 rounded-xl border border-gray-800/50 shadow-xl backdrop-blur-sm">
            <h3 className="text-white text-lg font-semibold mb-4">
              <span className="text-[#4AE54A]">Ready</span> to transform your business?
            </h3>

            {/* Enhanced CTA button */}
            <a
  href="https://wa.me/+9203432357017?text=Hi,%20I’d%20like%20to%20book%20a%20free%20consultation!"
  target="_blank"
  rel="noopener noreferrer"
  className="group flex items-center justify-between bg-[#4AE54A] hover:bg-[#3bd43b] text-black font-medium rounded-md px-5 py-3 transition-all duration-300 w-full mb-6 shadow-[0_0_15px_rgba(74,229,74,0.3)] hover:shadow-[0_0_20px_rgba(74,229,74,0.5)]"
>
  <span>Book a Free Consultation call</span>
  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
</a>

            {/* Contact Information - Enhanced */}
            <div className="space-y-3 mt-5">
              <div className="flex items-center p-2 rounded-lg bg-black/30 border border-gray-800/50 transition-all duration-300 hover:border-[#4AE54A]/50 hover:bg-black/50 group">
                <div className="mr-3 w-8 h-8 rounded-full bg-black/40 border border-gray-800 flex items-center justify-center flex-shrink-0 group-hover:border-[#4AE54A]/70 transition-all duration-300">
                  <Phone className="text-[#4AE54A] w-4 h-4" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  +92 03432357017
                </span>
              </div>
              <div className="flex items-center p-2 rounded-lg bg-black/30 border border-gray-800/50 transition-all duration-300 hover:border-[#4AE54A]/50 hover:bg-black/50 group">
                <div className="mr-3 w-8 h-8 rounded-full bg-black/40 border border-gray-800 flex items-center justify-center flex-shrink-0 group-hover:border-[#4AE54A]/70 transition-all duration-300">
                  <Mail className="text-[#4AE54A] w-4 h-4" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                 ahilr9527@gmail.com
                </span>
              </div>
              <div className="flex items-center p-2 rounded-lg bg-black/30 border border-gray-800/50 transition-all duration-300 hover:border-[#4AE54A]/50 hover:bg-black/50 group">
                <div className="mr-3 w-8 h-8 rounded-full bg-black/40 border border-gray-800 flex items-center justify-center flex-shrink-0 group-hover:border-[#4AE54A]/70 transition-all duration-300">
                  <MapPin className="text-[#4AE54A] w-4 h-4" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                 Karachi Pakistan
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom footer - Enhanced */}
        <div className="border-t border-gray-800/50 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} <span className="text-[#4AE54A]">Ahil</span>. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors flex items-center group">
              <span>Privacy Policy</span>
              <ChevronRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors flex items-center group">
              <span>Terms of Service</span>
              <ChevronRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Enhanced Footer Link Component
function FooterLink({ href, text }: { href: string; text: string }) {
  return (
    <div className="list-none">
      <Link
        href={href}
        className="text-gray-300 hover:text-white transition-all duration-300 relative group flex items-center"
      >
        <ChevronRight className="w-4 h-4 mr-1 text-[#4AE54A] opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
        <span className="group-hover:translate-x-1 transition-transform duration-300">{text}</span>
      </Link>
    </div>
  )
}

// Enhanced Social Icon Component
function SocialIcon({ icon: Icon, name = "Social Icon" }: SocialIconProps) {
  return (
    <Link href="#" className="relative group" aria-label={name}>
      <div className="absolute inset-0 bg-[#4AE54A] rounded-lg blur opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
      <div className="relative w-10 h-10 rounded-full bg-black/40 border border-gray-800 group-hover:border-[#4AE54A] flex items-center justify-center transition-all duration-300 shadow-lg transform group-hover:translate-y-[-2px]">
        <span className="text-gray-400 group-hover:text-[#4AE54A] transition-colors duration-300">
          <Icon className="w-6 h-6" />
        </span>
      </div>
    </Link>
  )
}

