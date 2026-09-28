import React from 'react';
import { Phone } from 'lucide-react';
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

const WhatsappIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
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
      className="fixed right-2.5 sm:right-5 bottom-4 sm:bottom-6 z-40 flex flex-col items-center gap-2 sm:gap-3 select-none"
    >
      {/* YouTube Button */}
      <a
        href={youtubeUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Watch Dr. Neha Shinde on YouTube"
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FF0000] text-white flex items-center justify-center shadow-md sm:shadow-lg hover:scale-110 active:scale-95 transition-transform"
      >
        <YoutubeIcon className="w-4.5 h-4.5 sm:w-6 sm:h-6" />
      </a>

      {/* Instagram Button */}
      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Instagram Profile"
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#E1306C] text-white flex items-center justify-center shadow-md sm:shadow-lg hover:scale-110 active:scale-95 transition-transform"
      >
        <InstagramIcon className="w-4.5 h-4.5 sm:w-6 sm:h-6" />
      </a>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center shadow-md sm:shadow-lg hover:scale-110 active:scale-95 transition-transform"
      >
        <WhatsappIcon className="w-8 h-8 sm:w-9 sm:h-9" />
      </a>

      {/* Phone Call Button */}
      <a
        href={callUrl}
        aria-label="Direct Call to Clinic"
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#3B5998] text-white flex items-center justify-center shadow-md sm:shadow-lg hover:scale-110 active:scale-95 transition-transform"
      >
        <Phone className="w-4.5 h-4.5 sm:w-6 sm:h-6" />
      </a>
    </aside>
  );
};

export default FloatingCTA;
