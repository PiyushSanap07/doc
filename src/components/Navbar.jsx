import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  Menu, 
  X, 
  ChevronDown, 
  Home, 
  User, 
  Stethoscope, 
  Camera, 
  MapPin, 
  Phone, 
  Building2, 
  Users, 
  ArrowRight 
} from 'lucide-react';
import { doctorData } from '../data/portfolioData';
import PrimaryButton from './PrimaryButton';
import Logo from './Logo';

const navLinks = [
  { name: 'Home', href: '#home', type: 'anchor', icon: Home },
  { name: 'About', href: '#about', type: 'anchor', icon: User },
  { name: 'Services', href: '/services', type: 'route', icon: Stethoscope },
  { name: 'Gallery', href: '/gallery', type: 'route', icon: Camera },
  { name: 'Contact', href: '#contact', type: 'anchor', icon: MapPin },
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
  const [mobileGalleryOpen, setMobileGalleryOpen] = useState(true);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isServicesPage = location.pathname.startsWith('/services');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Simple active link spy (only on home page)
      if (isHomePage) {
        const anchorLinks = navLinks.filter(l => l.type === 'anchor');
        const sections = anchorLinks.map(link => link.href.substring(1));
        const scrollPos = window.scrollY + 120;

        for (let i = sections.length - 1; i >= 0; i--) {
          const elem = document.getElementById(sections[i]);
          if (elem && elem.offsetTop <= scrollPos) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  // Close mobile drawer when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Close mobile drawer when clicking ANY part of the website
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleAnyClick = (e) => {
      // If clicking anywhere outside the header, close the navbar
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };

    let initialScrollY = window.scrollY;
    const handleScrollClose = () => {
      if (Math.abs(window.scrollY - initialScrollY) > 25) {
        setMobileMenuOpen(false);
      }
    };

    const timer = setTimeout(() => {
      document.addEventListener('click', handleAnyClick, true);
      document.addEventListener('touchstart', handleAnyClick, true);
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('scroll', handleScrollClose, { passive: true });
    }, 10);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', handleAnyClick, true);
      document.removeEventListener('touchstart', handleAnyClick, true);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('scroll', handleScrollClose);
    };
  }, [mobileMenuOpen]);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b-2 border-navy/10 py-3'
          : 'bg-white/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Logo & Branding */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group min-w-0">
            <div className="transition-transform duration-300 group-hover:scale-105 drop-shadow-md shrink-0">
              <Logo className="w-9 h-9 sm:w-11 sm:h-11" />
            </div>
            <div className="min-w-0">
              <span className="block text-sm sm:text-base font-bold text-navy leading-tight group-hover:text-primary transition-colors truncate">
                {doctorData.name}
              </span>
              <span className="hidden xs:block text-[10px] sm:text-xs font-medium text-muted truncate">
                Dermatologist & Aesthetic Physician
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => {
              // Special Gallery item with 3-option dropdown
              if (link.name === 'Gallery') {
                const isGalleryActive = location.pathname.startsWith('/gallery');
                return (
                  <div
                    key={link.name}
                    className="relative py-1 group"
                    onMouseEnter={() => setGalleryDropdownOpen(true)}
                    onMouseLeave={() => setGalleryDropdownOpen(false)}
                  >
                    <div className="flex items-center gap-1">
                      <Link
                        to={link.href}
                        className={`text-sm font-semibold transition-colors duration-200 relative py-1 ${
                          isGalleryActive ? 'text-primary' : 'text-navy/80 hover:text-primary'
                        }`}
                      >
                        {link.name}
                        {isGalleryActive && (
                          <motion.span
                            layoutId="activeIndicator"
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                      </Link>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          setGalleryDropdownOpen(prev => !prev);
                        }}
                        aria-label="Toggle gallery options dropdown"
                        className="p-0.5 text-navy/60 hover:text-primary transition-colors cursor-pointer"
                      >
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            galleryDropdownOpen ? 'rotate-180 text-primary' : ''
                          }`}
                        />
                      </button>
                    </div>

                    {/* Dropdown with 3 options */}
                    <AnimatePresence>
                      {galleryDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.95 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-0 top-full mt-1.5 w-48 bg-white rounded-xl border-2 border-navy/10 shadow-[4px_4px_0px_#160F14] overflow-hidden z-50 py-1.5"
                        >
                          {gallerySubmenu.map((sub) => {
                            const isSubActive = location.pathname === sub.href;
                            return (
                              <Link
                                key={sub.name}
                                to={sub.href}
                                onClick={() => setGalleryDropdownOpen(false)}
                                className={`block px-4 py-2 text-xs font-bold transition-colors ${
                                  isSubActive
                                    ? 'bg-primary/10 text-primary font-black'
                                    : 'text-navy hover:bg-mint hover:text-primary'
                                }`}
                              >
                                {sub.name}
                              </Link>
                            );
                          })}
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
                    className={`text-sm font-semibold transition-colors duration-200 relative py-1 ${
                      isActive ? 'text-primary' : 'text-navy/80 hover:text-primary'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              }

              // For anchor links: if we're on the home page, use #hash; otherwise navigate to /#hash
              const anchorHref = isHomePage ? link.href : `/${link.href}`;
              return (
                <a
                  key={link.name}
                  href={anchorHref}
                  className={`text-sm font-semibold transition-colors duration-200 relative py-1 ${
                    isActive ? 'text-primary' : 'text-navy/80 hover:text-primary'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:block">
            <PrimaryButton 
              onClick={onBookClick} 
              icon={Calendar}
              className="py-2.5 px-5 text-xs font-bold"
            >
              Book Appointment
            </PrimaryButton>
          </div>

          {/* Mobile Right Quick Action & Hamburger Menu */}
          <div className="lg:hidden flex items-center gap-1.5 sm:gap-2">
            {/* Quick Direct Call Button */}
            <a
              href="tel:+917498314453"
              aria-label="Call Doctor Clinic"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-mint text-primary border border-mint-border hover:bg-primary hover:text-white transition-all flex items-center justify-center shadow-xs cursor-pointer active:scale-95"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>

            {/* Quick Book Pill on mobile >=384px */}
            <button
              onClick={onBookClick}
              className="hidden xs:inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-primary text-white text-[11px] font-bold shadow-xs hover:bg-primary-dark transition-all cursor-pointer active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book</span>
            </button>

            {/* Hamburger Toggle Button with interactive styling & hover to open */}
            <button
              onClick={() => setMobileMenuOpen(prev => !prev)}
              onMouseEnter={() => setMobileMenuOpen(true)}
              className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl transition-all duration-200 cursor-pointer flex items-center justify-center active:scale-95 ${
                mobileMenuOpen
                  ? 'bg-primary text-white shadow-xs'
                  : 'text-navy hover:text-primary hover:bg-mint border border-navy/10'
              }`}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation & Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop overlay - tap outside to dismiss */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 top-0 bg-navy/30 backdrop-blur-xs z-30 lg:hidden cursor-pointer"
            />

            {/* Slide Down Mobile Drawer */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="absolute top-full left-0 right-0 bg-white border-b-2 border-navy/15 shadow-2xl z-40 lg:hidden max-h-[calc(100vh-70px)] overflow-y-auto px-4 pt-3 pb-5"
            >
              <div className="flex flex-col space-y-1.5">
                {navLinks.map((link) => {
                  const LinkIcon = link.icon;

                  if (link.name === 'Gallery') {
                    const isGalleryActive = location.pathname.startsWith('/gallery');
                    return (
                      <div key={link.name} className="flex flex-col rounded-xl overflow-hidden border border-navy/10 bg-mint-light/40 transition-colors">
                        <div className="flex items-center justify-between p-1">
                          <Link
                            to={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`flex items-center gap-2.5 py-2 px-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all flex-1 ${
                              isGalleryActive ? 'bg-primary/10 text-primary' : 'text-navy hover:text-primary'
                            }`}
                          >
                            <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                              isGalleryActive ? 'bg-primary text-white shadow-xs' : 'bg-white border border-navy/10 text-primary'
                            }`}>
                              <LinkIcon className="w-4 h-4" />
                            </div>
                            <span>{link.name}</span>
                          </Link>
                          <button
                            type="button"
                            onClick={() => setMobileGalleryOpen(!mobileGalleryOpen)}
                            className="p-2 text-navy/60 hover:text-primary transition-colors cursor-pointer"
                            aria-label="Toggle Gallery Submenu"
                          >
                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileGalleryOpen ? 'rotate-180 text-primary' : ''}`} />
                          </button>
                        </div>

                        {mobileGalleryOpen && (
                          <div className="px-2 pb-2.5 pt-0.5">
                            <div className="grid grid-cols-3 gap-1.5 p-1 bg-white rounded-xl border border-navy/10 shadow-xs">
                              {gallerySubmenu.map((sub) => {
                                const SubIcon = sub.icon;
                                const isSubActive = location.pathname === sub.href;
                                return (
                                  <Link
                                    key={sub.name}
                                    to={sub.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`flex flex-col items-center justify-center py-2 px-1 rounded-lg text-xs font-bold transition-all text-center ${
                                      isSubActive
                                        ? 'bg-primary text-white shadow-xs font-extrabold'
                                        : 'text-navy hover:bg-mint hover:text-primary'
                                    }`}
                                  >
                                    <SubIcon className="w-3.5 h-3.5 mb-1" />
                                    <span className="text-[11px] leading-tight">{sub.name}</span>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  }

                  const isActive = link.type === 'route'
                    ? location.pathname.startsWith(link.href)
                    : (isHomePage && activeSection === link.href.substring(1));

                  const linkContent = (
                    <div className="flex items-center gap-2.5">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        isActive ? 'bg-primary text-white shadow-xs' : 'bg-mint border border-navy/10 text-primary'
                      }`}>
                        <LinkIcon className="w-4 h-4" />
                      </div>
                      <span>{link.name}</span>
                    </div>
                  );

                  if (link.type === 'route') {
                    return (
                      <Link
                        key={link.name}
                        to={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center justify-between py-2 px-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                          isActive 
                            ? 'bg-primary/10 text-primary border border-primary/25 shadow-xs' 
                            : 'text-navy hover:bg-mint-light hover:text-primary'
                        }`}
                      >
                        {linkContent}
                        <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isActive ? 'text-primary' : 'text-muted-light'}`} />
                      </Link>
                    );
                  }

                  const anchorHref = isHomePage ? link.href : `/${link.href}`;
                  return (
                    <a
                      key={link.name}
                      href={anchorHref}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between py-2 px-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                        isActive 
                          ? 'bg-primary/10 text-primary border border-primary/25 shadow-xs' 
                          : 'text-navy hover:bg-mint-light hover:text-primary'
                      }`}
                    >
                      {linkContent}
                      <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isActive ? 'text-primary' : 'text-muted-light'}`} />
                    </a>
                  );
                })}

                {/* Direct Contact Pill & Appointment Button */}
                <div className="pt-2.5 mt-1 border-t border-navy/10 space-y-2">
                  <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-mint-light border border-navy/10 text-xs">
                    <span className="text-muted font-bold text-[11px]">Clinic Phone:</span>
                    <a href="tel:+917498314453" className="font-extrabold text-primary flex items-center gap-1.5 hover:underline">
                      <Phone className="w-3.5 h-3.5" />
                      +91 74983 14453
                    </a>
                  </div>

                  <PrimaryButton
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onBookClick();
                    }}
                    icon={Calendar}
                    className="w-full py-2.5 text-center text-xs font-extrabold shadow-sm"
                  >
                    Book Appointment
                  </PrimaryButton>
                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
