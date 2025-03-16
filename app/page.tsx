import Hero from "../components/ui/Hero"
import WebSlider from "../components/ui/website-showcase-slider"
import Reviews from "../components/ui/testimonial-section"
import Faqs from "../components/ui/faq-section"
import Webpro from "../components/ui/Webpro"
import Webprosec from "../components/ui/webprojectsecond"
export default function Home() {
  return (
    <div>
      <Hero />
      <WebSlider/>
      <Webpro/>
      <Reviews/>
      <Faqs />
    

    </div>
  )
}
