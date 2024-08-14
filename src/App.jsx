import { useState } from 'react'
import './App.css'

import Hero from './components/Hero/Hero'
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs'
import Video from './components/Video/Video'
import Clients from './components/Clients/Clients'
import OurTeam from './components/OurTeam/OurTeam'
import ContactUs from './components/ContactUs/ContactUs'

function App() {

  return (
    <>
    <Hero />
    <WhyChooseUs />
    <Video />
    <Clients />
    <OurTeam />
    <ContactUs />
    </>
  )
}

export default App
