import React from 'react'
import Homepage from './pages/homepage/Homepage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./App.css";
import AboutPage from './pages/aboutPage/AboutPage';
import EnquiryPage from './pages/enquiryPage/EnquiryPage';
import ContactPage from './pages/contactPage/ContactPage';
import About from './components/about/About';
import Serve from './serve/Serve';
import ServicePage from './pages/servicePage/ServicePage';
import AOS from 'aos';


const App = () => {
AOS.init();

  return (
    <Router>
    <Routes>
    <Route path="/" element={<Homepage/>}/>

      <Route path="/" element={<Homepage/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<ServicePage/>}/>

      <Route path="/aboutpage" element={<AboutPage/>}/>
      <Route path="/enquirypage" element={<EnquiryPage/>}/>
      <Route path="/contactpage" element={<ContactPage/>}/>

    </Routes>
      {/* <Homepage/> */}
      
      
    </Router>
  )
}

export default App
