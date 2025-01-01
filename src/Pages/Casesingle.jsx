import React from 'react'
import Topbar from '../Components/General/Topbar'
import Header from '../Components/General/Header'
import Footer from '../Components/General/Footer'
import Newsletter from '../Components/Contact/Newsletter'
import Banner from '../Components/Case-single/Banner'
import Overview from '../Components/Case-single/Overview'
import Storyboard from '../Components/Case-single/Storyboard'

function Casesingle({ gallery }) {
  return (
    <div>
      <Topbar />
      <Header />
      <Banner gallery={gallery} />
      <Overview gallery={gallery} />
      <Storyboard gallery={gallery} />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Casesingle
