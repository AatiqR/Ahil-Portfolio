import Hero from "../components/ui/Hero"
import Client  from "../components/ui/clientlogo"
import WebSliderf from "../components/ui/webslider"
import Reviews from "../components/ui/testimonial-section"
import Webpro from "../components/ui/Webpro"
import Workflow from "../components/ui/workflow"
import Benefit from "../components/ui/features-section"
import Service from "../components/ui/service"
import Faqs from "../components/ui/faq-section"
import Booking from "../components/ui/booking"
import Footer from "../components/ui/footer"

export default function Home() {
  return (
    <div>
      <Hero />
      <Client/>
      <WebSliderf/>
      <Webpro/>
      <Workflow/>
      <Reviews/>
      <Benefit/>
      <Service/>
      <Faqs />
      <Booking/>
      <Footer/>
    </div>
  )
}
