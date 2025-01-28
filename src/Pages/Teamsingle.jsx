import React from 'react'
import Newsletter from '../Components/Contact/Newsletter'
import Memberdetails from '../Components/Team/Memberdetails'
import Layout from '../Layout'

function Teamsingle({ members }) {
    return (
        <div>
            <Layout>
                <Memberdetails members={members} />
                <Newsletter />
            </Layout>

        </div>
    )
}

export default Teamsingle
