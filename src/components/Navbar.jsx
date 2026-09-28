import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { doctorData } from '../data/portfolioData';
import Logo from './Logo';

const navLinks = [
  { name: 'Home', href: '#home', type: 'anchor' },
  { name: 'About', href: '#about', type: 'anchor' },
  { name: 'Services', href: '/services', type: 'route' },
  { name: 'Gallery', href: '/gallery', type: 'route' },
  { name: 'Blog', href: '/blog', type: 'route' },
  { name: 'Contact', href: '/contact', type: 'route' },
];

const Navbar = ({ onBookClick }) => {
  const headerRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

                if (link.type === 'route') {
                  return (
                    <Link
                      key={link.name}
                      to={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`py-3 px-1 text-base font-bold border-b border-gray-50 flex items-center justify-between active:bg-[#FAF0F5] rounded-md transition-colors ${isActive ? 'text-primary' : 'text-black'}`}
                    >
                      <span>{link.name}</span>
                      <span className="text-xs text-gray-400 font-normal">→</span>
                    </Link>
                  );
                }

                const anchorHref = isHomePage ? link.href : `/${link.href}`;
                return (
                  <a
                    key={link.name}
                    href={anchorHref}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-3 px-1 text-base font-bold border-b border-gray-50 flex items-center justify-between active:bg-[#FAF0F5] rounded-md transition-colors ${isActive ? 'text-primary' : 'text-black'}`}
                  >
                    <span>{link.name}</span>
                    <span className="text-xs text-gray-400 font-normal">→</span>
                  </a>
                );
              })}
              <div className="pt-4">
                <button
                  onClick={() => { setMobileMenuOpen(false); onBookClick(); }}
                  className="w-full py-3.5 bg-primary text-white text-base font-bold rounded-lg active:scale-98 shadow-sm flex items-center justify-center min-h-[48px] cursor-pointer"
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
