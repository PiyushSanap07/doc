import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Building2, Users, Stethoscope } from 'lucide-react';
import { doctorData } from '../data/portfolioData';
import Logo from './Logo';

const navLinks = [
  { name: 'Home', href: '#home', type: 'anchor' },
  { name: 'About', href: '#about', type: 'anchor' },
  { name: 'Services', href: '/services', type: 'route' },
  { name: 'Gallery', href: '/gallery', type: 'route' },
  { name: 'Contact', href: '#contact', type: 'anchor' },
];

const gallerySubmenu = [
  { name: 'Clinic', href: '/gallery/clinic', icon: Building2 },
  { name: 'Patient', href: '/gallery/patient', icon: Users },
  { name: 'Procedure', href: '/gallery/procedure', icon: Stethoscope },
];

const Navbar = ({ onBookClick }) => {
  const headerRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [galleryDropdownOpen, setGalleryDropdownOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      if (isHomePage) {
        const sections = navLinks.filter(l => l.type === 'anchor').map(l => l.href.substring(1));
        const scrollPos = window.scrollY + 120;
        for (let i = sections.length - 1; i >= 0; i--) {
          const elem = document.getElementById(sections[i]);
          if (elem && elem.offsetTop <= scrollPos) { setActiveSection(sections[i]); break; }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  useEffect(() => { setMobileMenuOpen(false); }, [location.pathname]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleAnyClick = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) setMobileMenuOpen(false);
    };
    const handleKeyDown = (e) => { if (e.key === 'Escape') setMobileMenuOpen(false); };
    const timer = setTimeout(() => {
      document.addEventListener('click', handleAnyClick, true);
      document.addEventListener('touchstart', handleAnyClick, true);
      window.addEventListener('keydown', handleKeyDown);
    }, 10);
    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', handleAnyClick, true);
      document.removeEventListener('touchstart', handleAnyClick, true);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-40 bg-white transition-shadow duration-300 ${isScrolled ? 'shadow-sm' : ''}`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <Logo className="w-8 h-8 sm:w-9 sm:h-9" />
            <span className="text-sm font-bold text-black leading-tight">
              {doctorData.name}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              if (link.name === 'Gallery') {
                const isGalleryActive = location.pathname.startsWith('/gallery');
                return (
                  <div
                    key="Gallery"
                    className="relative"
                    onMouseEnter={() => setGalleryDropdownOpen(true)}
                    onMouseLeave={() => setGalleryDropdownOpen(false)}
                  >
                    <div className="flex items-center gap-0.5 cursor-pointer">
                      <Link
                        to="/gallery"
                        className={`text-sm font-semibold transition-colors ${isGalleryActive ? 'text-primary' : 'text-black/80 hover:text-black'}`}
                      >
                        Gallery
                      </Link>
                      <ChevronDown className={`w-3.5 h-3.5 text-black/60 transition-transform duration-200 ${galleryDropdownOpen ? 'rotate-180' : ''}`} />
                    </div>
                    <AnimatePresence>
                      {galleryDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-0 top-full mt-2 w-40 bg-white rounded-lg border border-gray-100 shadow-md overflow-hidden py-1 z-50"
                        >
                          {gallerySubmenu.map((sub) => (
                            <Link
                              key={sub.name}
                              to={sub.href}
                              onClick={() => setGalleryDropdownOpen(false)}
                              className={`block px-4 py-2 text-sm transition-colors ${location.pathname === sub.href ? 'text-primary font-bold bg-[#FAF0F5]' : 'text-black/80 hover:bg-gray-50 hover:text-black'}`}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              const isActive = link.type === 'route'
                ? location.pathname.startsWith(link.href)
                : (isHomePage && activeSection === link.href.substring(1));

              if (link.type === 'route') {
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`text-sm font-semibold transition-colors ${isActive ? 'text-primary' : 'text-black/80 hover:text-black'}`}
                  >
                    {link.name}
                  </Link>
                );
              }

              const anchorHref = isHomePage ? link.href : `/${link.href}`;
              return (
                <a
                  key={link.name}
                  href={anchorHref}
                  className={`text-sm font-semibold transition-colors ${isActive ? 'text-primary' : 'text-black/80 hover:text-black'}`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <button
              onClick={onBookClick}
              className="px-5 py-2.5 bg-primary text-white text-sm font-bold rounded-md hover:bg-primary-dark transition-colors shadow-sm"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href={`tel:${doctorData.clinic.phone.replace(/[^0-9+]/g, '')}`}
              aria-label="Call clinic"
              className="w-9 h-9 rounded-md bg-[#FAF0F5] text-primary flex items-center justify-center active:scale-95 transition-transform"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(prev => !prev)}
              className="w-9 h-9 rounded-md border border-gray-200 text-black flex items-center justify-center active:scale-95 transition-transform"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t border-gray-100 bg-white shadow-xl lg:hidden px-5 pt-3 pb-6 overflow-hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = link.type === 'route'
                  ? location.pathname.startsWith(link.href)
                  : (isHomePage && activeSection === link.href.substring(1));

                if (link.name === 'Gallery') {
                  return (
                    <div key="Gallery" className="border-b border-gray-50 py-1">
                      <Link
                        to="/gallery"
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block py-2 text-base font-bold ${location.pathname.startsWith('/gallery') ? 'text-primary' : 'text-black'}`}
                      >
                        Gallery
                      </Link>
                      <div className="pl-3 flex flex-col gap-1 pb-1">
                        {gallerySubmenu.map(sub => (
                          <Link
                            key={sub.name}
                            to={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="py-1.5 text-sm text-black/80 hover:text-primary transition-colors font-medium"
                          >
                            — {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                if (link.type === 'route') {
                  return (
                    <Link
                      key={link.name}
                      to={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`py-2.5 text-base font-bold border-b border-gray-50 ${isActive ? 'text-primary' : 'text-black'}`}
                    >
                      {link.name}
                    </Link>
                  );
                }

                const anchorHref = isHomePage ? link.href : `/${link.href}`;
                return (
                  <a
                    key={link.name}
                    href={anchorHref}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-2.5 text-base font-bold border-b border-gray-50 ${isActive ? 'text-primary' : 'text-black'}`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <div className="pt-4">
                <button
                  onClick={() => { setMobileMenuOpen(false); onBookClick(); }}
                  className="w-full py-3 bg-primary text-white text-sm font-bold rounded-md active:scale-98 shadow-sm"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
