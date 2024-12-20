import './App.css'
import services1 from "./assets/services1.svg"
import services2 from "./assets/services2.svg"
import services3 from "./assets/services3.svg"
import services4 from "./assets/services4.svg"
import services5 from "./assets/services5.svg"
import services6 from "./assets/services6.svg"
import servicessingle1 from "./assets/service-single1.svg"
import servicessingle2 from "./assets/service-single2.svg"
import servicessingle3 from "./assets/service-single3.svg"
import servicessingle4 from "./assets/service-single4.svg"
import About from './Pages/About'
import Homepage01 from './Pages/Homepage01'
import Service from './Pages/Service'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Servicesingle from './Pages/Servicesingle';
import { useState } from 'react';
import ContactPage from './Pages/ContactPage'
function App() {

  const [services, setServices] = useState([
    {
      id: 1, image: services1, header: "Audit & Evaluation",
      content: "Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.",
      details: [
        { id: 1, img: servicessingle1, header: "Financial Health Overview", detailContent: "Analyze the financial health of your company by assessing income, expenses, and liabilities to identify areas for improvement." },
        { id: 2, img: servicessingle2, header: "Operational Efficiency", detailContent: "Evaluate operational workflows to uncover inefficiencies and recommend strategies for improvement." },
        { id: 3, img: servicessingle3, header: "Risk Assessment", detailContent: " Identify potential risks to ensure compliance and improve stability." },
        { id: 4, img: servicessingle4, header: "Compliance Check", detailContent: "Review adherence to legal and regulatory standards to avoid penalties or disruptions." },
      ]
    },
    {
      id: 2, image: services2, header: "Financial Projections",
      content: "Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.",
      details: [
        { id: 1, img: servicessingle1, header: "The Balance Sheet", detailContent: "Summarize assets, liabilities, and equity of a business at a specific point in time." },
        { id: 2, img: servicessingle2, header: "Income Statement", detailContent: "Analyze revenue and expenses to measure profitability over a specific period." },
        { id: 3, img: servicessingle3, header: "Financial Plan", detailContent: "Set clear financial goals and create a detailed roadmap to achieve them." },
        { id: 4, img: servicessingle4, header: "Financial Ratios", detailContent: "Assess performance using key ratios like liquidity, profitability, and solvency metrics." },
      ]
    },
    {
      id: 3, image: services3, header: "Funds And Investments",
      content: "Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.",
      details: [
        { id: 1, img: servicessingle1, header: "Funding Sources", detailContent: "Discover the best funding options tailored to your business needs, such as venture capital, loans, or grants." },
        { id: 2, img: servicessingle2, header: "Investment Strategy", detailContent: "Develop a customized investment strategy to maximize returns and align with business goals." },
        { id: 3, img: servicessingle3, header: "Portfolio Management", detailContent: "Maintain a well-balanced portfolio to mitigate risk and achieve financial growth." },
        { id: 4, img: servicessingle4, header: "ROI Analysis", detailContent: "Evaluate the return on investment for existing projects and potential opportunities." },
      ]
    },
    {
      id: 4, image: services4, header: "Finance & Restructing",
      content: "Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.",
      details: [
        { id: 1, img: servicessingle1, header: "Debt Management", detailContent: "Strategically manage and reduce debt to improve cash flow and creditworthiness." },
        { id: 2, img: servicessingle2, header: "Restructuring Plan", detailContent: "Create a roadmap to restructure assets, liabilities, or operations to stabilize or grow the business." },
        { id: 3, img: servicessingle3, header: "Cost Optimization", detailContent: "Identify and implement cost-saving measures to enhance financial health." },
        { id: 4, img: servicessingle4, header: "Liquidity Improvement", detailContent: "Analyze and improve liquidity to ensure the business can meet short-term obligations." },
      ]
    },
    {
      id: 5, image: services5, header: "Taxes & Efficiency",
      content: "Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.",
      details: [
        { id: 1, img: servicessingle1, header: "Tax Compliance", detailContent: "Ensure compliance with local, national, and international tax regulations while minimizing liabilities." },
        { id: 2, img: servicessingle2, header: "Tax Efficiency", detailContent: "Optimize tax structures to take full advantage of applicable deductions and credits." },
        { id: 3, img: servicessingle3, header: "Tax Planning", detailContent: "Develop forward-looking strategies to reduce tax impact on long-term growth." },
        { id: 4, img: servicessingle4, header: "Audit Preparation", detailContent: "Prepare for tax audits by maintaining accurate and organized records." },
      ]
    },
    {
      id: 6, image: services6, header: "Investment Banking",
      content: "Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.",
      details: [
        { id: 1, img: servicessingle1, header: "Mergers & Acquisitions", detailContent: " Facilitate successful mergers, acquisitions, or divestitures to achieve business objectives." },
        { id: 2, img: servicessingle2, header: "Capital Raising", detailContent: " Secure the capital your business needs through equity or debt financing." },
        { id: 3, img: servicessingle3, header: "Valuation Services", detailContent: "Accurately value your business or assets for strategic planning or sale." },
        { id: 4, img: servicessingle4, header: "Market Analysis", detailContent: "Conduct detailed market research to identify growth opportunities and trends." },
      ]
    }
  ]);

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage01 services={services} />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Service services={services} />} />
          <Route path='/service-single/:id' element={<Servicesingle services={services} />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
