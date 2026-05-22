"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, Sparkles, Quote } from "lucide-react";
import { articles } from "@/data/articles";

const IMAGES = {
  hero: "https://images.unsplash.com/photo-1534096210335-a3b961613bb5?q=80&w=1600&auto=format&fit=crop",
  intro: "https://images.unsplash.com/photo-1501139083538-0139583c060f?q=80&w=1200&auto=format&fit=crop",
  founder: "/images/vitoria-IA.png",
  julia: "/images/julia-ia.png",
  quote: "https://images.unsplash.com/photo-1767611098846-05ed978b17ce?q=80&w=1200&auto=format&fit=crop",
};

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

export function WellnessPage() {
  return (
    <article className="bg-white">
      {/* ─── HERO ─── */}
      <section className="relative h-screen min-h-[600px] max-h-[1000px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${IMAGES.hero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        </div>
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative z-10 mx-auto w-full max-w-[1280px] px-6 md:px-16"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center gap-2 font-body text-[11px] font-semibold tracking-[0.2em] text-white/70 uppercase mb-6"
          >
            <Leaf className="h-3.5 w-3.5" />
            Grão Natural · Bem-estar
          </motion.span>
          <h1 className="font-headline text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.1] tracking-tight text-white max-w-3xl">
            Bem-estar começa
            <br />
            <span className="italic">nos pequenos hábitos</span>
          </h1>
          <p className="mt-5 font-body text-lg md:text-xl text-white/80 max-w-xl leading-relaxed">
            Conhecimento, equilíbrio e cuidado para transformar sua rotina.
          </p>
        </motion.div>
      </section>

      {/* ─── INTRODUÇÃO EDITORIAL ─── */}
      <section className="py-28 md:py-36">
        <div className="mx-auto max-w-[1280px] px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16">
            <motion.div {...fadeUp} className="md:col-span-3">
              <span className="font-body text-[11px] font-semibold tracking-[0.2em] text-[#8B9B7A] uppercase mb-4 block">
                Nossa Essência
              </span>
              <h2 className="font-headline text-[clamp(1.8rem,3.5vw,2.8rem)] leading-[1.2] tracking-tight text-[#2C2C2C] mb-8">
                O cuidado integral como
                <br />
                <span className="italic text-[#8B9B7A]">filosofia de vida</span>
              </h2>
              <div className="space-y-5 font-body text-base md:text-lg text-[#5C5C5C] leading-[1.8]">
                <p>
                  Na Grão Natural, acreditamos que o bem-estar verdadeiro começa na
                  escolha consciente dos alimentos que colocamos à mesa, no respeito
                  ao ritmo do nosso corpo e na conexão com a natureza.
                </p>
                <p>
                  Esta página é um convite para explorar conhecimento, descobrir
                  práticas transformadoras e cultivar uma relação mais saudável com
                  você mesmo. Aqui, cada artigo é pensado para inspirar e informar
                  com a mesma qualidade e cuidado que dedicamos aos nossos produtos.
                </p>
              </div>
            </motion.div>
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="md:col-span-2 relative"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${IMAGES.intro})` }}
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-sm max-w-[220px]">
                <Quote className="h-5 w-5 text-[#8B9B7A] mb-2" />
                <p className="font-body text-sm text-[#5C5C5C] leading-relaxed italic">
                  &ldquo;Cuidar de si também é um ato de amor.&rdquo;
                </p>
                <p className="font-body text-[10px] font-semibold tracking-[0.1em] text-[#8B9B7A] uppercase mt-3">
                  Vitória Justo
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── QUOTE 1 ─── */}
      <section className="py-20 md:py-28 bg-[#F8F6F2]">
        <div className="mx-auto max-w-[900px] px-6 md:px-16 text-center">
          <motion.div {...fadeUp}>
            <Sparkles className="h-6 w-6 text-[#8B9B7A] mx-auto mb-6" />
            <blockquote className="font-headline text-2xl md:text-3xl lg:text-4xl text-[#2C2C2C] leading-[1.4] tracking-tight italic">
              &ldquo;Bem-estar não é luxo. É necessidade.&rdquo;
            </blockquote>
            <div className="mt-6 w-12 h-px bg-[#D4C9B8] mx-auto" />
            <p className="mt-6 font-body text-sm text-[#8B9B7A] tracking-[0.15em] uppercase">
              Vitória Justo — CEO &amp; Founder da Grão Natural
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── GRID DE ARTIGOS ─── */}
      <section className="py-28 md:py-36">
        <div className="mx-auto max-w-[1280px] px-6 md:px-16">
          <motion.div {...fadeUp} className="mb-16">
            <span className="font-body text-[11px] font-semibold tracking-[0.2em] text-[#8B9B7A] uppercase mb-4 block">
              Conteúdo
            </span>
            <h2 className="font-headline text-[clamp(1.8rem,3.5vw,2.8rem)] leading-[1.2] tracking-tight text-[#2C2C2C]">
              Artigos e reflexões para
              <br />
              <span className="italic text-[#8B9B7A]">uma vida mais leve</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {articles.map((article, i) => (
              <Link
                key={article.slug}
                href={`/bem-estar/${article.slug}`}
                className="group"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ delay: i * 0.06, duration: 0.5 }}
                >
                  <div className="aspect-[16/10] overflow-hidden mb-5">
                    <div
                      className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url(${article.image})` }}
                    />
                  </div>
                  <span className="font-body text-[10px] font-semibold tracking-[0.15em] text-[#8B9B7A] uppercase">
                    {article.category}
                  </span>
                  <h3 className="font-headline text-xl md:text-2xl text-[#2C2C2C] leading-tight mt-2 mb-3 group-hover:text-[#8B9B7A] transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="font-body text-sm md:text-base text-[#5C5C5C] leading-relaxed">
                    {article.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 font-body text-[11px] font-semibold tracking-[0.15em] text-[#8B9B7A] uppercase mt-4 group-hover:gap-3 transition-all duration-300">
                    Ler artigo
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── QUOTE 2 ─── */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${IMAGES.quote})` }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 mx-auto max-w-[900px] px-6 md:px-16 text-center">
          <motion.div {...fadeUp}>
            <blockquote className="font-headline text-2xl md:text-3xl lg:text-4xl text-white leading-[1.4] tracking-tight italic">
              &ldquo;Pequenos hábitos naturais podem mudar completamente uma rotina.&rdquo;
            </blockquote>
            <div className="mt-6 w-12 h-px bg-white/30 mx-auto" />
            <p className="mt-6 font-body text-sm text-white/60 tracking-[0.15em] uppercase">
              Vitória Justo — CEO &amp; Founder da Grão Natural
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── FUNDADORAS — EDITORIAL PREMIUM ─── */}
      <section className="py-28 md:py-36 bg-white overflow-hidden">
        <div className="mx-auto max-w-[1280px] px-6 md:px-16">
          {/* Cabeçalho editorial */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
            className="text-center mb-20 md:mb-28"
          >
            <span className="font-body text-[11px] font-semibold tracking-[0.2em] text-[#8B9B7A] uppercase mb-4 block">
              Fundadoras
            </span>
            <h2 className="font-headline text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-tight text-[#2C2C2C] mb-5">
              Duas visões,{" "}
              <span className="italic text-[#8B9B7A]">um propósito</span>
            </h2>
            <p className="font-body text-base md:text-lg text-[#5C5C5C] max-w-2xl mx-auto leading-relaxed">
              Bem-estar também é sobre quem inspira o caminho. Duas mulheres que
              transformaram propósito em marca, cuidado em negócio e visão em legado.
            </p>
          </motion.div>

          {/* ─── VITÓRIA JUSTO ─── */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 mb-24 md:mb-32 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
              className="md:col-span-7 relative"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={IMAGES.founder}
                  alt="Vitória Justo"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-sm p-6 shadow-sm hidden md:block max-w-[240px]">
                <p className="font-headline text-xl text-[#2C2C2C]">Vitória Justo</p>
                <p className="font-body text-[10px] font-semibold tracking-[0.1em] text-[#8B9B7A] uppercase mt-1">
                  29 anos · CEO &amp; Founder
                </p>
                <div className="mt-3 w-8 h-px bg-[#D4C9B8]" />
                <p className="font-body text-xs text-[#5C5C5C] italic mt-3 leading-relaxed">
                  &ldquo;Empresária visionária que une estratégia e propósito.&rdquo;
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
              className="md:col-span-5"
            >
              <span className="font-body text-[10px] font-semibold tracking-[0.25em] text-[#8B9B7A] uppercase block mb-3">
                CEO &amp; Founder
              </span>
              <h3 className="font-headline text-[clamp(2rem,3vw,2.8rem)] leading-[1.1] tracking-tight text-[#2C2C2C] mb-6">
                Vitória Justo
              </h3>
              <div className="space-y-4 font-body text-base text-[#5C5C5C] leading-[1.8]">
                <p>
                  Empresária, CEO &amp; Founder da <strong className="text-[#2C2C2C]">Grão Natural</strong>.
                  Sua jornada empreendedora começou cedo, movida pela crença de que o
                  cuidado com a alimentação é o primeiro passo para uma vida mais
                  equilibrada e significativa.
                </p>
                <p>
                  Vitória também é fundadora e sócia do grupo{" "}
                  <strong className="text-[#2C2C2C]">
                    Baobab Cosmetics Manufacturing Company LTDA
                  </strong>
                  , responsável pela marca{" "}
                  <strong className="text-[#2C2C2C]">Baobá Cosméticos</strong>, e
                  sócia e fundadora do grupo{" "}
                  <strong className="text-[#2C2C2C]">J2 Capital</strong>,
                  responsável pela marca{" "}
                  <strong className="text-[#2C2C2C]">La Dame Famme</strong>.
                </p>
                <p>
                  À frente de múltiplos negócios, une visão estratégica e sensibilidade
                  humana — cada empreendimento reflete seu compromisso com a qualidade,
                  a autenticidade e o bem-estar.
                </p>
              </div>
            </motion.div>
          </div>

          {/* ─── FRASE INSPIRADORA ─── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
            className="text-center py-16 md:py-20 mb-24 md:mb-32"
          >
            <div className="w-px h-12 bg-[#D4C9B8] mx-auto mb-8" />
            <p className="font-headline text-2xl md:text-3xl lg:text-4xl text-[#2C2C2C] italic leading-[1.4] max-w-3xl mx-auto px-4">
              &ldquo;Cuidado, propósito e sofisticação em cada detalhe.&rdquo;
            </p>
            <div className="w-px h-12 bg-[#D4C9B8] mx-auto mt-8" />
          </motion.div>

          {/* ─── JULIA ─── */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
              className="md:col-span-5 md:order-1 order-2"
            >
              <span className="font-body text-[10px] font-semibold tracking-[0.25em] text-[#8B9B7A] uppercase block mb-3">
                CMO &amp; Founder
              </span>
              <h3 className="font-headline text-[clamp(2rem,3vw,2.8rem)] leading-[1.1] tracking-tight text-[#2C2C2C] mb-6">
                Julia Andrade
              </h3>
              <div className="space-y-4 font-body text-base text-[#5C5C5C] leading-[1.8]">
                <p>
                  Julia Andrade é <strong className="text-[#2C2C2C]">CMO &amp; Founder</strong> da Grão Natural,
                  peça fundamental na construção da marca. Com visão criativa e
                  estratégica, conecta o público ao universo de bem-estar e
                  naturalidade que a marca representa.
                </p>
                <p>
                  Sua atuação vai além do branding — Julia é sócia e CMO da{" "}
                  <strong className="text-[#2C2C2C]">La Dame Famme</strong>,
                  marca do grupo empresarial{" "}
                  <strong className="text-[#2C2C2C]">J2 Capital</strong>,
                  onde contribui com sua expertise em posicionamento de marca e
                  comunicação premium.
                </p>
                <p>
                  Essencial para a construção da identidade da Grão Natural, sua
                  presença combina refinamento, visão estratégica e o olhar
                  sofisticado que define a essência da marca.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
              className="md:col-span-7 md:order-2 order-1 relative"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={IMAGES.julia}
                  alt="Julia"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-sm p-6 shadow-sm hidden md:block max-w-[240px]">
                <p className="font-headline text-xl text-[#2C2C2C]">Julia Andrade</p>
                <p className="font-body text-[10px] font-semibold tracking-[0.1em] text-[#8B9B7A] uppercase mt-1">
                  CMO &amp; Founder
                </p>
                <div className="mt-3 w-8 h-px bg-[#D4C9B8]" />
                <p className="font-body text-xs text-[#5C5C5C] italic mt-3 leading-relaxed">
                  &ldquo;Sofisticação e propósito caminham juntos.&rdquo;
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── QUOTE 3 ─── */}
      <section className="py-20 md:py-28 bg-[#F8F6F2]">
        <div className="mx-auto max-w-[900px] px-6 md:px-16 text-center">
          <motion.div {...fadeUp}>
            <Sparkles className="h-6 w-6 text-[#8B9B7A] mx-auto mb-6" />
            <blockquote className="font-headline text-2xl md:text-3xl lg:text-4xl text-[#2C2C2C] leading-[1.4] tracking-tight italic">
              &ldquo;As melhores escolhas começam no equilíbrio.&rdquo;
            </blockquote>
            <div className="mt-6 w-12 h-px bg-[#D4C9B8] mx-auto" />
            <p className="mt-6 font-body text-sm text-[#8B9B7A] tracking-[0.15em] uppercase">
              Julia Andrade — CMO &amp; Founder da Grão Natural
            </p>
          </motion.div>
        </div>
      </section>
    </article>
  );
}
