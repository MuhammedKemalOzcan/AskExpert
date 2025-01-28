import React from 'react'
import Header from '../Components/General/Header'
import Topbar from '../Components/General/Topbar'
import Footer from '../Components/General/Footer'
import PageNotFound from '../components/General/PageNotFound'

function NotFound() {
    return (
        <div>
            <Header />
            <Topbar />
            <PageNotFound />
            <Footer />
        </div>
    )
}

export default NotFound
