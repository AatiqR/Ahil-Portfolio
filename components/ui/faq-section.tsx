"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface FaqItem {
  question: string
  answer: string
}

export default function FaqSection() {
  const [activeItem, setActiveItem] = useState<string | null>(null)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  const faqItems: FaqItem[] = [

    {
      question: "What services do you offer?",
      answer:
        "We offer a range of services, including website design, landing page design, web development, and more. Whether you need a simple website or a complex web application, we can help.",
    },
    {
      question: "How much does it cost?",
      answer:
        "Our pricing is based on the scope and complexity of your project. We offer transparent pricing with no hidden fees. Contact us for a free consultation and quote.",
    },
    {
      question: "How does the process work?",
      answer:
        "We start with a free consultation to discuss your project requirements. Once we have a clear understanding of your needs, we'll provide a quote and timeline. We'll work closely with you throughout the process to ensure your project is a success.",
    },
    {
      question: "Why not hire a full-time designer and developer",
      answer:
        "Hiring full-time staff comes with significant costs beyond just salaries - benefits, equipment, training, and management overhead. With Uniodessy, you get access to a team of experts for a fraction of the cost, with the flexibility to scale up or down as needed.",
    },
    {
      question: "What if I'm not happy with the results?",
      answer:
        "Your satisfaction is our priority. We offer revision rounds to ensure the final product meets your expectations. If you're still not satisfied, we'll work with you to find a solution.",
    },
    {
      question: "How quickly I will receive my project??",
      answer:
        "Project timelines vary depending on scope and complexity. Most projects are delivered within 4-5 days, but we can accommodate rush requests when possible. We'll provide a clear timeline during our initial consultation.",
    },
 
 
    {
      question: "Do you offer a 100% Money-Back Guarantee?",
      answer:
        "Yes! We are confident in delivering high-quality work. If you're not satisfied with the final product and we fail to meet the agreed requirements, we offer a 100% Money-Back Guarantee—no risk, no hassle.",
    },
    
    {
      question : " Will my website work on all devices?",
      answer : "Absolutely! I make sure your website is fully responsive, meaning it will look and function perfectly on mobile, tablet, and desktop."
    }
  ]

  return (
    <section id="faq" className="relative bg-black text-white py-12 lg:py-24 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-[#00d4ff]/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-[#00d4ff]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative text-white p-6 font-inter lg:mx-10 max-w-7xl mx-auto z-10">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-4xl lg:text-5xl mx-auto font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-[#00d4ff]">
            You got Questions? We got Answers.
          </h2>

          <Button
            className="group flex flex-row justify-between gap-5 mx-auto rounded-xl mb-12 bg-gradient-to-r from-[#00d4ff] to-[#20a0b0] hover:shadow-[0_0_30px_#00d4ff] transition-all duration-500"
            asChild
          >
            <Link href="https://cal.com/vetcharoopesh/15min" target="_blank">
              Book a 15-min call
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex-1">
              <Accordion
                type="single"
                collapsible
                className="w-full"
                value={activeItem || undefined}
                onValueChange={(value) => setActiveItem(value)}
              >
                {faqItems.slice(0, Math.ceil(faqItems.length / 2)).map((item, index) => (
                  <AccordionItem
                    key={`faq-left-${index}`}
                    value={`faq-left-${index}`}
                    className={cn(
                      "bg-[#0d0d0d] border border-white/10 rounded-lg my-4 transition-all duration-300",
                      "hover:border-[#00d4ff]/50 hover:bg-[#0f0f0f]",
                      "data-[state=open]:shadow-[0_0_20px_rgba(0,212,255,0.3)] data-[state=open]:border-[#00d4ff]/70",
                      hoveredItem === `faq-left-${index}` ? "transform scale-[1.02]" : "",
                    )}
                    onMouseEnter={() => setHoveredItem(`faq-left-${index}`)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <AccordionTrigger className="p-4 hover:no-underline group relative">
                      <div className="flex items-center w-full">
                        <span className="text-left pr-8 group-hover:text-[#00d4ff] transition-colors duration-300 truncate whitespace-nowrap overflow-hidden">
                          {item.question}
                        </span>
                        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#00d4ff] to-[#20a0b0] group-hover:w-full transition-all duration-700" />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="p-4 pt-0 text-white/80" forceMount>
                      <div
                        className={cn(
                          "transform transition-all duration-500 overflow-hidden",
                          activeItem === `faq-left-${index}`
                            ? "opacity-100 translate-y-0 max-h-96"
                            : "opacity-0 -translate-y-4 max-h-0",
                        )}
                      >
                        {item.answer}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="flex-1">
              <Accordion
                type="single"
                collapsible
                className="w-full"
                value={activeItem || undefined}
                onValueChange={(value) => setActiveItem(value)}
              >
                {faqItems.slice(Math.ceil(faqItems.length / 2)).map((item, index) => (
                  <AccordionItem
                    key={`faq-right-${index}`}
                    value={`faq-right-${index}`}
                    className={cn(
                      "bg-[#0d0d0d] border border-white/10 rounded-lg my-4 transition-all duration-300",
                      "hover:border-[#00d4ff]/50 hover:bg-[#0f0f0f]",
                      "data-[state=open]:shadow-[0_0_20px_rgba(0,212,255,0.3)] data-[state=open]:border-[#00d4ff]/70",
                      hoveredItem === `faq-right-${index}` ? "transform scale-[1.02]" : "",
                    )}
                    onMouseEnter={() => setHoveredItem(`faq-right-${index}`)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <AccordionTrigger className="p-4 hover:no-underline group relative">
                      <div className="flex items-center w-full">
                        <span className="text-left pr-8 group-hover:text-[#00d4ff] transition-colors duration-300 truncate whitespace-nowrap overflow-hidden">
                          {item.question}
                        </span>
                        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#00d4ff] to-[#20a0b0] group-hover:w-full transition-all duration-700" />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="p-4 pt-0 text-white/80" forceMount>
                      <div
                        className={cn(
                          "transform transition-all duration-500 overflow-hidden",
                          activeItem === `faq-right-${index}`
                            ? "opacity-100 translate-y-0 max-h-96"
                            : "opacity-0 -translate-y-4 max-h-0",
                        )}
                      >
                        {item.answer}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

