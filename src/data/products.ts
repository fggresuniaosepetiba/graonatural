import type { Product, Category, Testimonial } from "@/types";

export const products: Product[] = [
  {
    id: "mix-vitalidade",
    name: "Mix Vitalidade",
    description: "Blend especial de grãos e sementes para energia e disposição.",
    weight: "250G",
    badge: "ORGÂNICO",
    price: 42.9,
    image:
      "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=800&auto=format&fit=crop",
    category: "graos",
  },
  {
    id: "infusao-serenidade",
    name: "Infusão Serenidade",
    description: "Chá herbal calmante com notas florais e ervas selecionadas.",
    weight: "50G",
    badge: "ARTESANAL",
    price: 28.5,
    image:
      "https://images.unsplash.com/photo-1563822249366-3efb23b8e0c9?q=80&w=800&auto=format&fit=crop",
    category: "chas",
  },
  {
    id: "mel-silvestre",
    name: "Mel Silvestre",
    description: "Mel puro colhido de abelhas nativas, rico em propriedades nutricionais.",
    weight: "300G",
    badge: "PURO",
    price: 35.0,
    image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=800&auto=format&fit=crop",
    category: "bem-estar",
  },
  {
    id: "azeite-extra-virgem",
    name: "Azeite Extra Virgem",
    description: "Azeite premium prensado a frio, com acidez controlada e sabor frutado.",
    weight: "500ML",
    badge: "PRENSADO A FRIO",
    price: 78.9,
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=800&auto=format&fit=crop",
    category: "temperos",
  },
];

export const categories: Category[] = [
  {
    id: "chas",
    name: "Chás & Infusões",
    slug: "chas-infusoes",
    description: "Descobrir Coleção",
    image:
      "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "graos",
    name: "Grãos & Sementes",
    slug: "graos-sementes",
    description: "Ver Opções",
    image:
      "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "temperos",
    name: "Temperos & Condimentos",
    slug: "temperos-condimentos",
    description: "Conhecer Sabores",
    image:
      "https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "bem-estar",
    name: "Bem-estar",
    slug: "bem-estar",
    description: "Cuidado Integral",
    image:
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800&auto=format&fit=crop",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Ana Martins",
    location: "SÃO PAULO, SP",
    initials: "AM",
    text: "O atendimento é excepcional e a qualidade dos chás me surpreendeu positivamente. Sinto a pureza em cada xícara.",
    rating: 5,
  },
  {
    id: "2",
    name: "Ricardo Costa",
    location: "CURITIBA, PR",
    initials: "RC",
    text: "Melhores temperos que já usei. O aroma que tomou conta da minha cozinha foi algo que nunca tinha experimentado antes.",
    rating: 5,
  },
  {
    id: "3",
    name: "Luisa Ferreira",
    location: "RIO DE JANEIRO, RJ",
    initials: "LF",
    text: "Embalagens impecáveis e produtos fresquinhos. Ganharam um cliente fiel pela transparência e pelo propósito da marca.",
    rating: 5,
  },
];
