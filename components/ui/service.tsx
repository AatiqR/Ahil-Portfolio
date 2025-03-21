import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ServiceCards() {
  return (
    <div className="bg-black text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Service Heading with UFO Green Glow */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold mb-3 text-green-400 ufo-glow">Our Services</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Professional web development solutions tailored to your needs. Choose the service that best fits your
            project requirements.
          </p>
        </div>

        Service Cards
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Custom Websites */}
          <div className="border border-gray-800 rounded-xl p-5">
            <h2 className="text-2xl font-bold mb-1">Custom Websites</h2>
            <div className="text-3xl font-bold text-green-500 mb-4">$997</div>

            <h3 className="text-lg font-semibold mb-4">What's included?</h3>

            <ul className="space-y-2 mb-6 text-sm">
              <li className="flex items-start">
                <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Tailored designs that reflect your brand identity</span>
              </li>
              <li className="flex items-start">
                <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Responsive & Mobile-First Design</span>
              </li>
              <li className="flex items-start">
                <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Fast Delivery (14 Days)</span>
              </li>
              <li className="flex items-start">
                <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>1 Round of Revisions</span>
              </li>
              <li className="flex items-start">
                <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Basic Contact Form Integration</span>
              </li>
            </ul>

            <div className="flex flex-wrap gap-2 mb-4 text-xs">
              <span className="bg-gray-800 px-2 py-1 rounded-full">🔹 Fast & Responsive</span>
              <span className="bg-gray-800 px-2 py-1 rounded-full">🎨 Unique Designs</span>
              <span className="bg-gray-800 px-2 py-1 rounded-full">⚡ SEO-Friendly</span>
            </div>

            <Button
              variant="outline"
              className="w-full rounded-full border-gray-700 text-white hover:bg-gray-800 text-sm py-1.5"
            >
              Secure Your March Spot
            </Button>
          </div>

          {/* Website Redesign */}
          <div className="border border-gray-800 rounded-xl p-5">
            <h2 className="text-2xl font-bold mb-1">Website Redesign</h2>
            <div className="text-3xl font-bold text-green-400 mb-4">$1487</div>

            <h3 className="text-lg font-semibold mb-4">What's included?</h3>

            <ul className="space-y-2 mb-6 text-sm">
              <li className="flex items-start">
                <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Give your existing site a fresh, professional look</span>
              </li>
              <li className="flex items-start">
                <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Responsive & Mobile-First Design</span>
              </li>
              <li className="flex items-start">
                <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Fast Delivery (21 Days)</span>
              </li>
              <li className="flex items-start">
                <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>2 Rounds of Revisions</span>
              </li>
              <li className="flex items-start">
                <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Content Migration</span>
              </li>
            </ul>

            <div className="flex flex-wrap gap-2 mb-4 text-xs">
              <span className="bg-gray-800 px-2 py-1 rounded-full">🔹 Fast & Responsive</span>
              <span className="bg-gray-800 px-2 py-1 rounded-full">🎨 Unique Designs</span>
              <span className="bg-gray-800 px-2 py-1 rounded-full">⚡ SEO-Friendly</span>
            </div>

            <Button className="w-full rounded-full bg-green-500 hover:bg-green-600 text-white text-sm py-1.5">
              Secure Your March Spot
            </Button>
          </div>

          {/* Portfolio Websites */}
          <div className="border border-gray-800 rounded-xl p-5">
            <h2 className="text-2xl font-bold mb-1">Portfolio Websites</h2>
            <div className="text-3xl font-bold text-green-400 mb-4">$1987</div>

            <h3 className="text-lg font-semibold mb-4">What's included?</h3>

            <ul className="space-y-2 mb-6 text-sm">
              <li className="flex items-start">
                <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Showcase your work with an eye-catching portfolio</span>
              </li>
              <li className="flex items-start">
                <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Responsive & Mobile-First Design</span>
              </li>
              <li className="flex items-start">
                <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Fast Delivery (21 Days)</span>
              </li>
              <li className="flex items-start">
                <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>3 Rounds of Revisions</span>
              </li>
              <li className="flex items-start">
                <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Project Gallery & Filtering</span>
              </li>
            </ul>

            <div className="flex flex-wrap gap-2 mb-4 text-xs">
              <span className="bg-gray-800 px-2 py-1 rounded-full">🔹 Fast & Responsive</span>
              <span className="bg-gray-800 px-2 py-1 rounded-full">🎨 Unique Designs</span>
              <span className="bg-gray-800 px-2 py-1 rounded-full">⚡ SEO-Friendly</span>
            </div>

            <Button
              variant="outline"
              className="w-full rounded-full border-gray-700 text-white hover:bg-gray-800 text-sm py-1.5"
            >
              Secure Your March Spot
            </Button>
          </div>

          {/* E-commerce Websites */}
          <div className="border border-gray-900 rounded-xl p-5">
            <h2 className="text-2xl font-bold mb-1">E-commerce</h2>
            <div className="text-3xl font-bold text-green-400 mb-4">$2497</div>

            <h3 className="text-lg font-semibold mb-4">What's included?</h3>

            <ul className="space-y-2 mb-6 text-sm">
              <li className="flex items-start">
                <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Build a powerful online store that drives sales</span>
              </li>
              <li className="flex items-start">
                <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Responsive & Mobile-First Design</span>
              </li>
              <li className="flex items-start">
                <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Fast Delivery (34 Days)</span>
              </li>
              <li className="flex items-start">
                <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>3 Rounds of Revisions</span>
              </li>
              <li className="flex items-start">
                <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Payment Gateway Integration</span>
              </li>
              <li className="flex items-start">
                <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Product Management System</span>
              </li>
            </ul>

            <div className="flex flex-wrap gap-2 mb-4 text-xs">
              <span className="bg-gray-800 px-2 py-1 rounded-full">🔹 Fast & Responsive</span>
              <span className="bg-gray-800 px-2 py-1 rounded-full">🎨 Unique Designs</span>
              <span className="bg-gray-800 px-2 py-1 rounded-full">⚡ SEO-Friendly</span>
            </div>

            <Button
              variant="outline"
              className="w-full rounded-full border-gray-700 text-white hover:bg-gray-800 text-sm py-1.5"
            >
              Secure Your March Spot
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

