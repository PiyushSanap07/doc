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

export const galleryCategories = [
  {
    slug: 'clinic',
    title: 'Clinic',
    subtitle: 'Our Modern Facility',
    description: 'A look inside our dermatology clinic in Nashik, with dedicated spaces for consultation and treatment.',
    icon: 'Building2',
    color: 'primary',
    photos: [
      { id: 'c1', image: img1, title: 'Reception Area', caption: 'Welcoming entrance with modern aesthetics' },
      { id: 'c2', image: img2, title: 'Consultation Chamber', caption: 'Private consultation with advanced diagnostic tools' },
      { id: 'c3', image: img3, title: 'Treatment Room', caption: 'Fully equipped procedure suite' },
      { id: 'c4', image: img4, title: 'Laser Suite', caption: 'Dedicated laser therapy and skincare facility' },
      { id: 'c5', image: img5, title: 'Sterilization Zone', caption: 'Clean and maintained treatment environment' },
      { id: 'c6', image: img6, title: 'Waiting Lounge', caption: 'Comfortable and calming patient waiting area' },
    ],
  },
  {
    slug: 'procedure',
    title: 'Procedure',
    subtitle: 'Clinical Procedures',
    description: 'A view of the clinical procedure rooms and the treatment environment at our Nashik clinic.',
    icon: 'Stethoscope',
    color: 'primary',
    photos: [
      { id: 'pr1', image: img7, title: 'Clinical Treatment Session', caption: 'Clinical care in progress' },
      { id: 'pr2', image: img8, title: 'Specialized Procedure', caption: 'Personalized dermatological treatment' },
      { id: 'pr3', image: img9, title: 'Aesthetic Skin Therapy', caption: 'Targeted skin health procedure' },
      { id: 'pr4', image: img10, title: 'Laser & Light Therapy', caption: 'Treatment equipment in use' },
      { id: 'pr5', image: img11, title: 'Advanced Care Protocol', caption: 'Safe and guided clinical procedure' },
      { id: 'pr6', image: img12, title: 'Dermatology Session', caption: 'Precision diagnosis and clinical management' },
    ],
  },
];

export const getCategoryBySlug = (slug) => {
  return galleryCategories.find((cat) => cat.slug === slug) || null;
};
