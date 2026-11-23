import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, User, Phone, CheckCircle2 } from 'lucide-react';
import PrimaryButton from './PrimaryButton';
import { buildAppointmentMessage, openWhatsApp, whatsappLink, todayISO } from '../lib/whatsapp';

const initialForm = {
  name: '',
  phone: '',
  service: 'Acne & Acne Scars',
  date: '',
  time: '10:00 AM – 1:00 PM'
};

const AppointmentModal = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState(initialForm);
  const [phoneError, setPhoneError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const digits = formData.phone.replace(/\D/g, '');
    if (digits.length < 10 || digits.length > 15) {
      setPhoneError('Enter a valid phone number (10 digits).');
      return;
    }
    setPhoneError('');

    openWhatsApp(buildAppointmentMessage(formData));
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData(initialForm);
    setPhoneError('');
    onClose();
  };

  const closeModal = () => {
    if (submitted) {
      handleReset();
      return;
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
          className="fixed inset-0 bg-navy/40 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative bg-white rounded-3xl p-5 sm:p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl z-10 border border-mint-border"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-mint-border mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-mint flex items-center justify-center text-primary">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy">Book Consultation</h3>
                <p className="text-xs text-muted">Dr. Neha Shinde Clinic</p>
              </div>
            </div>
            <button
              onClick={closeModal}
              className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition-colors"
              aria-label="Close appointment modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-navy uppercase tracking-wider mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-muted absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full pl-10 pr-4 py-2.5 bg-mint-light rounded-xl border border-mint-border text-sm text-navy focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-navy uppercase tracking-wider mb-1">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-muted absolute left-3.5 top-3.5" />
                  <input
                    type="tel"
                    inputMode="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (phoneError) setPhoneError('');
                    }}
                    placeholder="+91 98765 43210"
                    aria-invalid={Boolean(phoneError)}
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-navy focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all ${
                      phoneError
                        ? 'border-red-400 bg-red-50/50'
                        : 'bg-mint-light border-mint-border'
                    }`}
                  />
                </div>
                {phoneError && <p className="mt-1.5 text-xs text-red-500">{phoneError}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-navy uppercase tracking-wider mb-1">
                  Area of Concern
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-2.5 bg-mint-light rounded-xl border border-mint-border text-sm text-navy focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                >
                  <option>Acne & Acne Scars</option>
                  <option>Pigmentation & Skin Brightening</option>
                  <option>Hair & Scalp PRP Therapy</option>
                  <option>Cosmetic Dermatology & Fillers</option>
                  <option>Anti-Aging & Skin Tightening</option>
                  <option>Skin Allergies & Eczema</option>
                  <option>General Dermatology Consultation</option>
                </select>
              </div>

              <div className="grid grid-cols-1 xs:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="block text-xs font-semibold text-navy uppercase tracking-wider mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    min={todayISO()}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2.5 bg-mint-light rounded-xl border border-mint-border text-sm text-navy focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-navy uppercase tracking-wider mb-1">
                    Time Window
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-muted absolute left-3 top-3.5" />
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full pl-9 pr-2 py-2.5 bg-mint-light rounded-xl border border-mint-border text-xs text-navy focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                    >
                      <option>10:00 AM – 1:00 PM</option>
                      <option>5:00 PM – 8:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <PrimaryButton type="submit" className="w-full py-4 text-base">
                  Send Request on WhatsApp
                </PrimaryButton>
                <p className="mt-3 text-center text-xs text-muted">
                  Your details open in WhatsApp — just tap send to notify the clinic.
                </p>
              </div>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-6 space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-mint text-primary mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-navy">Almost done, {formData.name}!</h4>
              <p className="text-sm text-muted max-w-xs mx-auto">
                We&apos;ve prepared your request. Tap send in WhatsApp and our team will
                call you shortly to confirm your slot.
              </p>

              <div className="rounded-xl bg-mint-light border border-mint-border p-4 text-left">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted">
                  Request summary
                </p>
                <dl className="mt-2 space-y-1.5 text-sm text-navy">
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted">Concern</dt>
                    <dd className="font-semibold text-right">{formData.service}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted">Date</dt>
                    <dd className="font-semibold text-right">{formData.date}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted">Time</dt>
                    <dd className="font-semibold text-right">{formData.time}</dd>
                  </div>
                </dl>
              </div>

              <p className="text-xs text-muted">
                WhatsApp didn&apos;t open?{' '}
                <a
                  href={whatsappLink(buildAppointmentMessage(formData))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-primary underline underline-offset-2"
                >
                  Tap here
                </a>{' '}
                or call us directly.
              </p>

              <div className="pt-1 flex flex-col sm:flex-row gap-2.5 justify-center">
                <button
                  onClick={handleReset}
                  className="bg-primary text-white font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-primary-dark transition-colors"
                >
                  Done
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default AppointmentModal;
