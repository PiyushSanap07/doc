// Import images from assets/galleryimages
import img1 from '../assets/galleryimages/gallery(1).jpeg';
import img2 from '../assets/galleryimages/gallery(2).jpeg';
import img3 from '../assets/galleryimages/gallery(3).jpeg';
import img4 from '../assets/galleryimages/gallery(4).jpeg';
import img5 from '../assets/galleryimages/gallery(5).jpeg';
import img6 from '../assets/galleryimages/gallery(6).jpeg';
import img7 from '../assets/galleryimages/gallery(7).jpeg';
import img8 from '../assets/galleryimages/gallery(8).jpeg';
import img9 from '../assets/galleryimages/gallery(9).jpeg';
import img10 from '../assets/galleryimages/gallery(10).jpeg';
import img11 from '../assets/galleryimages/gallery(11).jpeg';
import img12 from '../assets/galleryimages/gallery(12).jpeg';
import img13 from '../assets/galleryimages/gallery(13).jpeg';
import img14 from '../assets/galleryimages/gallery(14).jpeg';
import img15 from '../assets/galleryimages/gallery(15).jpeg';
import img16 from '../assets/galleryimages/gallery(16).jpeg';
import img17 from '../assets/galleryimages/gallery(17).jpeg';

export const galleryCategories = [
  {
    slug: 'clinic',
    title: 'Clinic',
    subtitle: 'Our Modern Facility',
    description: 'Step inside our state-of-the-art dermatology clinic in Nashik. Equipped with the latest technology and designed for patient comfort, our clinic reflects our commitment to world-class dermatological care.',
    icon: 'Building2',
    color: 'primary',
    photos: [
      { id: 'c1', image: img1, title: 'Reception Area', caption: 'Welcoming entrance with modern aesthetics' },
      { id: 'c2', image: img2, title: 'Consultation Chamber', caption: 'Private consultation with advanced diagnostic tools' },
      { id: 'c3', image: img3, title: 'Treatment Room', caption: 'Fully equipped procedure suite' },
      { id: 'c4', image: img4, title: 'Laser Suite', caption: 'Dedicated laser therapy and skincare facility' },
      { id: 'c5', image: img5, title: 'Sterilization Zone', caption: 'Hospital-grade hygiene and safety standards' },
      { id: 'c6', image: img6, title: 'Waiting Lounge', caption: 'Comfortable and calming patient waiting area' },
    ],
  },
  {
    slug: 'procedure',
    title: 'Procedure',
    subtitle: 'Clinical Procedures',
    description: 'Witness our advanced dermatological procedures in action. From laser treatments to clinical skincare, our gallery showcases the precision, care, and expertise that goes into every treatment session.',
    icon: 'Stethoscope',
    color: 'primary',
    photos: [
      { id: 'pr1', image: img7, title: 'Clinical Treatment Session', caption: 'Advanced clinical care in progress' },
      { id: 'pr2', image: img8, title: 'Specialized Procedure', caption: 'Personalized dermatological treatment' },
      { id: 'pr3', image: img9, title: 'Aesthetic Skin Therapy', caption: 'Targeted skin health procedure' },
      { id: 'pr4', image: img10, title: 'Laser & Light Therapy', caption: 'State-of-the-art technology in action' },
      { id: 'pr5', image: img11, title: 'Advanced Care Protocol', caption: 'Safe and guided clinical procedure' },
      { id: 'pr6', image: img12, title: 'Dermatology Session', caption: 'Precision diagnosis and clinical management' },
    ],
  },
  {
    slug: 'patient',
    title: 'Patient',
    subtitle: 'Patient Transformations',
    description: 'Real results from real patients. Browse through our collection showcasing the effectiveness of our personalized treatment plans and advanced dermatological care.',
    icon: 'Users',
    color: 'accent',
    photos: [
      { id: 'p1', image: img13, title: 'Clinical Result 1', caption: 'Visible skin health improvement' },
      { id: 'p2', image: img14, title: 'Clinical Result 2', caption: 'Personalized treatment outcome' },
      { id: 'p3', image: img15, title: 'Clinical Result 3', caption: 'Restored glow and skin texture' },
      { id: 'p4', image: img16, title: 'Clinical Result 4', caption: 'Comprehensive dermatological care' },
      { id: 'p5', image: img17, title: 'Clinical Result 5', caption: 'Long-term healthy skin results' },
    ],
  },
];

export const getCategoryBySlug = (slug) => {
  return galleryCategories.find((cat) => cat.slug === slug) || null;
};
