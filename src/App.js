
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './pages/Home';
import CareerPage from './pages/CareerPage';
import ContactPage from './pages/Contect';
import OurTeams from './pages/OurTeams';
import CreateTeam from './pages/admin/teams/createTeam';
import GetTeamTable from './pages/admin/teams/getTeamTable';
import AdminDashboard from './pages/admin/dashboard/AdminDashboard';
import ShowContact from './pages/admin/contacts/ShowContacts';
import AboutUs from './pages/AboutUs';
import Service from './pages/Service';
import ShoowClients from './pages/admin/clients/ShowClients';
import AddClient from './pages/admin/clients/AddClient';
import ClientPage from './elements/ClientPage';
import Portfolio from './elements/Portfolio';
import TestimonialPage from './pages/Testimonials_Page';
import OurClient from './pages/OurClient';
import Abvv from './pages/portfolioSubPage/Abvv';
import Jinni from './pages/portfolioSubPage/Jinni';
import OutreachApp from './pages/portfolioSubPage/OutreachApp';
import OutreachWeb from './pages/portfolioSubPage/OutreachWeb ';
import LearnEarn from './pages/portfolioSubPage/LearnEarn';
import RealStateBaba from './pages/portfolioSubPage/RealStateBaba';
import Railway from './pages/portfolioSubPage/Railway';
import Footer from './component/Footer';
import ContactForm from './pages/ContactForm';
import PortfolioData from './pages/portfolioData';
import Loader from './elements/loader';



function App() {
  return (
    <HelmetProvider>
      <div>
   <Router>
     <Routes>
    <Route exact path="/" element={<HomePage/>}/>
    <Route exact path="/careers" element={<CareerPage/>}/>
    <Route exact path="/contact" element={<ContactPage/>}/>
    <Route exact path="/our-teams" element={<OurTeams/>}/>
    <Route exact path="/about" element={<AboutUs/>}/>
    <Route exact path="/service" element={<Service/>}/>
    <Route exact path="/clients" element={<OurClient/>}/>
    <Route exact path="/portfolio" element={<Portfolio/>}/>
    <Route exact path="/testimonial" element={<TestimonialPage/>}/>
    <Route exact path="/abvv-subpage" element={<Abvv/>}/>
    <Route exact path="/jinni-subpage" element={<Jinni />}/>
    <Route exact path="/outreach-app-subpage" element={<OutreachApp />}/>
    <Route exact path="/outreach-web-subpage" element={<OutreachWeb />}/>
    <Route exact path="/learn&earn-subpage" element={<LearnEarn />}/>
    <Route exact path="/realstatebaba-subpage" element={<RealStateBaba />}/>
    <Route exact path="/learnearn-subpage" element={<LearnEarn />}/>
    <Route exact path="/outreach-web-subpage" element={<OutreachWeb />}/>
    <Route exact path="/railway-subpage" element={<Railway />}/>
    <Route exact path="/contactform" element={<ContactForm />}/>
    <Route exact path="/portfoliodata" element={<PortfolioData />}/>
    <Route exact path="/loader" element={<Loader/>}/>

    <Route exact path="/admin/dashboard" element={<AdminDashboard/>}/>
    <Route exact path="/admin/add-team" element={<CreateTeam/>}/>
    <Route exact path="/admin/get-teams-details/:id" element={<CreateTeam/>}/>
    <Route exact path="/admin/get-teams-details" element={<GetTeamTable/>}/>
    <Route exact path="/admin/contacts" element={<ShowContact/>}/>
    <Route exact path="/admin/clients" element={<ShoowClients/>}/>
    <Route exact path="/admin/add-client" element={<AddClient/>}/>
   </Routes>
   </Router>

   <Footer />
   </div>
    </HelmetProvider>
  );
}

export default App;
