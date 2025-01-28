import React from 'react'
import Banner from '../Components/Service/Banner'
import Services from '../Components/Homepage01/Services'
import Contact from '../Components/Homepage01/Contact'
import Process from '../Components/Service/Process'
import Pricing from '../Components/Service/Pricing'
import Layout from '../Layout'

function Service({ services }) {
  return (
    <div>
      <Layout>
        <Banner />
        <Services services={services} />
        <Process />
        <Pricing />
        <Contact />
      </Layout>
    </div>
  )
}

export default Service
