// ─── Gallery Data ────────────────────────────────────────────
// All gallery images organized by category for the Doctor Gallery section.
// Uses existing images from the codebase, duplicated across categories.

export const galleryCategories = [
  {
    slug: 'clinic',
    title: 'Clinic',
    subtitle: 'Our Modern Facility',
    description: 'Step inside our state-of-the-art dermatology clinic in Nashik. Equipped with the latest technology and designed for patient comfort, our clinic reflects our commitment to world-class dermatological care.',
    icon: 'Building2',
    color: 'primary',
    photos: [
      { id: 'c1', image: '/images/clinic.png', title: 'Reception Area', caption: 'Welcoming entrance with modern aesthetics' },
      { id: 'c2', image: '/images/clinic.png', title: 'Treatment Room', caption: 'Fully equipped procedure suite' },
      { id: 'c3', image: '/images/doctor-about.png', title: 'Consultation Chamber', caption: 'Private consultation with advanced tools' },
      { id: 'c4', image: '/images/clinic.png', title: 'Laser Suite', caption: 'Dedicated laser treatment facility' },
      { id: 'c5', image: '/images/doctor-hero.png', title: 'Waiting Lounge', caption: 'Comfortable patient waiting area' },
      { id: 'c6', image: '/images/clinic.png', title: 'Sterilization Zone', caption: 'Hospital-grade hygiene standards' },
      { id: 'c7', image: '/images/doctor-about.png', title: 'Equipment Gallery', caption: 'Latest dermatology instruments' },
      { id: 'c8', image: '/images/clinic.png', title: 'Exterior View', caption: 'Prime location in Nashik' },
      { id: 'c9', image: '/images/doctor-hero.png', title: 'Recovery Area', caption: 'Post-procedure comfort zone' },
    ],
  },
  {
    slug: 'patient',
    title: 'Patient',
    subtitle: 'Patient Transformations',
    description: 'Real results from real patients. Browse through our collection of before-and-after transformations that showcase the effectiveness of our personalized treatment plans and advanced dermatological procedures.',
    icon: 'Users',
    color: 'accent',
    photos: [
      { id: 'p1', image: '/images/doctor-about.png', title: 'Acne Treatment Results', caption: 'Clear skin after 6 sessions' },
      { id: 'p2', image: '/images/doctor-hero.png', title: 'Skin Brightening', caption: 'Visible glow improvement' },
      { id: 'p3', image: '/images/doctor-about.png', title: 'Pigmentation Correction', caption: 'Even tone restoration' },
      { id: 'p4', image: '/images/clinic.png', title: 'Hair Restoration', caption: 'PRP therapy results' },
      { id: 'p5', image: '/images/doctor-hero.png', title: 'Anti-Aging Results', caption: 'Youthful skin restoration' },
      { id: 'p6', image: '/images/doctor-about.png', title: 'Scar Reduction', caption: 'Micro-needling outcomes' },
      { id: 'p7', image: '/images/clinic.png', title: 'Skin Rejuvenation', caption: 'Chemical peel results' },
      { id: 'p8', image: '/images/doctor-hero.png', title: 'Laser Hair Removal', caption: 'Smooth, hair-free skin' },
      { id: 'p9', image: '/images/doctor-about.png', title: 'Botox Results', caption: 'Natural wrinkle reduction' },
    ],
  },
  {
    slug: 'procedure',
    title: 'Procedure',
    subtitle: 'Clinical Procedures',
    description: 'Witness our advanced dermatological procedures in action. From laser treatments to chemical peels, our gallery showcases the precision, care, and expertise that goes into every treatment session.',
    icon: 'Stethoscope',
    color: 'primary',
    photos: [
      { id: 'pr1', image: '/images/doctor-hero.png', title: 'Laser Treatment Session', caption: 'Precision laser therapy in action' },
      { id: 'pr2', image: '/images/doctor-about.png', title: 'Chemical Peel Application', caption: 'Professional chemical exfoliation' },
      { id: 'pr3', image: '/images/clinic.png', title: 'PRP Hair Therapy', caption: 'Platelet-rich plasma procedure' },
      { id: 'pr4', image: '/images/doctor-hero.png', title: 'Microdermabrasion', caption: 'Skin resurfacing technique' },
      { id: 'pr5', image: '/images/doctor-about.png', title: 'Botox Injection', caption: 'Precise anti-wrinkle treatment' },
      { id: 'pr6', image: '/images/clinic.png', title: 'Derma Roller Therapy', caption: 'Micro-needling for skin renewal' },
      { id: 'pr7', image: '/images/doctor-hero.png', title: 'LED Light Therapy', caption: 'Photodynamic skin treatment' },
      { id: 'pr8', image: '/images/doctor-about.png', title: 'Skin Biopsy', caption: 'Diagnostic procedure' },
      { id: 'pr9', image: '/images/clinic.png', title: 'Cryotherapy Session', caption: 'Targeted cold therapy treatment' },
    ],
  },
];

export const getCategoryBySlug = (slug) => {
  return galleryCategories.find((cat) => cat.slug === slug) || null;
};
