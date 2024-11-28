// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/header';
import HomePage from './pages/homepage';
import CSRollOfHonour from './pages/cshonour';
import TransfersPage from './pages/transfers';
import CurrentPostingsPage from './pages/postings';
import ServicesPage from './pages/services';
import ContactPage from './pages/contact';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cs-roll-of-honour" element={<CSRollOfHonour />} />
          <Route path="/transfer" element={<TransfersPage />} />
          <Route path="/currentposting" element={<CurrentPostingsPage/>}/>
          <Route path="/services" element={<ServicesPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          
        </Routes>
        <Footer/>

      </div>
    </Router>
  );
}

export default App;