import React from 'react'
import Navbar from './assets/Components/Navbar'
import HeroSection from './assets/Components/HeroSection'
import AboutUs from './assets/Components/AboutUS'
import WeAreBest from './assets/Components/WeAreBest'
import WeAreBestLeft from './assets/Components/WeAreBestLeft'
import AttractiveFeatures from './assets/Components/AttractiveFeature'


const App = () => {
  return (
   <section>
    <Navbar />
    <HeroSection />
    <AboutUs />
    <WeAreBest />
    <WeAreBestLeft />
    <AttractiveFeatures />
   </section>
  )
}

export default App