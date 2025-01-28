import React from 'react'
import Topbar from '../Components/General/Topbar'
import Header from '../Components/General/Header'
import Footer from '../Components/General/Footer'
import Cta from '../Components/Team/Cta'
import Articles from '../Components/Blog/Articles'
import Layout from '../Layout'

function Blog({ blog }) {
    return (
        <div>
            <Layout>
                <Articles blog={blog} />
                <Cta />
            </Layout>
        </div>
    )
}

export default Blog
