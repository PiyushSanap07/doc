const SITE_URL = 'https://drnehashinde.com';
const CLINIC_NAME = 'Dr Neha Shinde Skin Clinic';
const DOCTOR_NAME = 'Dr. Neha Shinde';

const cleanText = (value) => String(value || '').replace(/\s+/g, ' ').trim();

const firstSentence = (value) => {
  const text = cleanText(value);
  const match = text.match(/^.*?[.!?](?=\s|$)/);
  return match ? match[0] : text;
};

const formatList = (items, limit) => {
  const values = (items || []).map(cleanText).filter(Boolean);
  const selected = limit ? values.slice(0, limit) : values;
  if (selected.length === 0) return '';
  if (selected.length === 1) return selected[0];
  if (selected.length === 2) return `${selected[0]} and ${selected[1]}`;
  return `${selected.slice(0, -1).join(', ')} and ${selected[selected.length - 1]}`;
};

const truncate = (value, max = 158) => {
  const text = cleanText(value);
  if (text.length <= max) return text;
  const shortened = text.slice(0, max);
  const boundary = shortened.lastIndexOf(' ');
  return `${shortened.slice(0, boundary > 100 ? boundary : max).replace(/[\s,;:.]+$/, '')}…`;
};

const lowerFirst = (value) => {
  const text = cleanText(value);
  return text ? text.charAt(0).toLowerCase() + text.slice(1) : '';
};

export const buildServiceSeo = (service) => {
  if (!service) return null;

  const name = cleanText(service.name);
  const category = cleanText(service.category);
  const focus = formatList(service.idealFor, 2) || 'individual skin and hair concerns';
  const benefits = formatList(service.keyBenefits, 2) || 'a clearer, healthier-looking result';
  const aftercare = formatList(service.afterCare) || 'the aftercare instructions given at your appointment';
  const sideEffects = formatList(service.sideEffects, 2) || 'temporary redness or sensitivity';
  const intro =
    firstSentence(service.description) ||
    `${name} is a ${category.toLowerCase()} treatment offered at ${CLINIC_NAME} in Nashik.`;

  const canonical = `${SITE_URL}/services/${service.slug}`;
  const metaTitle = `${name} in Nashik | ${DOCTOR_NAME}`;
  const metaDescription = truncate(
    `${name} at ${CLINIC_NAME} in Nashik. ${intro} Consultation-led care for ${focus}.`
  );

  const keywords = [
    name,
    `${name} Nashik`,
    `${name} treatment Nashik`,
    category,
    `${category} Nashik`,
    `${DOCTOR_NAME} Nashik`,
    'dermatologist Nashik',
    'skin clinic Nashik',
    ...(service.idealFor || []).map((item) => `${cleanText(item)} Nashik`),
    ...(service.keyBenefits || []).slice(0, 4).map(cleanText),
  ].filter(Boolean);

  const faqs = [
    {
      question: `What is ${name}?`,
      answer: cleanText(service.description) || intro,
    },
    {
      question: `Who can consider ${name} in Nashik?`,
      answer: `This treatment may be considered by people dealing with ${focus}. Suitability is confirmed during a consultation with ${DOCTOR_NAME}, where your medical history, skin or hair type and treatment goals are reviewed.`,
    },
    {
      question: `How long does ${name} take and how many sessions are needed?`,
      answer: `A session usually takes ${cleanText(service.duration) || 'the time discussed at consultation'}. Your plan may include ${lowerFirst(service.sessions) || 'a tailored number of sessions'}, depending on the concern being treated and how you respond.`,
    },
    {
      question: `What aftercare is important after ${name}?`,
      answer: `Follow the aftercare plan given by your dermatologist, including ${aftercare}. Clear instructions are provided at your appointment so you know what to expect during recovery.`,
    },
    {
      question: `What results are realistic with ${name}?`,
      answer: `Expected improvements may include ${lowerFirst(benefits)}. Results vary between patients, and possible temporary effects can include ${sideEffects}. Your doctor will discuss realistic outcomes before treatment begins.`,
    },
  ];

  const howItWorks = [
    {
      title: 'Consultation & assessment',
      text: `Your concern, medical history and goals are reviewed before ${name} is recommended. The doctor explains whether this approach suits ${focus}.`,
    },
    {
      title: 'Personalised treatment',
      text: `${name} is performed in a clinical setting, with a session typically lasting ${cleanText(service.duration) || 'around 30 minutes'}. Technique and settings are adjusted to your skin or hair type.`,
    },
    {
      title: 'Recovery & review',
      text: `You receive aftercare guidance, including ${aftercare}, and a review plan to monitor progress and decide whether further sessions are useful.`,
    },
  ];

  const whyChoose = [
    {
      title: 'Dermatologist-led planning',
      text: `${DOCTOR_NAME} reviews each concern personally and recommends treatment only after clinical assessment.`,
    },
    {
      title: 'Personalised settings',
      text: 'Treatment strength, technique and session spacing are adapted to your skin type, concern and comfort.',
    },
    {
      title: 'Honest guidance',
      text: 'You will discuss expected improvement, suitable alternatives and temporary side effects before agreeing to treatment.',
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalProcedure',
        '@id': `${canonical}#procedure`,
        name,
        description: metaDescription,
        url: canonical,
        procedureType: category || 'Dermatology',
        bodyLocation: category === 'Hair & Scalp' ? 'Scalp' : 'Skin',
        preparation: 'A consultation with a qualified dermatologist is recommended before treatment.',
        followup: aftercare,
        provider: {
          '@type': 'Physician',
          name: DOCTOR_NAME,
          telephone: '+91-7498314453',
          url: SITE_URL,
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${canonical}#faq`,
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return {
    metaTitle,
    metaDescription,
    keywords: [...new Set(keywords)],
    canonical,
    faqs,
    howItWorks,
    whyChoose,
    jsonLd,
    focus,
  };
};
