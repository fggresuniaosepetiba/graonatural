export interface Product {
  id: string;
  name: string;
  description: string;
  weight: string;
  badge: string;
  price: number;
  image: string;
  category: string;
  section: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  initials: string;
  text: string;
  rating: number;
}

export interface NavLink {
  label: string;
  href: string;
}
