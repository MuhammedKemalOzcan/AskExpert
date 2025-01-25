import React from 'react'
import Topbar from '../Components/General/Topbar'
import Header from '../Components/General/Header'
import Footer from '../Components/General/Footer'
import Login from '../components/Admin/Login'
import Banner from '../components/Admin/Banner'

function Admin() {
  return (
    <div>
      <Topbar/>
      <Header/>
      <Banner/>
      <Login/>
      <Footer/>
    </div>
  )
}

export default Admin
