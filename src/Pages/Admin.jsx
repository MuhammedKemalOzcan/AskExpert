import React from 'react'
import Login from '../components/Admin/Login'
import Banner from '../components/Admin/Banner'
import Layout from '../Layout'

function Admin() {
  return (

    <div>
      <Layout>
        <Banner />
        <Login />
      </Layout>
    </div>


  )
}

export default Admin
