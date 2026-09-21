import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';
import { doctorData } from '../data/portfolioData';

const footerNavLinks = [
  { name: 'About us', href: '#about', type: 'anchor' },
  { name: 'Services', href: '/services', type: 'route' },
  { name: 'Gallery', href: '/gallery', type: 'route' },
  { name: 'Contact us', href: '#contact', type: 'anchor' },
];

const Footer = () => {
  return (
    <footer className="bg-[#FAF8F7] border-t border-gray-200/70 pt-10 sm:pt-12 pb-6 text-[#1A1A1A]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">

        {/* 3 Columns matching DermaSuite reference screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 pb-8 sm:pb-10">

          {/* Col 1: Clinic / Doctor Brand & Contact details */}
          <div className="md:col-span-5 lg:col-span-4 space-y-3.5 sm:space-y-4">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-normal text-black tracking-normal">
                {doctorData.name}
              </h3>
              {/* Clean underline accent */}
              <div className="w-12 h-[2px] bg-[#C98664] mt-1.5 mb-2.5 sm:mb-3" />
              <p className="text-[13px] sm:text-[14px] text-gray-700 leading-relaxed max-w-sm">
                Advanced dermatology clinic for skin, hair &amp; aesthetic treatments using modern technology and personalized care.
              </p>
            </div>

            <ul className="space-y-2.5 pt-0.5 text-[13px] sm:text-[14px] text-gray-800">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C98664] shrink-0" />
                <a href={`tel:${doctorData.clinic.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-primary transition-colors font-medium">
                  {doctorData.clinic.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C98664] shrink-0" />
                <a href={`mailto:${doctorData.email}`} className="hover:text-primary transition-colors break-all">
                  {doctorData.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C98664] shrink-0 mt-1" />
                <span className="leading-relaxed text-gray-700">{doctorData.clinic.address}</span>
              </li>
            </ul>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-3 lg:col-span-3 space-y-3.5 sm:space-y-4 md:pl-4">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-normal text-black tracking-normal">
                Quick Links
              </h3>
              {/* Clean underline accent */}
              <div className="w-12 h-[2px] bg-[#C98664] mt-1.5 mb-2.5 sm:mb-3" />
            </div>

            <nav className="flex flex-col space-y-2 sm:space-y-2.5 text-[13px] sm:text-[14px]">
              {footerNavLinks.map((link) =>
                link.type === 'route' ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-gray-700 hover:text-black transition-colors py-0.5"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-700 hover:text-black transition-colors py-0.5"
                  >
                    {link.name}
                  </a>
                )
              )}
            </nav>
          </div>

          {/* Col 3: Map Box */}
          <div className="md:col-span-4 lg:col-span-5 space-y-2">
            <div className="w-full h-[180px] sm:h-[200px] rounded-sm overflow-hidden border border-gray-300 shadow-sm relative bg-gray-100">
              <iframe
                title="Clinic Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.2857830975207!2d73.77205427601853!3d20.002437081358555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb12d22d07d9%3A0x31d7e9c2b0f3a78!2sHarit%20Building%2C%20Nashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={doctorData.clinic.googleMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-primary font-semibold hover:underline pt-0.5"
            >
              Open in Google Maps <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Social Links */}
        <div className="pt-4 border-t border-gray-200/60 flex items-center justify-center gap-4">
          <a
            href={doctorData.socials.youtube}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube Channel"
            className="w-8 h-8 rounded-full bg-red-50 text-[#FF0000] flex items-center justify-center hover:bg-[#FF0000] hover:text-white transition-all shadow-xs"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
          <a
            href={doctorData.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
            className="w-8 h-8 rounded-full bg-pink-50 text-[#E1306C] flex items-center justify-center hover:bg-[#E1306C] hover:text-white transition-all shadow-xs"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
        </div>

        {/* Bottom copyright note */}
        <div className="pt-3 text-center text-xs text-gray-500 space-y-0.5">
          <p>© 2026 {doctorData.name} • All Rights Reserved</p>
          <p>
            Developed by{' '}
            <a
              href="https://www.blendigitals.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gray-800 hover:text-primary transition-colors"
            >
              Blen Digital
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
