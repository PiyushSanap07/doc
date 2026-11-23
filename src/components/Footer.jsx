import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { doctorData } from '../data/portfolioData';

const footerNavLinks = [
  { name: 'About us', href: '#about', type: 'anchor' },
  { name: 'Services', href: '/services', type: 'route' },
  { name: 'Gallery', href: '/gallery', type: 'route' },
  { name: 'Blog', href: '/blog', type: 'route' },
  { name: 'Contact us', href: '/contact', type: 'route' },
];

const Footer = () => {
  return (
    <footer className="bg-[#FAF8F7] border-t border-gray-200/70 pt-10 sm:pt-12 pb-6 text-black">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">

        {/* 3 Columns matching DermaSuite reference screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 pb-8 sm:pb-10">

          {/* Col 1: Clinic / Doctor Brand & Contact details */}
          <div className="md:col-span-6 lg:col-span-6 space-y-3.5 sm:space-y-4">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-black tracking-normal">
                {doctorData.name}
              </h3>
              {/* Clean underline accent */}
              <div className="w-12 h-[2px] bg-[#C98664] mt-1.5 mb-2.5 sm:mb-3" />
              <p className="text-[13px] sm:text-[14px] text-black leading-relaxed max-w-sm font-medium">
                Advanced dermatology clinic for skin, hair &amp; aesthetic treatments using modern technology and personalized care.
              </p>
            </div>

            <ul className="space-y-2.5 pt-0.5 text-[13px] sm:text-[14px] text-black">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C98664] shrink-0" />
                <a href={`tel:${doctorData.clinic.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-primary transition-colors font-semibold text-black">
                  {doctorData.clinic.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C98664] shrink-0" />
                <a href={`mailto:${doctorData.email}`} className="hover:text-primary transition-colors break-all font-semibold text-black">
                  {doctorData.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C98664] shrink-0 mt-1" />
                <span className="leading-relaxed text-black font-medium">{doctorData.clinic.address}</span>
              </li>
            </ul>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-6 lg:col-span-6 space-y-3.5 sm:space-y-4 md:pl-4">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-black tracking-normal">
                Quick Links
              </h3>
              {/* Clean underline accent */}
              <div className="w-12 h-[2px] bg-[#C98664] mt-1.5 mb-2.5 sm:mb-3" />
            </div>

            <nav className="flex flex-col space-y-1 sm:space-y-2.5 text-[13px] sm:text-[14px]">
              {footerNavLinks.map((link) =>
                link.type === 'route' ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-black font-semibold hover:text-primary transition-colors py-1.5 sm:py-0.5 inline-block"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-black font-semibold hover:text-primary transition-colors py-1.5 sm:py-0.5 inline-block"
                  >
                    {link.name}
                  </a>
                )
              )}
            </nav>
          </div>

        </div>

        {/* Bottom copyright note */}
        <div className="pt-3 text-center text-sm sm:text-base text-black font-bold tracking-normal space-y-1 font-['Outfit',sans-serif]">
          <p>┬⌐ 2026 {doctorData.name} ΓÇó All Rights Reserved</p>
          <p className="font-semibold text-black">
            Developed by{' '}
            <a
              href="https://www.blendigitals.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-extrabold text-black underline underline-offset-4 decoration-2 hover:text-primary transition-colors inline-block"
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
