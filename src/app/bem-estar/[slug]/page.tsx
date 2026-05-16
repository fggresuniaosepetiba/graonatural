import { notFound } from "next/navigation";
import { articles, getRelatedArticles } from "@/data/articles";
import { ArticlePage } from "@/components/sections/article-page";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const related = getRelatedArticles(slug);

  return <ArticlePage article={article} relatedArticles={related} />;
}
