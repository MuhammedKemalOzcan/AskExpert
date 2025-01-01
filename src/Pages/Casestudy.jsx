import React from 'react'
import Topbar from '../Components/General/Topbar'
import Header from '../Components/General/Header'
import Footer from '../Components/General/Footer'
import Contact from '../Components/Homepage01/Contact'
import Banner from '../Components/Casestudy/Banner'
import Gallery from '../Components/Casestudy/Gallery'

function Casestudy({gallery}) {


  return (
    <div>
      <Topbar />
      <Header />
      <Banner />
      <Gallery gallery={gallery} />
      <Contact />
      <Footer />
    </div>
  )
}

export default Casestudy
