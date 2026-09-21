import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Navigation, ExternalLink, Phone } from 'lucide-react';
import { doctorData } from '../data/portfolioData';
import Logo from './Logo';

const footerNavLinks = [
  { name: 'Home', href: '#home', type: 'anchor' },
  { name: 'About Doctor', href: '#about', type: 'anchor' },
  { name: 'Services', href: '/services', type: 'route' },
  { name: 'Doctor Gallery', href: '#expertise', type: 'anchor' },
  { name: 'Visit Clinic', href: '#contact', type: 'anchor' },
];

const InstagramIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const YoutubeIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.56 49.56 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
    <path d="m10 15 5-3-5-3z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-mint-light/50 border-t-2 border-navy/15 pt-6 pb-5 text-navy relative overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* HIGHLIGHTED QUICK LINKS BANNER */}
        <div className="mb-5">
          <div className="text-center max-w-xl mx-auto mb-3">
            <span className="inline-block text-[11px] font-black tracking-widest text-primary uppercase bg-mint px-3 py-1 rounded-full border border-mint-border mb-1.5">
              CONNECT &amp; FIND US
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-navy">
              Quick Links &amp; Contact Highlights
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* 1. INSTAGRAM HIGHLIGHT CARD */}
            <a
              href={doctorData.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white p-3 sm:p-3.5 rounded-2xl border-2 border-navy/20 shadow-[4px_4px_0px_#321427] hover:shadow-[6px_6px_0px_#8C486E] hover:border-primary transition-all duration-300 flex items-center gap-2.5 sm:gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-110 transition-transform">
                <InstagramIcon className="w-4 h-4" />
              </div>
              <div className="overflow-hidden text-left min-w-0">
                <span className="block text-[10px] font-black tracking-wider text-muted uppercase">Instagram</span>
                <span className="block text-xs font-extrabold text-navy group-hover:text-primary transition-colors truncate">
                  @dr.nehashinde_dermacare
                </span>
              </div>
              <ExternalLink className="w-4 h-4 text-muted group-hover:text-primary shrink-0 ml-auto" />
            </a>

            {/* 2. YOUTUBE HIGHLIGHT CARD */}
            <a
              href={doctorData.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white p-3 sm:p-3.5 rounded-2xl border-2 border-navy/20 shadow-[4px_4px_0px_#321427] hover:shadow-[6px_6px_0px_#C98664] hover:border-accent transition-all duration-300 flex items-center gap-2.5 sm:gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-110 transition-transform">
                <YoutubeIcon className="w-4 h-4" />
              </div>
              <div className="overflow-hidden text-left min-w-0">
                <span className="block text-[10px] font-black tracking-wider text-muted uppercase">YouTube Channel</span>
                <span className="block text-xs font-extrabold text-navy group-hover:text-accent transition-colors truncate">
                  Watch Videos
                </span>
              </div>
              <ExternalLink className="w-4 h-4 text-muted group-hover:text-accent shrink-0 ml-auto" />
            </a>

            {/* 3. DIRECTIONS HIGHLIGHT CARD */}
            <a
              href={doctorData.clinic.googleMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white p-3 sm:p-3.5 rounded-2xl border-2 border-navy/20 shadow-[4px_4px_0px_#321427] hover:shadow-[6px_6px_0px_#8C486E] hover:border-primary transition-all duration-300 flex items-center gap-2.5 sm:gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-110 transition-transform">
                <Navigation className="w-4 h-4" />
              </div>
              <div className="overflow-hidden text-left min-w-0">
                <span className="block text-[10px] font-black tracking-wider text-muted uppercase">Get Directions</span>
                <span className="block text-xs font-extrabold text-navy group-hover:text-primary transition-colors truncate">
                  Nashik Clinic Location
                </span>
              </div>
              <ExternalLink className="w-4 h-4 text-muted group-hover:text-primary shrink-0 ml-auto" />
            </a>

            {/* 4. EMAIL HIGHLIGHT CARD */}
            <a
              href={`mailto:${doctorData.email}`}
              className="group bg-white p-3 sm:p-3.5 rounded-2xl border-2 border-navy/20 shadow-[4px_4px_0px_#321427] hover:shadow-[6px_6px_0px_#C98664] hover:border-accent transition-all duration-300 flex items-center gap-2.5 sm:gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-navy text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-110 transition-transform">
                <Mail className="w-4 h-4" />
              </div>
              <div className="overflow-hidden text-left min-w-0">
                <span className="block text-[10px] font-black tracking-wider text-muted uppercase">Email Us</span>
                <span className="block text-xs font-extrabold text-navy group-hover:text-accent transition-colors truncate">
                  {doctorData.email}
                </span>
              </div>
              <ExternalLink className="w-4 h-4 text-muted group-hover:text-accent shrink-0 ml-auto" />
            </a>

          </div>
        </div>

        {/* MIDDLE FOOTER BLOCK */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-5 border-b border-navy/15 text-left items-start">
          
          {/* Brand Info & Address */}
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center gap-3">
              <div className="transition-transform duration-300 hover:scale-105">
                <Logo className="w-11 h-11 drop-shadow-sm" />
              </div>
              <div>
                <span className="block text-base font-extrabold text-navy leading-tight">
                  {doctorData.name}
                </span>
                <span className="block text-xs font-bold text-primary">
                  {doctorData.role}
                </span>
              </div>
            </div>
            
            <div className="space-y-1.5 pt-1 text-xs text-muted max-w-xl leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>
                  <strong className="text-navy">{doctorData.clinic.name}:</strong> {doctorData.clinic.address}
                </span>
              </div>
              <div className="flex items-center gap-2 pt-0.5">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <span className="font-bold text-navy">Direct Phone:</span>
                <a href={`tel:${doctorData.clinic.phone.replace(/\s+/g, '')}`} className="font-extrabold text-primary hover:underline">
                  {doctorData.clinic.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation Column */}
          <div className="lg:col-span-5 space-y-2.5">
            <h4 className="text-xs font-black text-navy uppercase tracking-wider">
              Quick Navigation
            </h4>
            <nav className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-bold text-navy">
              {footerNavLinks.map((link) => (
                link.type === 'route' ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="hover:text-primary transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-primary">•</span>
                    <span>{link.name}</span>
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="hover:text-primary transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-primary">•</span>
                    <span>{link.name}</span>
                  </a>
                )
              ))}
            </nav>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="pt-4 text-center text-xs font-semibold text-muted">
          <p>
            © 2026 Developed by{' '}
            <a
              href="https://www.blendigitals.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-extrabold text-navy hover:text-primary transition-colors underline decoration-primary/40 underline-offset-2"
            >
              BLENDIGITAL
            </a>
            . All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
