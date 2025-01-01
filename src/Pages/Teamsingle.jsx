import React from 'react'
import Header from '../Components/General/Header'
import Topbar from '../Components/General/Topbar'
import Footer from '../Components/General/Footer'
import Newsletter from '../Components/Contact/Newsletter'
import Memberdetails from '../Components/Team/Memberdetails'

function Teamsingle({ members }) {
    return (
        <div>
            <Topbar />
            <Header />
            <Memberdetails members={members} />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Teamsingle
