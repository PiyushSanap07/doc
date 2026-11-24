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

const getActiveSection = () => {
  if (typeof window === 'undefined' || window.location.pathname !== '/') return 'home';
  const sections = navLinks.filter(link => link.type === 'anchor').map(link => link.href.substring(1));
  const scrollPos = window.scrollY + 120;
  for (let i = sections.length - 1; i >= 0; i--) {
    const elem = document.getElementById(sections[i]);
    if (elem && elem.offsetTop <= scrollPos) return sections[i];
  }
  return 'home';
};

const Navbar = ({ onBookClick }) => {
  const headerRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(() => typeof window !== 'undefined' && window.scrollY > 20);
  const [activeSection, setActiveSection] = useState(getActiveSection);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    if (!isHomePage) return;
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setActiveSection(getActiveSection());
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
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
      className={`fixed top-0 left-0 right-0 z-40 bg-cream/85 backdrop-blur-md transition-colors duration-300 ${isScrolled ? 'border-b border-line' : 'border-b border-transparent'}`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <Logo className="w-8 h-8 sm:w-9 sm:h-9" />
            <span className="font-display text-base sm:text-lg leading-tight text-ink">
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
                    className={`text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors ${isActive ? 'text-primary' : 'text-ink/75 hover:text-ink'}`}
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
                  className={`text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors ${isActive ? 'text-primary' : 'text-ink/75 hover:text-ink'}`}
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
              className="px-6 py-3 bg-primary text-white text-[11px] font-bold uppercase tracking-[0.18em] transition-colors duration-300 hover:bg-primary-dark"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href={`tel:${doctorData.clinic.phone.replace(/[^0-9+]/g, '')}`}
              aria-label="Call clinic"
              className="w-9 h-9 rounded-full bg-cream-deep text-primary flex items-center justify-center active:scale-95 transition-transform"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(prev => !prev)}
              className="w-9 h-9 rounded-full border border-line text-ink flex items-center justify-center active:scale-95 transition-transform"
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
            className="border-t border-line bg-cream shadow-xl lg:hidden px-5 pt-3 pb-6 overflow-hidden"
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
                      className={`py-3 px-1 text-base font-bold border-b border-line flex items-center justify-between active:bg-cream-deep transition-colors ${isActive ? 'text-primary' : 'text-ink'}`}
                    >
                      <span>{link.name}</span>
                      <span className="text-xs text-muted-light font-normal">→</span>
                    </Link>
                  );
                }

                const anchorHref = isHomePage ? link.href : `/${link.href}`;
                return (
                  <a
                    key={link.name}
                    href={anchorHref}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-3 px-1 text-base font-bold border-b border-line flex items-center justify-between active:bg-cream-deep transition-colors ${isActive ? 'text-primary' : 'text-ink'}`}
                  >
                    <span>{link.name}</span>
                    <span className="text-xs text-muted-light font-normal">→</span>
                  </a>
                );
              })}
              <div className="pt-4">
                <button
                  onClick={() => { setMobileMenuOpen(false); onBookClick(); }}
                  className="w-full py-4 bg-primary text-white text-xs font-bold uppercase tracking-[0.18em] active:scale-[0.98] transition-transform flex items-center justify-center min-h-[52px] cursor-pointer"
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
