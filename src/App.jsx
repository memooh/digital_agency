import { useState } from 'react'
import './App.css'

import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs'
import Video from './components/Video/Video'
import Clients from './components/Clients/Clients'
import OurTeam from './components/OurTeam/OurTeam'
import ContactUs from './components/ContactUs/ContactUs'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
    <Navbar />
    <Hero />
    <WhyChooseUs />
    <Video />
    <Clients />
    <OurTeam />
    <ContactUs />
    <Footer />
    </>
  )
}

export default App
