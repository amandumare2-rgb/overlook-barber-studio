export interface Service {
  id: string;
  number: string;
  name: string;
  description: string;
  duration: string;
  image: string;
}

export interface Barber {
  id: string;
  name: string;
  role: string;
  bio: string;
  experience: string;
  specialty: string;
  image: string;
  instagram: string;
}

export interface Transformation {
  id: string;
  title: string;
  client: string;
  service: string;
  beforeImage: string;
  afterImage: string;
  notes: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  tag: string;
  image: string;
  aspect: 'square' | 'portrait' | 'landscape' | 'tall';
}

export interface Review {
  id: string;
  author: string;
  location: string;
  service: string;
  rating: number;
  content: string;
  image?: string;
  date: string;
}

export interface SocialPost {
  id: string;
  image: string;
  caption: string;
  likes: string;
}
