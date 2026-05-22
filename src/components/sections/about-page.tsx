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
    title: "Missao",
    description:
      "Levar alimentos naturais para o dia a dia com curadoria rigorosa, sabor e cuidado real com cada familia.",
  },
  {
    icon: Eye,
    title: "Visao",
    description:
      "Ser referencia em bem-estar e alimentacao consciente, aproximando pessoas de escolhas mais leves e sustentaveis.",
  },
  {
    icon: Heart,
    title: "Valores",
    description:
      "Transparencia, respeito a natureza, qualidade constante e relacionamento humano em cada atendimento.",
  },
];

const differentials = [
  {
    icon: Leaf,
    title: "Produtos Naturais",
    description: "Selecao criteriosa de ingredientes puros, sem excessos e com origem confiavel.",
  },
  {
    icon: Shield,
    title: "Qualidade Garantida",
    description: "Controle rigoroso em cada etapa para manter padrao elevado e experiencia consistente.",
  },
  {
    icon: Eye,
    title: "Transparencia",
    description: "Comunicacao clara sobre processos, origem e compromisso com escolhas responsaveis.",
  },
  {
    icon: Heart,
    title: "Cuidado Humano",
    description: "Atendimento proximo para entender cada necessidade e apoiar sua rotina de bem-estar.",
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
              Sobre a Grao Natural
            </span>
            <h1 className="font-headline text-[clamp(2.4rem,6vw,4.4rem)] leading-[1.08] tracking-tight text-white">
              Escolhas naturais
              <br />
              <span className="italic">que aproximam, cuidam e transformam</span>
            </h1>
            <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-white/80 md:text-lg">
              Nascemos para tornar a alimentacao saudavel mais simples, verdadeira e presente na rotina de quem busca bem-estar com confianca.
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

      <section className="bg-surface py-24 md:py-32">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-14 px-6 md:grid-cols-2 md:gap-20 md:px-16">
          <motion.div {...fadeUp}>
            <span className="mb-6 inline-block font-body text-[11px] font-semibold tracking-[0.2em] text-primary uppercase">
              Nossa Historia
            </span>
            <h2 className="font-headline text-[clamp(2rem,4vw,3.4rem)] leading-[1.12] tracking-tight text-primary">
              Proposito em cada detalhe
            </h2>
            <div className="mt-7 space-y-5 font-body text-base leading-relaxed text-secondary md:text-lg">
              <p>
                A Grao Natural nasceu do desejo de aproximar pessoas de uma alimentacao mais consciente, com ingredientes escolhidos com criterio, respeito e sensibilidade.
              </p>
              <p>
                Mais do que vender produtos, construimos relacoes de confianca. Cada cha, grao e tempero carrega uma escolha feita com responsabilidade ambiental e compromisso com seu bem-estar.
              </p>
              <p>
                Com um olhar humano e atencao constante a qualidade, seguimos cultivando uma marca que valoriza transparencia, proximidade e autenticidade.
              </p>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
            className="overflow-hidden"
          >
            <img
              src={storyImage}
              alt="Ingredientes naturais organizados em bancada"
              className="aspect-[4/5] w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      <section className="bg-surface-container-low py-24 md:py-32">
        <div className="mx-auto max-w-[1280px] px-6 md:px-16">
          <motion.div {...fadeUp} className="mb-14 text-center md:mb-16">
            <span className="mb-5 inline-flex items-center gap-2 font-body text-[11px] font-semibold tracking-[0.2em] text-primary uppercase">
              <Leaf className="h-3.5 w-3.5" />
              Missao, Visao e Valores
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
              Naturalidade com excelencia e confianca
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
