import React, { useState } from 'react';
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
    <div className="min-h-screen bg-white text-navy font-sans antialiased selection:bg-mint selection:text-primary-dark">
      {/* Splash Loader */}
      {isLoading && <Loader onFinish={handleLoaderFinish} />}

      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Sticky Header Navbar */}
      <Navbar onBookClick={handleOpenModal} />

      {/* Main Content Sections */}
      <main>
        <Hero onBookClick={handleOpenModal} />
        <About />
        <Expertise onExploreClick={handleOpenModal} />
        <Qualifications />
        <Experience />
        <Clinic onBookClick={handleOpenModal} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Booking Dialog Modal */}
      <AppointmentModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default App;
