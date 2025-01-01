import React from 'react'
import Header from '../Components/General/Header'
import Topbar from '../Components/General/Topbar'
import Footer from '../Components/General/Footer'
import Banner from '../Components/Team/Banner'
import Members from '../Components/Team/Members'
import Cta from '../Components/Team/Cta'

function Team({members}) {
    return (
        <div>
            <Topbar />
            <Header />
            <Banner/>
            <Members members={members} />
            <Cta/>
            <Footer/>
        </div>
    )
}

export default Team
