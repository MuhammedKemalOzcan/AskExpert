import React from 'react'
import Topbar from '../Components/General/Topbar'
import Header from '../Components/General/Header'
import Banner from '../Components/About/Banner'
import Vision from '../Components/About/Vision'
import Counter from '../Components/Homepage01/Counter'
import Features from '../Components/About/Features'
import Video from '../Components/About/Video'
import Team from '../Components/About/Team'
import Cta from '../Components/Homepage01/Cta'
import Footer from '../Components/General/Footer'

function About() {
  return (
    <div>
      <Topbar/>
      <Header/>
      <Banner/>
      <Vision/>
      <Counter/>
      <Features/>
      <Video/>
      <Team/>
      <Cta/>
      <Footer/>
    </div>
  )
}

export default About
