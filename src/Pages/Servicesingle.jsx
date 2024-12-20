import React from 'react'
import Services from '../Components/Service-Single/Services'
import Topbar from '../Components/General/Topbar'
import Header from '../Components/General/Header'
import Footer from '../Components/General/Footer'
import Contact from '../Components/Service-Single/Contact'
import Faq from '../Components/Service-Single/Faq'
import Banner from '../Components/Service-Single/Banner'
import Expect from '../Components/Service-Single/Expect'
import Clients from '../Components/Homepage01/Clients'
import Video from '../Components/Service-Single/Video'

function Servicesingle() {
    return (
        <div>
            <Topbar />
            <Header />
            <Banner/>
            <Services />
            <Expect/>
            <Clients/>
            <Video/>
            <Contact/>
            <Faq/>
            <Footer/>
            
        </div>
    )
}

export default Servicesingle
