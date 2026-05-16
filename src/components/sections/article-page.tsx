import Link from "next/link";
import { ArrowLeft, Clock, User } from "lucide-react";
import type { Article } from "@/types/article";

interface ArticlePageProps {
  article: Article;
  relatedArticles: Article[];
}

export function ArticlePage({ article, relatedArticles }: ArticlePageProps) {
  return (
    <article className="bg-white">
      {/* ─── HERO ─── */}
      <section className="relative h-[50vh] min-h-[400px] max-h-[600px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${article.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-[800px] px-6 md:px-16 pb-12 md:pb-16">
          <Link
            href="/bem-estar"
            className="inline-flex items-center gap-2 font-body text-[11px] font-semibold tracking-[0.15em] text-white/70 uppercase mb-6 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-3 w-3" />
            Voltar para Bem-estar
          </Link>
          <span className="block font-body text-[11px] font-semibold tracking-[0.2em] text-[#8B9B7A] uppercase mb-4">
            {article.category}
          </span>
          <h1 className="font-headline text-[clamp(1.8rem,4vw,3rem)] leading-[1.15] tracking-tight text-white">
            {article.title}
          </h1>
          <div className="flex items-center gap-6 mt-5 text-white/60">
            <span className="flex items-center gap-2 font-body text-xs">
              <User className="h-3.5 w-3.5" />
              {article.author}
            </span>
            <span className="flex items-center gap-2 font-body text-xs">
              <Clock className="h-3.5 w-3.5" />
              {article.readTime} de leitura
            </span>
          </div>
        </div>
      </section>

      {/* ─── CONTEÚDO ─── */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[720px] px-6 md:px-16">
          <div className="space-y-6">
            {article.content.map((block, i) =>
              block.type === "subheading" ? (
                <h2
                  key={i}
                  className="font-headline text-xl md:text-2xl text-[#2C2C2C] leading-tight pt-6"
                >
                  {block.text}
                </h2>
              ) : (
                <p
                  key={i}
                  className="font-body text-base md:text-lg text-[#5C5C5C] leading-[1.9]"
                >
                  {block.text}
                </p>
              ),
            )}
          </div>

          <div className="mt-16 pt-8 border-t border-[#E5E0D6]">
            <p className="font-body text-sm text-[#8B9B7A]">
              Por{" "}
              <strong className="text-[#2C2C2C]">{article.author}</strong> —{" "}
              {article.authorRole}
            </p>
            <Link
              href="/bem-estar"
              className="inline-flex items-center gap-2 font-body text-[11px] font-semibold tracking-[0.15em] text-[#8B9B7A] uppercase mt-4 hover:gap-3 transition-all"
            >
              <ArrowLeft className="h-3 w-3" />
              Voltar para Bem-estar
            </Link>
          </div>
        </div>
      </section>

      {/* ─── ARTIGOS RELACIONADOS ─── */}
      {relatedArticles.length > 0 && (
        <section className="py-20 md:py-28 bg-[#F8F6F2]">
          <div className="mx-auto max-w-[1280px] px-6 md:px-16">
            <h2 className="font-headline text-2xl md:text-3xl text-[#2C2C2C] mb-12">
              Artigos relacionados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((related) => (
                <Link
                  key={related.slug}
                  href={`/bem-estar/${related.slug}`}
                  className="group"
                >
                  <div className="aspect-[16/10] overflow-hidden mb-4">
                    <div
                      className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url(${related.image})` }}
                    />
                  </div>
                  <span className="font-body text-[10px] font-semibold tracking-[0.15em] text-[#8B9B7A] uppercase">
                    {related.category}
                  </span>
                  <h3 className="font-headline text-lg text-[#2C2C2C] leading-tight mt-2 group-hover:text-[#8B9B7A] transition-colors">
                    {related.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
