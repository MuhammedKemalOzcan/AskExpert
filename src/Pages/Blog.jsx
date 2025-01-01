import React from 'react'
import Topbar from '../Components/General/Topbar'
import Header from '../Components/General/Header'
import Footer from '../Components/General/Footer'
import Cta from '../Components/Team/Cta'
import Articles from '../Components/Blog/Articles'

function Blog({ blog }) {
    return (
        <div>
            <Topbar />
            <Header />
            <Articles blog={blog} />
            <Cta />
            <Footer />
        </div>
    )
}

export default Blog
