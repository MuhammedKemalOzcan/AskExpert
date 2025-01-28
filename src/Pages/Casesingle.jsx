import React, { useEffect } from 'react'
import Newsletter from '../Components/Contact/Newsletter'
import Banner from '../Components/Case-single/Banner'
import Overview from '../Components/Case-single/Overview'
import Storyboard from '../Components/Case-single/Storyboard'
import Others from '../components/Case-single/Others'
import Layout from '../Layout'

function Casesingle() {


  return (
    <div>
      <Layout>
        <Banner />
        <Overview />
        <Storyboard />
        <Newsletter />
        <Others />
      </Layout>
    </div>
  )
}

export default Casesingle
