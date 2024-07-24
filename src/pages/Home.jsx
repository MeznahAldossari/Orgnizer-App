import React, { useEffect , useState} from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Cards from '../components/Cards'
import PartnersSection from '../components/PartnersSection'

import Footer from '../components/Footer'




const Home = () => {
  
  return (
    <>
    <Nav />
    <Hero />
    <Cards />
    <PartnersSection />
    <Footer />
    </>

  )
}

export default Home