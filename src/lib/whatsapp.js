import { doctorData } from '../data/portfolioData';

export const WHATSAPP_NUMBER = doctorData.clinic.phone.replace(/[^0-9]/g, '');

const CLINIC_NAME = doctorData.clinic.name;
const SITE = 'drnehashinde.com';
const RULE = '━━━━━━━━━━━━━━━';

const formatDate = (value) => {
  if (!value) return 'Not specified';
  const parsed = new Date(`${value}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) return value;
  return parsed.toLocaleDateString('en-GB', {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
};

const footer = () => `${RULE}\nSent from ${SITE}`;

export const buildAppointmentMessage = ({ name, phone, service, date, time }) =>
  [
    '*NEW APPOINTMENT REQUEST*',
    `_${CLINIC_NAME}_`,
    RULE,
    '',
    `*Patient:* ${name}`,
    `*Phone:* ${phone}`,
    `*Concern:* ${service}`,
    `*Preferred date:* ${formatDate(date)}`,
    `*Time window:* ${time}`,
    '',
    footer()
  ].join('\n');

export const whatsappLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const openWhatsApp = (message) => {
  window.open(whatsappLink(message), '_blank', 'noopener,noreferrer');
};

export const todayISO = () => {
  const now = new Date();
  const offset = now.getTimezoneOffset() * 60_000;
  return new Date(now.getTime() - offset).toISOString().slice(0, 10);
};