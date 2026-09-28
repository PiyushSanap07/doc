import React, { useEffect, useState } from 'react';
import { Send } from 'lucide-react';
import { doctorData } from '../data/portfolioData';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollProgress from './ScrollProgress';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const phoneHref = `tel:${doctorData.clinic.phone.replace(/[^0-9+]/g, '')}`;

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = {};

    if (formData.name.trim().length < 2) {
      nextErrors.name = 'Please enter your name.';
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (formData.message.trim().length < 10) {
      nextErrors.message = 'Please add a little more detail.';
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setSent(false);
      return;
    }

    const subject = encodeURIComponent(`Contact request from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.location.href = `mailto:${doctorData.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const updateField = (field, value) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  const fieldClass =
    'mt-2 w-full border-0 border-b border-gray-300 bg-transparent px-1 py-2 text-sm text-navy outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-0';

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-black antialiased">
      <ScrollProgress />
      <Navbar onBookClick={() => { window.location.href = phoneHref; }} />

      <main className="flex-1 bg-white px-4 pb-20 pt-24 sm:px-8 sm:pt-28 lg:px-12">
        <section className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <div className="py-4 lg:py-12">
            <p className="border-l-2 border-accent pl-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">Contact us</p>
            <h1 className="mt-5 max-w-lg text-4xl font-extrabold leading-tight text-navy sm:text-6xl">Talk to someone who understands skin.</h1>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-gray-600 sm:text-base">A simple message is all it takes to begin. Here&apos;s what happens next:</p>
            <ol className="mt-7 max-w-md space-y-5 text-sm leading-relaxed text-navy sm:text-base">
              <li className="flex gap-4"><span className="font-bold text-primary">01</span><span>Share your concern and what you would like to improve.</span></li>
              <li className="flex gap-4"><span className="font-bold text-primary">02</span><span>Our team reviews your message and gets in touch.</span></li>
              <li className="flex gap-4"><span className="font-bold text-primary">03</span><span>We help you find the right consultation next step.</span></li>
            </ol>
          </div>

            <form onSubmit={handleSubmit} className="relative overflow-hidden rounded-2xl border border-mint-border bg-[#FDF6F9] px-6 py-9 text-navy sm:px-10 sm:py-12">
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full border-[14px] border-primary/15" aria-hidden="true" />
              <p className="relative text-xs font-bold uppercase tracking-[0.2em] text-primary">Send an inquiry</p>
              <h2 className="relative mt-3 text-3xl font-extrabold sm:text-4xl">Tell us how we can help.</h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-gray-600">Complete the form below and we&apos;ll reply with the next step.</p>

              <div className="mt-8 space-y-5">
                <label className="block text-sm font-medium text-navy">
                  Name <span className="text-primary" aria-hidden="true">*</span>
                  <input
                    required
                    value={formData.name}
                    onChange={(event) => updateField('name', event.target.value)}
                    className={fieldClass}
                    placeholder="Your name"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && <span id="name-error" className="mt-1 block text-xs font-normal text-primary">{errors.name}</span>}
                </label>
                <label className="block text-sm font-medium text-navy">
                  Email address <span className="text-primary" aria-hidden="true">*</span>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(event) => updateField('email', event.target.value)}
                    className={fieldClass}
                    placeholder="you@example.com"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && <span id="email-error" className="mt-1 block text-xs font-normal text-primary">{errors.email}</span>}
                </label>
                <label className="block text-sm font-medium text-navy">
                  Message <span className="text-primary" aria-hidden="true">*</span>
                  <textarea
                    required
                    rows="5"
                    value={formData.message}
                    onChange={(event) => updateField('message', event.target.value)}
                    className={`${fieldClass} resize-y`}
                    placeholder="Tell us briefly what you would like help with"
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && <span id="message-error" className="mt-1 block text-xs font-normal text-primary">{errors.message}</span>}
                </label>
              </div>

              <button type="submit" className="mt-7 inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-primary px-7 py-3 text-sm font-bold text-white transition hover:bg-primary-dark">
                <Send className="h-4 w-4" /> Send message
              </button>
              {sent && <p className="mt-4 text-sm text-primary">Your email app should open with your message ready to send.</p>}
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
