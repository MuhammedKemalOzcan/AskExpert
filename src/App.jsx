import './App.css'
import member1 from "./assets/member1.svg"
import member2 from "./assets/member2.svg"
import member3 from "./assets/member3.svg"
import member4 from "./assets/member4.svg"
import member5 from "./assets/member5.svg"
import member6 from "./assets/member6.svg"
import gallery1 from "./assets/gallery1.jpg"
import gallery2 from "./assets/gallery2.svg"
import gallery3 from "./assets/gallery3.svg"
import gallery4 from "./assets/gallery4.svg"
import gallery5 from "./assets/gallery5.svg"
import gallery6 from "./assets/gallery6.svg"
import blog1 from "./assets/blog1.svg"
import blog2 from "./assets/blog2.svg"
import blog3 from "./assets/blog3.svg"
import blog4 from "./assets/blog4.svg"
import blog5 from "./assets/blog5.svg"
import blog6 from "./assets/blog6.svg"
import user1 from "./assets/user1.svg"
import user2 from "./assets/user2.svg"
import About from './Pages/About'
import Homepage01 from './Pages/Homepage01'
import Service from './Pages/Service'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Servicesingle from './Pages/Servicesingle';
import { useEffect, useState } from 'react';
import ContactPage from './Pages/ContactPage'
import Team from './Pages/Team'
import Teamsingle from './Pages/Teamsingle'
import Casestudy from './Pages/Casestudy'
import Blog from './Pages/Blog'
import Casesingle from './Pages/Casesingle'
import axios from 'axios'
import { ServiceProvider } from './Context'
function App() {

  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const response = await axios.get("https://localhost:7287/api/Services");
      setServices(response.data);
    }
    fetchServices();
  }, [])


  const [members, setMembers] = useState([
    {
      id: 1, img: member1, position: "CEO at Company", name: "Sarah Jasmine", info: "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
      content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui. Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.",
      experiences: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui. Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      id: 2, img: member2, position: "Manager", name: "John Carter", info: "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
      content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui. Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.",
      experiences: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui. Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      id: 3, img: member3, position: "CEO at Company", name: "Daisy Stella", info: "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
      content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui. Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.",
      experiences: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui. Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      id: 4, img: member4, position: "CEO at Company", name: "Maya Elizabeth", info: "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
      content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui. Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.",
      experiences: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui. Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      id: 5, img: member5, position: "CEO at Company", name: "Ryan Jackson", info: "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
      content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui. Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.",
      experiences: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui. Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      id: 6, img: member6, position: "CEO at Company", name: "Lilly Victoria", info: "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
      content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui. Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.",
      experiences: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui. Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
  ])

  const [blog, setBlog] = useState([
    { id: 1, image: blog1, header: "Consulting Fees Study 2019 (And How To Raise Your Rates)", content: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.", user: "John Carter", userimg: user1, publishedDate: "September 1,2022" },
    { id: 2, image: blog2, header: "What is growth hacking and how to apply it to your startup", content: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.", user: "Nayra Melson", userimg: user2, publishedDate: "September 1,2022" },
    { id: 3, image: blog3, header: "Five Steps to Implement Motivation in Management", content: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.", user: "John Carter", userimg: user1, publishedDate: "September 1,2022" },
    { id: 4, image: blog4, header: "Team Identifiers, Benefits, and How to Build One that Works", content: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.", user: "John Carter", userimg: user1, publishedDate: "September 1,2022" },
    { id: 5, image: blog5, header: "Professional Development Goals: Steps and Examples", content: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.", user: "John Carter", userimg: user1, publishedDate: "September 1,2022" },
    { id: 6, image: blog6, header: "A Guide on What to Bring on the First Day of Work", content: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.", user: "John Carter", userimg: user1, publishedDate: "September 1,2022" },
  ])

  const [gallery, setGallery] = useState([
    {
      id: 1, title: "Taxes & Efficiency", image: gallery1, field: "Taxes & Efficiency",
      overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      points: {
        point1: "It brings the right people together with all the right information and tools to get work done",
        point2: "We provide operational efficiency, data security, and flexible scale",
        point3: "We provide operational efficiency, data security, and flexible scale",
        point4: "Delivers the tools you need to save time Improve field performance always"
      },
      storyboard: "Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service. Objectively innovate empowered manufactured products whereas parallel platforms. Holistically predominate extensible testing procedures for reliable supply chains. Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing. Holistically pontificate installed base portals after maintainable products completely pursue scalable customer service.",
      result: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring."

    },
    {
      id: 2, title: "Audit & Evaluation", image: gallery2, field: "Audit & Evaluation",
      overview: "Conducting a thorough evaluation of existing processes and systems to identify inefficiencies and areas for improvement. Providing businesses with actionable insights to ensure compliance, accuracy, and growth.",
      points: {
        point1: "Identify key gaps in operational workflows.",
        point2: "Enhance compliance with industry regulations.",
        point3: "Provide detailed reports with practical recommendations.",
      },
      storyboard: "The process begins with collecting relevant data from operational systems, followed by an in-depth analysis of performance metrics. Stakeholders are engaged in collaborative workshops to highlight key improvement areas and align goals with actionable strategies.",
      result: "The evaluation resulted in streamlined operations, reducing inefficiencies by 30% and improving compliance metrics. Clear strategies were implemented for sustainable growth and operational excellence."
    },
    {
      id: 3, title: "Funds & Investment", image: gallery3, field: "Investment banking",
      overview: "Providing strategic advice to optimize fund allocation and maximize investment returns. Empowering organizations to make informed financial decisions through comprehensive research and forecasting.",
      points: {
        point1: "Assess current investment portfolios for performance and risks.",
        point2: "Recommend diversification strategies to minimize risks.",
        point3: "Enhance profitability through data-driven investment approaches.",
      },
      storyboard: "Our experts analyze market trends and past fund performances to craft tailored investment strategies. Client collaboration ensures that financial goals and risk tolerance align perfectly with the proposed solutions.",
      result: "Clients achieved an average 20% return on investment over 12 months. Risk exposure was minimized by strategically diversifying assets and reallocating funds into high-growth opportunities."
    },
    {
      id: 4, title: "Finance & Restructring", image: gallery4, field: "Financial Plan",
      overview: "Helping businesses navigate financial challenges and re-align their structures for long-term stability. Focusing on cash flow management, debt restructuring, and improving overall financial health.",
      points: {
        point1: "Analyze financial statements to uncover weaknesses.",
        point2: "Develop restructuring plans to ensure sustainability.",
        point3: "Optimize resource allocation to improve profitability.",
      },
      storyboard: "The restructuring journey begins with a financial health assessment. Debt repayment schedules are renegotiated, while unnecessary expenses are trimmed. Our team provides ongoing support to implement cost-saving measures effectively.",
      result: "The company reduced operational costs by 15% and improved net cash flow by $1.2 million. Restructuring efforts positioned the business for steady growth and financial stability."
    },
    {
      id: 5, title: "Investment Banking", image: gallery5, field: "Investment banking",
      overview: "Offering professional advisory services for mergers, acquisitions, and capital raising. Facilitating complex financial transactions with precision and ensuring clients achieve their strategic objectives.",
      points: {
        point1: "Conduct due diligence for potential mergers or acquisitions.",
        point2: "Advise on capital raising strategies for expansion.",
        point3: "Provide comprehensive financial modeling and forecasting.",
      },
      storyboard: "Detailed market research and financial analysis form the foundation of our investment banking services. We coordinate with stakeholders to ensure smooth execution of transactions while maintaining confidentiality and efficiency.",
      result: "Successfully closed a $50 million acquisition deal within six months. Helped clients raise capital through strategic partnerships, resulting in a 35% growth in market share."
    },
    {
      id: 6, title: "Financial & Projections", image: gallery6, field: "Financial Plan",
      overview: "Developing accurate financial projections and models to guide businesses in strategic decision-making. Assisting in forecasting future revenues, costs, and market trends.",
      points: {
        point1: "Create detailed financial models tailored to business goals.",
        point2: "Predict future performance based on market analysis.",
        point3: "Offer insights to support informed decision-making.",
      },
      storyboard: "The process involves gathering historical data and analyzing market conditions to build predictive financial models. Collaborating with key stakeholders ensures that projections align with organizational goals and growth strategies.",
      result: "The financial projections provided clarity in budgeting and forecasting, resulting in a 40% reduction in budget deviations. Clients were equipped with actionable insights to navigate market changes confidently."
    }
  ]);

  return (
    <div>
      <ServiceProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Homepage01 services={services} blog={blog} gallery={gallery} />} />
            <Route path='/about' element={<About members={members} />} />
            <Route path='/services' element={<Service services={services} />} />
            <Route path='/service-single/:id' element={<Servicesingle services={services} />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/team' element={<Team members={members} />} />
            <Route path='/team-single/:id' element={<Teamsingle members={members} />} />
            <Route path='/case-study' element={<Casestudy gallery={gallery} />} />
            <Route path='/blog' element={<Blog blog={blog} />} />
            <Route path='/case-single/:id' element={<Casesingle gallery={gallery} />} />
          </Routes>
        </Router>
      </ServiceProvider>

    </div>
  )
}

export default App
