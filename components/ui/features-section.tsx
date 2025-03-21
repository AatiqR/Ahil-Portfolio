import { Grid, Zap, PuzzleIcon as PuzzlePiece, CreditCard, Users, Infinity } from "lucide-react"
import { Geist } from "next/font/google"

// Initialize the Geist font
const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "700"],
})

export default function FeaturesSection() {
  return (
    <div className={`bg-black text-white py-20 px-4 md:px-8 lg:px-16 ${geist.className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            <span className="text-[#38d86f] drop-shadow-[0_0_8px_rgba(56,216,111,0.6)]">Benefits</span>
          </h2>
          <p className="text-4xl md:text-2xl text-[#00ff59] drop-shadow-[0_0_8px_rgba(56,216,111,0.6)]">Why Choose me</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-24">
          {/* Feature 1 */}
          <div className="flex flex-col items-start">
            <div className="mb-5">
              <Grid
                className="w-10 h-10 text-[#38d86f] drop-shadow-[0_0_8px_rgba(56,216,111,0.6)]"
                strokeWidth={1.25}
              />
            </div>
            <h3 className="text-2xl font-bold mb-3">Responsive Design</h3>
            <p className="text-base text-gray-300 leading-relaxed">
              Flawless experiences across all devices and screen sizes.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-start">
            <div className="mb-5">
              <Zap className="w-10 h-10 text-[#38d86f] drop-shadow-[0_0_8px_rgba(56,216,111,0.6)]" strokeWidth={1.25} />
            </div>
            <h3 className="text-2xl font-bold mb-3">Lightning Fast</h3>
            <p className="text-base text-gray-300 leading-relaxed">
              Optimized code for speedy load times and smooth interactions.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-start">
            <div className="mb-5">
              <PuzzlePiece
                className="w-10 h-10 text-[#38d86f] drop-shadow-[0_0_8px_rgba(56,216,111,0.6)]"
                strokeWidth={1.25}
              />
            </div>
            <h3 className="text-2xl font-bold mb-3"> Expert in High-Converting Websites</h3>
            <p className="text-base text-gray-300 leading-relaxed">
            With 50+ projects and 2+ years of experience, I craft websites that look great & drive results—boosting engagement, speed, and conversions.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col items-start">
            <div className="mb-5">
              <CreditCard
                className="w-10 h-10 text-[#38d86f] drop-shadow-[0_0_8px_rgba(56,216,111,0.6)]"
                strokeWidth={1.25}
              />
            </div>
            <h3 className="text-2xl font-bold mb-3">Modern Frameworks</h3>
            <p className="text-base text-gray-300 leading-relaxed">Expertise in React, NextJS, Framer & Webflow.</p>
          </div>

          {/* Feature 5 */}
          <div className="flex flex-col items-start">
            <div className="mb-5">
              <Users
                className="w-10 h-10 text-[#38d86f] drop-shadow-[0_0_8px_rgba(56,216,111,0.6)]"
                strokeWidth={1.25}
              />
            </div>
            <h3 className="text-2xl font-bold mb-3">Collaborative Approach</h3>
            <p className="text-base text-gray-300 leading-relaxed">
              We work closely with your team for seamless integration.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="flex flex-col items-start">
            <div className="mb-5">
              <Infinity
                className="w-10 h-10 text-[#38d86f] drop-shadow-[0_0_8px_rgba(56,216,111,0.6)]"
                strokeWidth={1.25}
              />
            </div>
            <h3 className="text-2xl font-bold mb-3">Ongoing Support</h3>
            <p className="text-base text-gray-300 leading-relaxed">
              Continuous maintenance and updates to keep your frontend fresh.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

