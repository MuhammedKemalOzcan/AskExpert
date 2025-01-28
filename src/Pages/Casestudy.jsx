import React from 'react'
import Contact from '../Components/Homepage01/Contact'
import Banner from '../Components/Casestudy/Banner'
import Gallery from '../Components/Casestudy/Gallery'
import Layout from '../Layout'

function Casestudy({ gallery }) {


  return (
    <div>
      <Layout>
        <Banner />
        <Gallery gallery={gallery} />
        <Contact />
      </Layout>

    </div>
  )
}

export default Casestudy
