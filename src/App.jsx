import './App.css'
import services1 from "./assets/services1.svg"
import services2 from "./assets/services2.svg"
import services3 from "./assets/services3.svg"
import services4 from "./assets/services4.svg"
import services5 from "./assets/services5.svg"
import services6 from "./assets/services6.svg"
import About from './Pages/About'
import Homepage01 from './Pages/Homepage01'
import Service from './Pages/Service'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Servicesingle from './Pages/Servicesingle';
import { useState } from 'react';
function App() {

  const [services, setServices] = useState([
    { id: 1, image: services1, header: "Audit & Evaluation", content: "Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling." },
    { id: 2, image: services2, header: "Financial Projections", content: "Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling." },
    { id: 3, image: services3, header: "Funds And Investments", content: "Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling." },
    { id: 4, image: services4, header: "Finance & Restructing", content: "Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling." },
    { id: 5, image: services5, header: "Taxes & Efficiency", content: "Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling." },
    { id: 6, image: services6, header: "InvestmentBanking", content: "Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling." }
  ]);

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage01 services={services} />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Service services={services} />} />
          <Route path='/service-single' element={<Servicesingle />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
