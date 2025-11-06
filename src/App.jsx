import React from 'react'
import Navbar from './assets/Components/Navbar'
import HeroSection from './assets/Components/HeroSection'
import AboutUs from './assets/Components/AboutUS'
import WeAreBest from './assets/Components/WeAreBest'
import WeAreBestLeft from './assets/Components/WeAreBestLeft'
import AttractiveFeatures from './assets/Components/AttractiveFeature'
import Deal from './assets/Components/Deal'
import AwesomeProducts from './assets/Components/AwesomeProducts'
import WhyChooseUs from './assets/Components/WhyChooseUs'
import Compare from './assets/Components/Compare'
import Testimonial from './assets/Components/Testimonial'


const App = () => {
  return (
   <section>
    <Navbar />
    <HeroSection />
    <AboutUs />
    <WeAreBest />
    <WeAreBestLeft />
    <AttractiveFeatures />
    <Deal />
    <AwesomeProducts />
    <WhyChooseUs />
    <Compare />
    <Testimonial />
   </section>
  )
}

export default App