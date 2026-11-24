import React, { useEffect } from 'react';
import { MessageCircle, Phone, Mail } from 'lucide-react';
import { doctorData } from '../data/portfolioData';
import { WHATSAPP_NUMBER } from '../lib/whatsapp';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollProgress from './ScrollProgress';
import { openAppointmentModal } from '../lib/appointmentModal';

const Contact = () => {
  const phoneHref = `tel:${doctorData.clinic.phone.replace(/[^0-9+]/g, '')}`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-black antialiased">
      <ScrollProgress />
      <Navbar onBookClick={openAppointmentModal} />

      <main className="flex-1 bg-white px-4 pb-20 pt-24 sm:px-8 sm:pt-28 lg:px-12">
        <section className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <div className="py-4 lg:py-12">
            <p className="border-l-2 border-accent pl-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">Contact us</p>
            <h1 className="mt-5 max-w-lg text-4xl font-extrabold leading-tight text-navy sm:text-6xl">Talk to someone who understands skin.</h1>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-gray-600 sm:text-base">Here&apos;s how to reach us:</p>
            <ol className="mt-7 max-w-md space-y-5 text-sm leading-relaxed text-navy sm:text-base">
              <li className="flex gap-4"><span className="font-bold text-primary">01</span><span>Share your concern and what you would like to improve.</span></li>
              <li className="flex gap-4"><span className="font-bold text-primary">02</span><span>Chat with us directly on WhatsApp.</span></li>
              <li className="flex gap-4"><span className="font-bold text-primary">03</span><span>We help confirm the right consultation slot.</span></li>
            </ol>

            <button
              type="button"
              onClick={openAppointmentModal}
              className="mt-8 inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-primary px-7 py-3 text-sm font-bold text-white transition hover:bg-primary-dark"
            >
              <MessageCircle className="h-4 w-4" /> Book an appointment instead
            </button>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-mint-border bg-[#FDF6F9] px-6 py-9 text-navy sm:px-10 sm:py-12">
            <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full border-[14px] border-primary/15" aria-hidden="true" />
            <p className="relative text-xs font-bold uppercase tracking-[0.2em] text-primary">Get in touch</p>
            <h2 className="relative mt-3 text-3xl font-extrabold sm:text-4xl">Reach us directly.</h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-gray-600">
              Message us on WhatsApp or call the clinic to ask a question or book a consultation.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#25D366] px-7 py-3 text-sm font-bold text-white transition hover:bg-[#1EBE5A]"
              >
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
              <a
                href={phoneHref}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-line px-7 py-3 text-sm font-bold text-ink transition hover:border-primary hover:text-primary"
              >
                <Phone className="h-4 w-4" /> Call {doctorData.clinic.phone}
              </a>
            </div>

            <div className="mt-8 border-t border-line pt-6">
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                <Mail className="h-4 w-4" /> Email
              </p>
              <a href={`mailto:${doctorData.email}`} className="mt-2 block break-all text-sm font-semibold text-navy hover:text-primary">
                {doctorData.email}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
