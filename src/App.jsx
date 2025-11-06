import React from 'react'
import Navbar from './assets/Components/Navbar'
import HeroSection from './assets/Components/HeroSection'
import AboutUs from './assets/Components/AboutUS'
import WeAreBest from './assets/Components/WeAreBest'
import WeAreBestLeft from './assets/Components/WeAreBestLeft'
import AttractiveFeatures from './assets/Components/AttractiveFeature'
import Deal from './assets/Components/Deal'
import AwesomeProducts from './assets/Components/AwesomeProducts'


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
   </section>
  )
}

export default App