import './App.css'
import About from './Pages/About'
import Homepage01 from './Pages/Homepage01'
import Service from './Pages/Service'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Servicesingle from './Pages/Servicesingle';
import ContactPage from './Pages/ContactPage'
import Team from './Pages/Team'
import Teamsingle from './Pages/Teamsingle'
import Casestudy from './Pages/Casestudy'
import Blog from './Pages/Blog'
import Casesingle from './Pages/Casesingle'
import { ServiceProvider } from './Context'
import BlogSingle from './Pages/Blog-Single';
import Pages from './Pages/Pages';
import Admin from './Pages/Admin';
import Panel from './Pages/Panel';
import Homepage02 from './Pages/Homepage02';
import NotFound from './Pages/NotFound';
import { LayoutProvider, useLayout } from './LayoutContext';
import HomepageLayout from './HomepageLayout';
function App() {

  return (
    <div>
      <LayoutProvider>
        <ServiceProvider>
          <Router>
            <Routes>
              <Route path='/' element={<HomepageLayout />} />
              <Route path='/about' element={<About />} />
              <Route path='/services' element={<Service />} />
              <Route path='/service-single/:id' element={<Servicesingle />} />
              <Route path='/contact' element={<ContactPage />} />
              <Route path='/team' element={<Team />} />
              <Route path='/team-single/:id' element={<Teamsingle />} />
              <Route path='/work' element={<Casestudy />} />
              <Route path='/blog' element={<Blog />} />
              <Route path='/blog-single/:id' element={<BlogSingle />} />
              <Route path='/case-single/:id' element={<Casesingle />} />
              <Route path='/pages' element={<Pages />} />
              <Route path='/admin' element={<Admin />} />
              <Route path='/panel' element={<Panel />} />
              <Route path='/*' element={<NotFound />} />
            </Routes>
          </Router>
        </ServiceProvider>
      </LayoutProvider>
    </div>
  )
}

export default App
