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
            <span className="text-[#39FF14] drop-shadow-[0_0_10px_rgba(57,255,20,0.8)]">Benefits</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300">
            What You Get By Working With Me
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-24">
          {/* Feature 1 */}
          <div className="flex flex-col items-start">
            <div className="mb-5">
              <Grid className="w-10 h-10 text-[#39FF14] drop-shadow-[0_0_10px_rgba(57,255,20,0.8)]" strokeWidth={1.25} />
            </div>
            <h3 className="text-2xl font-bold mb-3">Responsive Design</h3>
            <p className="text-base text-gray-300 leading-relaxed">
              Seamless performance on mobile, tablet, and desktop.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-start">
            <div className="mb-5">
              <Zap className="w-10 h-10 text-[#39FF14] drop-shadow-[0_0_10px_rgba(57,255,20,0.8)]" strokeWidth={1.25} />
            </div>
            <h3 className="text-2xl font-bold mb-3">Lightning Fast</h3>
            <p className="text-base text-gray-300 leading-relaxed">
              Optimized websites with quick load times & smooth interactions.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-start">
            <div className="mb-5">
              <PuzzlePiece className="w-10 h-10 text-[#39FF14] drop-shadow-[0_0_10px_rgba(57,255,20,0.8)]" strokeWidth={1.25} />
            </div>
            <h3 className="text-2xl font-bold mb-3">High-Converting Websites</h3>
            <p className="text-base text-gray-300 leading-relaxed">
              50+ projects delivered → driving more leads, sales & engagement.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col items-start">
            <div className="mb-5">
              <CreditCard className="w-10 h-10 text-[#39FF14] drop-shadow-[0_0_10px_rgba(57,255,20,0.8)]" strokeWidth={1.25} />
            </div>
            <h3 className="text-2xl font-bold mb-3">Modern Tech Stack</h3>
            <p className="text-base text-gray-300 leading-relaxed">
              Next.js, React, Framer Motion, Webflow & more.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="flex flex-col items-start">
            <div className="mb-5">
              <Users className="w-10 h-10 text-[#39FF14] drop-shadow-[0_0_10px_rgba(57,255,20,0.8)]" strokeWidth={1.25} />
            </div>
            <h3 className="text-2xl font-bold mb-3">Client-Focused</h3>
            <p className="text-base text-gray-300 leading-relaxed">
              I collaborate with you to ensure results that match your goals.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="flex flex-col items-start">
            <div className="mb-5">
              <Infinity className="w-10 h-10 text-[#39FF14] drop-shadow-[0_0_10px_rgba(57,255,20,0.8)]" strokeWidth={1.25} />
            </div>
            <h3 className="text-2xl font-bold mb-3">Ongoing Support</h3>
            <p className="text-base text-gray-300 leading-relaxed">
              Long-term maintenance & updates to keep your site fresh.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
