"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQSection() {
  return (
    <div className="bg-black min-h-screen w-full py-16 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-white text-xl mb-2">Questions?</h2>
        <h1 className="text-[#4AE54A] text-5xl md:text-6xl font-bold mb-16">We got answers.</h1>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="border-0">
            <AccordionTrigger className="bg-[#111] rounded-lg px-6 py-4 text-white text-left hover:no-underline hover:bg-[#181818] transition-colors">
              <span className="text-lg">Who's behind Uniodessy?</span>
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 text-gray-300">Content for this answer goes here.</AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-0">
            <AccordionTrigger className="bg-[#111] rounded-lg px-6 py-4 text-white text-left hover:no-underline hover:bg-[#181818] transition-colors">
              <span className="text-lg">Why choose us over hiring in-house?</span>
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 text-gray-300">Content for this answer goes here.</AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-0">
            <AccordionTrigger className="bg-[#111] rounded-lg px-6 py-4 text-white text-left hover:no-underline hover:bg-[#181818] transition-colors">
              <span className="text-lg">What if I'm not satisfied with the outcome?</span>
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 text-gray-300">Content for this answer goes here.</AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border-0">
            <AccordionTrigger className="bg-[#111] rounded-lg px-6 py-4 text-white text-left hover:no-underline hover:bg-[#181818] transition-colors">
              <span className="text-lg">How fast will my project be delivered?</span>
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 text-gray-300">Content for this answer goes here.</AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border-0">
            <AccordionTrigger className="bg-[#111] rounded-lg px-6 py-4 text-white text-left hover:no-underline hover:bg-[#181818] transition-colors">
              <span className="text-lg">Do you offer refunds?</span>
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 text-gray-300">Content for this answer goes here.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

