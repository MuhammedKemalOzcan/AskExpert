import React from 'react'
import Header from '../Components/General/Header'
import Topbar from '../Components/General/Topbar'
import Footer from '../Components/General/Footer'
import Banner from '../components/BlogSingle.jsx/Banner'
import Content from '../components/BlogSingle.jsx/Content'

function BlogSingle() {
    return (
        <div>
            <Topbar />
            <Header />
            <Banner/>
            <Content/>
        </div>
    )
}

export default BlogSingle
