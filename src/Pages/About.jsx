import React from 'react'
import Banner from '../Components/About/Banner'
import Vision from '../Components/About/Vision'
import Counter from '../Components/Homepage01/Counter'
import Features from '../Components/About/Features'
import Video from '../Components/About/Video'
import Team from '../Components/About/Team'
import Cta from '../Components/Homepage01/Cta'
import Layout from '../Layout'

function About({ members }) {
  return (

    <div>
      <Layout>
        <Banner />
        <Vision />
        <Counter />
        <Features />
        <Video />
        <Team members={members} />
        <Cta />
      </Layout>
    </div>

  )
}

export default About
