import React from 'react'
import HeroSection from '../Components/HeroSection'
import About from '../Components/About'
import Qualities from '../Components/Qualities'
import Team from '../Components/Team'
import WhoAreWe from '../Components/WhoAreWe'
import Menu from '../Components/Menu'
import Footer from '../Components/Footer'
import Reservation from '../Components/Reservation'

const Home = () => {
  return (
   <>
    <HeroSection />
    <About />
    <Qualities />
    <Team/>
    <Reservation /> 
    <WhoAreWe />
    <Menu />
    <Footer />
   </>
  )
}

export default Home
