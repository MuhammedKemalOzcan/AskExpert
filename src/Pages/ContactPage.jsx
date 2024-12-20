import React from 'react'
import Contact from '../Components/Homepage01/Contact'
import Topbar from '../Components/General/Topbar'
import Header from '../Components/General/Header'
import Footer from '../Components/General/Footer'
import Banner from '../Components/Contact/Banner'
import Talk from '../Components/About/Talk'
import Newsletter from '../Components/Contact/Newsletter'

function ContactPage() {
    return (
        <div>
            <Topbar />
            <Header/>
            <Banner/>
            <Talk/>
            <Newsletter/>
            <Contact />
            <Footer/>
        </div>
    )
}

export default ContactPage
