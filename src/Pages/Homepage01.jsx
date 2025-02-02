import React from 'react'
import About from '../Components/Homepage01/About'
import Banner from '../Components/Homepage01/Banner'
import Clients from '../Components/Homepage01/Clients'
import Counter from '../Components/Homepage01/Counter'
import Gallery from '../Components/Homepage01/Gallery'
import Process from '../Components/Homepage01/Process'
import Services from '../Components/Homepage01/Services'
import Testimonial from '../Components/Homepage01/Testimonial'
import Cta from '../Components/Homepage01/Cta'
import Blog from '../Components/Homepage01/Blog'
import Contact from '../Components/Homepage01/Contact'
import Layout from '../Layout'

function Homepage01({ services, blog, gallery }) {
    return (
        <div className='flex flex-col'>
            <Layout>
                <Banner />
                <Clients />
                <About />
                <Services services={services} />
                <Process />
                <Gallery gallery={gallery} />
                <Counter />
                <Testimonial />
                <Cta />
                <Blog blog={blog} />
                <Contact />
            </Layout>
        </div>
    )
}

export default Homepage01
