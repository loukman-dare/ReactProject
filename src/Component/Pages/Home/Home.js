import React from 'react'
import Header from './components/Header/Header'
import Landing from './components/Landing/landing'
import OurHero from './components/OurHero/OurHero'
import OurCoahes from './components/OurCoaches/OurCoahes'
import Footer from './components/Footer/Footer'

function Home() {
  return (
    <>
        <Header />
        <Landing/>
        <OurHero />
        <OurCoahes/>
        <Footer/>
    </>
  )
}

export default Home