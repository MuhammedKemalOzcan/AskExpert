import './App.css'
import member1 from "./assets/member1.svg"
import member2 from "./assets/member2.svg"
import member3 from "./assets/member3.svg"
import member4 from "./assets/member4.svg"
import member5 from "./assets/member5.svg"
import member6 from "./assets/member6.svg"
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
import { useState } from 'react';
import ContactPage from './Pages/ContactPage'
import Team from './Pages/Team'
import Teamsingle from './Pages/Teamsingle'
import Casestudy from './Pages/Casestudy'
import Blog from './Pages/Blog'
import Casesingle from './Pages/Casesingle'
import { ServiceProvider } from './Context'
function App() {

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

  return (
    <div>
      <ServiceProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Homepage01 blog={blog} />} />
            <Route path='/about' element={<About members={members} />} />
            <Route path='/services' element={<Service />} />
            <Route path='/service-single/:id' element={<Servicesingle />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/team' element={<Team members={members} />} />
            <Route path='/team-single/:id' element={<Teamsingle members={members} />} />
            <Route path='/work' element={<Casestudy />} />
            <Route path='/blog' element={<Blog blog={blog} />} />
            <Route path='/case-single/:id' element={<Casesingle />} />
          </Routes>
        </Router>
      </ServiceProvider>

    </div>
  )
}

export default App
