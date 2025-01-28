import React from 'react'
import Banner from '../components/BlogSingle.jsx/Banner'
import Content from '../components/BlogSingle.jsx/Content'
import Layout from '../Layout'

function BlogSingle() {
    return (
        <div>
            <Layout>
                <Banner />
                <Content />
            </Layout>

        </div>
    )
}

export default BlogSingle
