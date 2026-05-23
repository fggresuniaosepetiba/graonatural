"use client";

import { motion } from "framer-motion";
import { ArrowRight, Eye, Heart, Leaf, Shield, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_MESSAGE, WHATSAPP_NUMBER } from "@/constants";

const heroImage =
  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2000&auto=format&fit=crop";
const storyImage =
  "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1400&auto=format&fit=crop";

const missionItems = [
  {
    icon: Target,
    title: "Missão",
    description:
      "Levar alimentos naturais para o dia a dia com curadoria rigorosa, sabor e cuidado real com cada família.",
  },
  {
    icon: Eye,
    title: "Visão",
    description:
      "Ser referência em bem-estar e alimentação consciente, aproximando pessoas de escolhas mais leves e sustentáveis.",
  },
  {
    icon: Heart,
    title: "Valores",
    description:
      "Transparência, respeito à natureza, qualidade constante e relacionamento humano em cada atendimento.",
  },
];

const differentials = [
  {
    icon: Leaf,
    title: "Produtos Naturais",
    description: "Seleção criteriosa de ingredientes puros, sem excessos e com origem confiável.",
  },
  {
    icon: Shield,
    title: "Qualidade Garantida",
    description: "Controle rigoroso em cada etapa para manter padrão elevado e experiência consistente.",
  },
  {
    icon: Eye,
    title: "Transparência",
    description: "Comunicação clara sobre processos, origem e compromisso com escolhas responsáveis.",
  },
  {
    icon: Heart,
    title: "Cuidado Humano",
    description: "Atendimento próximo para entender cada necessidade e apoiar sua rotina de bem-estar.",
  },
];

const storyBlocks = [
  {
    title: "Origem com propósito",
    text: "A Grão Natural nasceu de um sonho antigo, pessoal e cheio de significado: levar saúde, bem-estar e qualidade de vida por meio de escolhas mais naturais.",
  },
  {
    title: "Uma história real",
    text: "Esse propósito começou dentro de casa. Foi na prática da rotina que surgiu a certeza de que alimentação saudável também é cuidado e transformação.",
  },
  {
    title: "Início da jornada",
    text: "Em outubro de 2025, Vitória convidou Julia para caminhar ao seu lado. Juntas, iniciaram a construção da marca com coragem, carinho e visão de longo prazo.",
  },
  {
    title: "Crescimento consistente",
    text: "O primeiro catálogo começou com cerca de 20 produtos. Hoje, a marca já opera com uma média de 60 itens e segue evoluindo com confiança.",
  },
  {
    title: "Primeiro ciclo",
    text: "Neste primeiro ano, a Grão Natural celebrou aprendizados, desafios e conquistas importantes que reforçaram a essência do negócio.",
  },
  {
    title: "Próximos passos",
    text: "Até outubro, novos projetos e novidades serão apresentados. Porque a Grão Natural nunca foi apenas uma loja, e sim uma trajetória de cuidado.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

export function AboutPage() {
  return (
    <article>
      <section className="relative flex min-h-[620px] items-center overflow-hidden pt-10 pb-20 md:min-h-[760px] md:pt-14 md:pb-24">
        <div className="absolute inset-0 z-0">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/30 to-black/10" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
            className="max-w-2xl"
          >
            <span className="mb-6 inline-block font-body text-[11px] font-semibold tracking-[0.2em] text-white/70 uppercase">
              Sobre a Grão Natural
            </span>
            <h1 className="font-headline text-[clamp(2.4rem,6vw,4.4rem)] leading-[1.08] tracking-tight text-white">
              Escolhas naturais
              <br />
              <span className="italic">que aproximam, cuidam e transformam</span>
            </h1>
            <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-white/80 md:text-lg">
              Nascemos para tornar a alimentação saudável mais simples, verdadeira e presente na rotina de quem busca bem-estar com confiança.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="/produtos">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Conhecer Produtos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="secondary"
                  className="border-white/40 text-white hover:bg-white hover:text-primary"
                >
                  Falar com a equipe
                </Button>
              </a>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-surface to-transparent" />
      </section>

      <section className="relative overflow-hidden bg-surface py-24 md:py-32">
        <div className="pointer-events-none absolute -top-20 left-1/4 h-52 w-52 rounded-full bg-primary/8 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-10 h-48 w-48 rounded-full bg-tertiary/10 blur-3xl" />

        <div className="mx-auto max-w-[1280px] px-6 md:px-16">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
            <motion.div {...fadeUp} className="lg:col-span-7">
              <span className="mb-6 inline-flex items-center gap-2 font-body text-[11px] font-semibold tracking-[0.2em] text-primary uppercase">
                <Leaf className="h-3.5 w-3.5" />
                Nossa História
              </span>
              <h2 className="max-w-2xl font-headline text-[clamp(2.1rem,4vw,3.5rem)] leading-[1.08] tracking-tight text-primary">
                Conheça a trajetória que transformou cuidado em propósito
              </h2>
              <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-secondary md:text-lg">
                Um caminho construído com afeto, consistência e escolhas conscientes para levar bem-estar real ao dia a dia.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                {storyBlocks.map((block, index) => (
                  <motion.article
                    key={block.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ delay: index * 0.05, duration: 0.45 }}
                    className="rounded-2xl border border-outline-variant/20 bg-surface-container-low/50 p-5"
                  >
                    <h3 className="mb-2 font-body text-[11px] font-semibold tracking-[0.16em] text-primary uppercase">
                      {block.title}
                    </h3>
                    <p className="font-body text-sm leading-relaxed text-secondary">{block.text}</p>
                  </motion.article>
                ))}
              </div>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
              className="relative lg:col-span-5"
            >
              <div className="overflow-hidden rounded-[30px] border border-outline-variant/20 bg-surface-container-low p-2 shadow-[0_24px_70px_-40px_rgba(23,31,20,0.45)]">
                <img
                  src={storyImage}
                  alt="Ingredientes naturais organizados em bancada"
                  className="aspect-[4/5] w-full rounded-[22px] object-cover"
                />
              </div>

              <div className="mt-5 rounded-2xl border border-outline-variant/20 bg-surface px-5 py-4 sm:absolute sm:bottom-6 sm:left-6 sm:right-6 sm:mt-0">
                <p className="font-body text-[11px] font-semibold tracking-[0.18em] text-primary uppercase">
                  Outubro de 2025
                </p>
                <p className="mt-1 font-body text-sm leading-relaxed text-secondary">
                  O momento em que o sonho saiu do papel e ganhou forma com coragem, dedicação e um compromisso real com cada detalhe.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.blockquote
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] as const }}
            className="mt-12 rounded-2xl border border-outline-variant/20 bg-surface-container-low/40 px-6 py-8 text-center md:mt-14 md:px-12"
          >
            <p className="font-headline text-[clamp(1.4rem,2.4vw,2rem)] leading-[1.3] tracking-tight text-primary">
              "Mais do que uma loja, a Grão Natural é um sonho vivo que cuida de pessoas por meio da saúde e do bem-estar."
            </p>
          </motion.blockquote>
        </div>
      </section>

      <section className="bg-surface-container-low py-24 md:py-32">
        <div className="mx-auto max-w-[1280px] px-6 md:px-16">
          <motion.div {...fadeUp} className="mb-14 text-center md:mb-16">
            <span className="mb-5 inline-flex items-center gap-2 font-body text-[11px] font-semibold tracking-[0.2em] text-primary uppercase">
              <Leaf className="h-3.5 w-3.5" />
              Missão, Visão e Valores
            </span>
            <h2 className="font-headline text-[clamp(1.9rem,3.8vw,3.1rem)] leading-[1.12] tracking-tight text-primary">
              O que guia cada escolha da marca
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {missionItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.08, duration: 0.55 }}
                className="border border-outline-variant/20 bg-surface p-8 md:p-10"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-primary/5 ring-1 ring-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-3 font-body text-[11px] font-semibold tracking-[0.15em] text-primary uppercase">
                  {item.title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-secondary">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-24 md:py-32">
        <div className="mx-auto max-w-[1280px] px-6 md:px-16">
          <motion.div {...fadeUp} className="mb-14 md:mb-16">
            <span className="mb-5 inline-block font-body text-[11px] font-semibold tracking-[0.2em] text-primary uppercase">
              Diferenciais
            </span>
            <h2 className="font-headline text-[clamp(1.9rem,3.8vw,3.1rem)] leading-[1.12] tracking-tight text-primary">
              Naturalidade com excelência e confiança
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {differentials.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="group border border-outline-variant/20 bg-surface-container-low p-7 transition-colors duration-300 hover:bg-surface"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/5 text-primary transition-colors duration-300 group-hover:bg-primary/10">
                  <item.icon className="h-4.5 w-4.5" />
                </div>
                <h3 className="mb-2 font-body text-[11px] font-semibold tracking-[0.15em] text-primary uppercase">
                  {item.title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-secondary">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
