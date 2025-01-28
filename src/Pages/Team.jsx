import React from 'react'
import Banner from '../Components/Team/Banner'
import Members from '../Components/Team/Members'
import Cta from '../Components/Team/Cta'
import Layout from '../Layout'

function Team({ members }) {
    return (
        <div>
            <Layout>
                <Banner />
                <Members members={members} />
                <Cta />
            </Layout>


        </div>
    )
}

export default Team
