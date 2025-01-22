import React, { useEffect } from 'react'
import Topbar from '../Components/General/Topbar'
import Header from '../Components/General/Header'
import Footer from '../Components/General/Footer'
import Newsletter from '../Components/Contact/Newsletter'
import Banner from '../Components/Case-single/Banner'
import Overview from '../Components/Case-single/Overview'
import Storyboard from '../Components/Case-single/Storyboard'
import Others from '../components/Case-single/Others'

function Casesingle() {


  return (
    <div>
      <Topbar />
      <Header />
      <Banner />
      <Overview />
      <Storyboard />
      <Newsletter />
      <Others />
      <Footer />
    </div>
  )
}

export default Casesingle
