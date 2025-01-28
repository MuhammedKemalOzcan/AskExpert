import React from 'react'
import Services from '../Components/Service-Single/Services'
import Contact from '../Components/Service-Single/Contact'
import Faq from '../Components/Service-Single/Faq'
import Banner from '../Components/Service-Single/Banner'
import Expect from '../Components/Service-Single/Expect'
import Clients from '../Components/Homepage01/Clients'
import Video from '../Components/Service-Single/Video'
import Layout from '../Layout'

function Servicesingle({ services }) {
    return (
        <div>
            <Layout>
                <Banner />
                <Services services={services} />
                <Expect />
                <Clients />
                <Video />
                <Contact />
                <Faq />
            </Layout>

        </div>
    )
}

export default Servicesingle
