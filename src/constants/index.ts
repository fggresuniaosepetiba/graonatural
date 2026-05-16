import type { NavLink } from "@/types";

export const SITE_NAME = "Grão Natural";
export const SITE_DESCRIPTION =
  "Saúde, sabor e bem-estar em cada detalhe. Produtos naturais selecionados para transformar sua rotina com mais qualidade, aroma e equilíbrio.";
export const SITE_URL = "https://graonatural.com.br";

export const WHATSAPP_NUMBER = "5521994343928";
export const WHATSAPP_MESSAGE = "Olá! Gostaria de fazer um pedido.";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Sobre", href: "#" },
  { label: "Bem-estar", href: "/bem-estar" },
  { label: "Produtos", href: "/produtos" },
  { label: "Contato", href: "#" },
];

export const CONTACT_INFO = {
  address: "Rua das Amendoeiras, 1024\nJardins, São Paulo - SP",
  email: "contato@graonatural.com.br",
  phone: "+55 (21) 9.9434-3928",
};

export const FOUNDER = {
  name: "Vitória Justo",
  age: 29,
  role: "CEO & Founder",
  company: "Grão Natural",
  photo: "/images/vitoria-IA.png",
  otherCompanies: ["Baobá Cosméticos"],
  groupName: "Baobab Cosmetics Manufacturing Company LTDA",
};
