import Hero from "../components/ui/Hero"
// import WebSlider from "../components/ui/website-showcase-slider"np
import WebSliderf from "../components/ui/webslider"
import Reviews from "../components/ui/testimonial-section"
import Faqs from "../components/ui/faq-section"
import Webpro from "../components/ui/Webpro"
import Benefit from "../components/ui/features-section"
import Service from "../components/ui/service"
import Footer from "../components/ui/footer"

export default function Home() {
  return (
    <div>
      <Hero />
      <WebSliderf/>
      <Webpro/>
      <Reviews/>
      <Benefit/>
      <Service/>
      <Faqs />
      <Footer/>

    </div>
  )
}
