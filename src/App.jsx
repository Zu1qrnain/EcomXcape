import React from 'react'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import TrustTicker from './components/sections/TrustTicker'
import Services from './components/sections/Services'
import Platforms from './components/sections/Platforms'
import TrustpilotReviews from './components/sections/TrustpilotReviews'
import Process from './components/sections/Process'
import Why from './components/sections/Why'
import FAQ from './components/sections/FAQ'
import CTA from './components/sections/CTA'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'
import QualifyModal from './components/QualifyModal'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustTicker />
      <Services />
      <Platforms />
      <Process />
      <Why />
      <TrustpilotReviews />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
      <QualifyModal />
    </>
  )
}

export default App
