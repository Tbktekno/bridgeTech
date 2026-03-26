import React, { Suspense } from 'react'
import Navbar from './components/common/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Portfolio from './sections/Portfolio'
import WhyChooseUs from './sections/WhyChooseUs'
import VisionMission from './sections/VisionMission'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Background Ornaments / Global Blur */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[10%] right-[5%] w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px]" />
      </div>

      <Navbar />

      <main className="relative z-10 w-full">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <WhyChooseUs />
        {/* <VisionMission /> */}
        <Contact />
      </main>

      <Footer />

      {/* Visual Enhancements: Progress bar (optional) or just bottom shadow */}
      <div className="fixed bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-gold to-primary z-50 pointer-events-none opacity-20" />
    </div>
  )
}

export default App
