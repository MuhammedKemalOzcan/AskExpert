import React from 'react'
import Header from '../Components/General/Header'
import Topbar from '../Components/General/Topbar'
import Footer from '../Components/General/Footer'
import Navigate from '../components/Pages/Navigate'

function Pages() {
    return (
        <div>
            <Topbar />
            <Header />
            <Navigate/>
            <Footer />
        </div>
    )
}

export default Pages
