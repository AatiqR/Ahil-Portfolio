import Image from "next/image"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function EcommerceLandingPage() {
  return (
    <div className="min-h-screen w-full bg-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          {/* Left side with phone mockups */}
          <div className="relative h-[400px] md:h-[500px] bg-gradient-to-r from-[#FFDA44] to-[#FF8A3D] rounded-3xl p-6 flex items-center justify-center">
            <div className="relative w-full h-full">
            
            <Image
                  src="/Assets/gigafit.gif"
                  width={800}
                  height={1000}
                  alt="Ecommerce app product listing"
                  className="w-full h-auto"
                />
         
        
            </div>
          </div>

          {/* Right side with text content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A2238] leading-tight">
              Multi Vendor Ecommerce
              <br />
              APP & Website
            </h1>

            <p className="text-lg text-gray-600">
              Build your own Ecommerce app just like Amazon & Flipkart Our app is a powerful tool to build your own
              Ecommerce platform.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-[#1A2238] mt-0.5" />
                <span className="text-lg">Android and iOS app for customer</span>
              </div>

              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-[#1A2238] mt-0.5" />
                <span className="text-lg">Android and iOS app for Seller/Delivery boy</span>
              </div>

              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-[#1A2238] mt-0.5" />
                <span className="text-lg">Master Admin</span>
              </div>

              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-[#1A2238] mt-0.5" />
                <span className="text-lg">Website</span>
              </div>
            </div>

            <div className="pt-6">
              <Button className="bg-black hover:bg-black/90 text-white rounded-full px-8 py-6 text-lg font-medium">
                BOOK FREE CONSULTATION
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp floating button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a href="#" className="block">
          <div className="bg-[#25D366] p-3 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
          </div>
        </a>
      </div>
    </div>
  )
}

