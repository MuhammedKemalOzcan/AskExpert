import React from 'react'
import Header from '../Components/General/Header'
import Topbar from '../Components/General/Topbar'
import Banner from '../Components/Service/Banner'
import Services from '../Components/Homepage01/Services'
import Contact from '../Components/Homepage01/Contact'
import Footer from '../Components/General/Footer'
import Process from '../Components/Service/Process'
import Pricing from '../Components/Service/Pricing'

function Service({ services }) {
  return (
    <div>
      <Topbar />
      <Header />
      <Banner />
      <Services services={services} />
      <Process />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  )
}

export default Service
