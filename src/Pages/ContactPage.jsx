import React from 'react'
import Contact from '../Components/Homepage01/Contact'
import Banner from '../Components/Contact/Banner'
import Talk from '../Components/About/Talk'
import Newsletter from '../Components/Contact/Newsletter'
import Layout from '../Layout'

function ContactPage() {
    return (
        <div>
            <Layout>
                <Banner />
                <Talk />
                <Newsletter />
                <Contact />
            </Layout>

        </div>
    )
}

export default ContactPage
