import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { doctorData } from '../data/portfolioData';

const InstagramIcon = ({ className = "w-5 h-5" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const YoutubeIcon = ({ className = "w-5 h-5" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const FloatingCTA = () => {
  const phoneClean = doctorData.clinic.phone.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${phoneClean}?text=Hello%20Dr.%20Neha%20Shinde,%20I%20would%20like%20to%20inquire%20about%20a%20consultation.`;
  const callUrl = `tel:${doctorData.clinic.phone.replace(/[^0-9+]/g, '')}`;
  const instagramUrl = doctorData.socials.instagram;
  const youtubeUrl = doctorData.socials.youtube;

  return (
    <aside 
      aria-label="Quick contact options"
      className="fixed right-3 sm:right-5 bottom-6 z-40 flex flex-col items-center gap-3 select-none"
    >
      {/* YouTube Button */}
      <a
        href={youtubeUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Watch Dr. Neha Shinde on YouTube"
        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#FF0000] text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform"
      >
        <YoutubeIcon className="w-5 h-5 sm:w-6 sm:h-6" />
      </a>

      {/* Instagram Button */}
      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Instagram Profile"
        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#E1306C] text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform"
      >
        <InstagramIcon className="w-5 h-5 sm:w-6 sm:h-6" />
      </a>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-white stroke-none" />
      </a>

      {/* Phone Call Button */}
      <a
        href={callUrl}
        aria-label="Direct Call to Clinic"
        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#3B5998] text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform"
      >
        <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
      </a>
    </aside>
  );
};

export default FloatingCTA;
