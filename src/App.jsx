import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Qualifications from './components/Qualifications';
import Experience from './components/Experience';
import Clinic from './components/Clinic';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';
import Loader from './components/Loader';
import ScrollProgress from './components/ScrollProgress';
import Services from './components/Services';
import ServiceDetail from './components/ServiceDetail';
import Gallery from './components/Gallery';
import GalleryDetail from './components/GalleryDetail';

// Home page content extracted as its own component
function HomePage({ onBookClick }) {
  return (
    <div className="min-h-screen bg-white text-navy font-sans antialiased selection:bg-mint selection:text-primary-dark">
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Sticky Header Navbar */}
      <Navbar onBookClick={onBookClick} />

      {/* Main Content Sections */}
      <main>
        <Hero onBookClick={onBookClick} />
        <About />
        <Expertise onExploreClick={onBookClick} />
        <Qualifications />
        <Experience />
        <Clinic onBookClick={onBookClick} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleOpenModal = () => {
    window.location.href = "tel:+917498314453";
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleLoaderFinish = () => {
    setIsLoading(false);
  };

  return (
    <>
      {/* Splash Loader */}
      {isLoading && <Loader onFinish={handleLoaderFinish} />}

      <Routes>
        <Route path="/" element={<HomePage onBookClick={handleOpenModal} />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/:slug" element={<GalleryDetail />} />
      </Routes>

      {/* Interactive Booking Dialog Modal */}
      <AppointmentModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
}

export default App;
