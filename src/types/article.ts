export interface Article {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  content: { type: "paragraph" | "subheading"; text: string }[];
  author: string;
  authorRole: string;
  readTime: string;
}
