// src/App.jsx

import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Courses from './pages/Courses';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Testimonials from './pages/Textimonials'; // Corrected spelling
import ContactUs from './pages/ContactUs';
import About from './pages/About';
import AdmissionsPage from './pages/Admissions';
import Loading from './components/Loading'; // Import the Loading component
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

function AppRoutes() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  // Function to handle route change and loading state
  const handleRouteChange = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    handleRouteChange(); 
  }, [location]);

  return (
    <>
      {loading ? ( 
        <Loading />
      ) : (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Courses" element={<Courses />} />
            <Route path="/Testimonials" element={<Testimonials />} />
            <Route path="/About" element={<About />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/Admissions" element={<AdmissionsPage />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
