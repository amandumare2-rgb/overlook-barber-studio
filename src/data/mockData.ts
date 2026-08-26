import { Service, Barber, Transformation, GalleryItem, Review, SocialPost } from '../types';

export const servicesData: Service[] = [
  {
    id: 'signature-haircut',
    number: '01',
    name: 'Signature Haircut',
    description: 'Precision cutting tailored to your face shape, hair texture and personal style. Includes comprehensive consultation, neck shave, and bespoke styling.',
    duration: '45 mins',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'skin-fade',
    number: '02',
    name: 'Skin Fade',
    description: 'Clean, seamless fades with sharp finishing and meticulous attention to detail. Low, mid, high, or taper fade crafted with foil finish.',
    duration: '45 mins',
    image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'classic-cut',
    number: '03',
    name: 'Classic Cut',
    description: 'Timeless cuts with a modern finish. Tailored scissor work, parted contours, and natural pompadours crafted with traditional techniques.',
    duration: '40 mins',
    image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'beard-sculpt',
    number: '04',
    name: 'Beard Sculpt',
    description: 'Detailed beard shaping, trimming, contouring, and hot towel finish with organic botanical oils and straight-edge blade detailing.',
    duration: '30 mins',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'hair-and-beard',
    number: '05',
    name: 'Hair & Beard',
    description: 'A complete grooming experience combining tailored haircut, custom fade, beard architecture, and revitalising hot towel relaxation.',
    duration: '75 mins',
    image: 'https://images.unsplash.com/photo-1517832606589-7929c392b5a7?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'restyle',
    number: '06',
    name: 'Restyle',
    description: 'For a completely new look, built around your features, hair density and lifestyle. In-depth aesthetic consultation and product regimen advice.',
    duration: '60 mins',
    image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=900&q=80',
  }
];

export const barbersData: Barber[] = [
  {
    id: 'james-carter',
    name: 'James Carter',
    role: 'Creative Director',
    bio: 'Specialising in modern cuts, textured styles and precision fades with an editorial approach honed across London and New York studios.',
    experience: '14 Years Experience',
    specialty: 'Textured Crops & Editorial Styling',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    instagram: '@james.overlook'
  },
  {
    id: 'marcus-reed',
    name: 'Marcus Reed',
    role: 'Master Barber',
    bio: 'Known for classic scissor craft, clean razor fades and meticulous finishing. Trained in traditional British and Italian barbering traditions.',
    experience: '12 Years Experience',
    specialty: 'Classic Tapers & Scissor Architecture',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    instagram: '@marcus.reed'
  },
  {
    id: 'alex-morgan',
    name: 'Alex Morgan',
    role: 'Senior Barber',
    bio: 'Focused on personalised styles, contemporary grooming and subtle gradient work designed to grow out effortlessly.',
    experience: '9 Years Experience',
    specialty: 'Mid Fades & Modern Mullets',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    instagram: '@alex.overlook'
  },
  {
    id: 'noah-bennett',
    name: 'Noah Bennett',
    role: 'Barber & Stylist',
    bio: 'Combining traditional barbering with modern runway styling. Expert in thick hair management and beard shaping.',
    experience: '7 Years Experience',
    specialty: 'Beard Sculpting & Natural Waves',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80',
    instagram: '@noah.cuts'
  }
];

export const transformationsData: Transformation[] = [
  {
    id: 'trans-1',
    title: 'Skin Fade Transformation',
    client: 'Ethan M.',
    service: 'Haircut + Skin Fade',
    beforeImage: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=80',
    afterImage: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=900&q=80',
    notes: 'Transitioned overgrown sides into a zero-gap high skin fade with natural textured top.'
  },
  {
    id: 'trans-2',
    title: 'Long Hair to Textured Crop',
    client: 'Liam D.',
    service: 'Restyle & Texture Cut',
    beforeImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80',
    afterImage: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=80',
    notes: 'Removed 6 inches of weight, creating an effortless forward-textured fringe and clean taper.'
  },
  {
    id: 'trans-3',
    title: 'Beard Sculpt & Contouring',
    client: 'Oliver K.',
    service: 'Beard Sculpt + Lineup',
    beforeImage: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=900&q=80',
    afterImage: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=80',
    notes: 'Sharpened the jawline perimeter and blended sideburns into a natural gradient fade.'
  },
  {
    id: 'trans-4',
    title: 'Complete Hair + Beard Overhaul',
    client: 'Lucas S.',
    service: 'Hair & Beard Complete',
    beforeImage: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=900&q=80',
    afterImage: 'https://images.unsplash.com/photo-1517832606589-7929c392b5a7?auto=format&fit=crop&w=900&q=80',
    notes: 'Precision low taper fade with sculpted beard transition and matte clay finish.'
  }
];

export const galleryData: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Skin Fade + Textured Crop',
    tag: 'Textured Crop',
    image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1000&q=80',
    aspect: 'portrait'
  },
  {
    id: 'gal-2',
    title: 'Classic Taper & Scissor Part',
    tag: 'Classic Taper',
    image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1000&q=80',
    aspect: 'square'
  },
  {
    id: 'gal-3',
    title: 'Artisan Grooming Station & Studio',
    tag: 'Studio Space',
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1000&q=80',
    aspect: 'landscape'
  },
  {
    id: 'gal-4',
    title: 'Precision Beard Sculpt & Lineup',
    tag: 'Beard Sculpt',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1000&q=80',
    aspect: 'portrait'
  },
  {
    id: 'gal-5',
    title: 'Modern Restyle with Natural Texture',
    tag: 'Modern Restyle',
    image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=1000&q=80',
    aspect: 'square'
  },
  {
    id: 'gal-6',
    title: 'Client Finish & Consultation',
    tag: 'Client Experience',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1000&q=80',
    aspect: 'landscape'
  }
];

export const reviewsData: Review[] = [
  {
    id: 'rev-1',
    author: 'Daniel M.',
    location: 'Toronto, ON',
    service: 'Skin Fade',
    rating: 5,
    content: "Best cut I've had in years. The attention to detail was unreal, and the barber actually took the time to understand what I wanted. The studio vibe is calm, refined, and genuinely welcoming.",
    date: '2 weeks ago',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'rev-2',
    author: 'Ryan T.',
    location: 'King West, Toronto',
    service: 'Signature Haircut',
    rating: 5,
    content: "Great atmosphere, excellent service and an even better haircut. I've finally found my regular barber after moving from London. Marcus understood my hair density immediately.",
    date: '1 month ago',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'rev-3',
    author: 'Christopher V.',
    location: 'Yorkville, Toronto',
    service: 'Hair & Beard Complete',
    rating: 5,
    content: "The beard work alone is unmatched. James took what felt like an overgrown mess and sculpted it into something sharp and tailored. Worth every penny.",
    date: '3 weeks ago',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'rev-4',
    author: 'Julian B.',
    location: 'Queen West, Toronto',
    service: 'Restyle',
    rating: 5,
    content: "Walked in with long hair and no clear idea of what to do. Alex gave me an incredible textured crop that is super easy to style every morning. Excellent coffee too.",
    date: '1 month ago',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'rev-5',
    author: 'Sam W.',
    location: 'Downtown Toronto',
    service: 'Classic Cut',
    rating: 5,
    content: "Impeccable craft. No rush, no loud gimmicks — just true professionals who treat barbering as a design discipline. OVERLOOK sets the benchmark in Canada.",
    date: '2 months ago',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80'
  }
];

export const socialPosts: SocialPost[] = [
  {
    id: 'soc-1',
    image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=600&q=80',
    caption: 'Mid drop fade with razor-textured crown. Handled by @james.overlook.',
    likes: '482'
  },
  {
    id: 'soc-2',
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=600&q=80',
    caption: 'Quiet morning light across Station 02. Crafted for relaxed focus.',
    likes: '621'
  },
  {
    id: 'soc-3',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=600&q=80',
    caption: 'Straight razor graduation and organic balm finish on @oliver.k.',
    likes: '519'
  },
  {
    id: 'soc-4',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80',
    caption: 'The consultation is 50% of the cut. Tailored scissor contouring in session.',
    likes: '744'
  }
];
