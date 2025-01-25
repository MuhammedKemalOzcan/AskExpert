import React from 'react'
import Header from '../Components/General/Header'
import Topbar from '../Components/General/Topbar'
import Footer from '../Components/General/Footer'
import PageControl from '../components/Panel/PageControl'

function Panel() {
    return (
        <div>
            <Topbar />
            <Header />
            <PageControl />
            <Footer />
        </div>
    )
}

export default Panel
