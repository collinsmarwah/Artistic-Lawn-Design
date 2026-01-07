export interface Review {
  id: number;
  name: string;
  avatar: string;
  date: string;
  rating: number;
  text: string;
  verified?: boolean;
}

export interface Project {
  id: number;
  category: string;
  title: string;
  location: string;
  image: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}