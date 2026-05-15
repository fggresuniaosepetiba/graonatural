"use client";

import { motion } from "framer-motion";
import { FOUNDER } from "@/constants";
import { Award, Building2 } from "lucide-react";

export function Founder() {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="mx-auto max-w-[1280px] px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
            className="relative"
          >
            <div className="group overflow-hidden">
              <img
                src="/images/vitoria-IA.png"
                alt="Vitória Justo"
                className="aspect-[3/4] w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/5 rounded-full -z-10" />
            <div className="absolute -top-4 -left-4 w-32 h-32 border border-outline-variant/30 rounded-full -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <span className="inline-block font-body text-[11px] font-semibold tracking-[0.2em] text-primary uppercase mb-6">
              A Mente Por Trás da Grão Natural
            </span>

            <h2 className="font-headline text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-tight text-primary mb-2">
              {FOUNDER.name}
            </h2>
            <p className="font-headline text-lg italic text-secondary mb-8">
              {FOUNDER.age} anos · CEO & Founder
            </p>

            <p className="font-body text-base text-secondary leading-relaxed mb-10">
              Empresária visionária, Vitória Justo é CEO e Founder da Grão
              Natural. Sua trajetória é marcada pela paixão por ingredientes
              naturais e bem-estar, combinando sofisticação e propósito em cada
              produto.
            </p>

            <div className="bg-surface-container-low p-8 border border-outline-variant/10">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="h-5 w-5 text-primary" />
                <h3 className="font-body text-[11px] font-semibold tracking-[0.15em] text-primary uppercase">
                  Grupo Empresarial
                </h3>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="font-body text-sm text-secondary leading-relaxed mb-3">
                    Vitória Justo também é fundadora e sócia do{" "}
                    <strong className="text-primary">
                      Baobab Cosmetics Manufacturing Company LTDA
                    </strong>
                    , responsável pela marca:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <Award className="h-4 w-4 text-primary/60" />
                      <span className="font-body text-sm text-primary font-medium">
                        Baobá Cosméticos
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-outline-variant/10">
                  <p className="font-body text-sm text-secondary leading-relaxed mb-3">
                    Também é fundadora e sócia do grupo empresarial{" "}
                    <strong className="text-primary">J2 Capital</strong>,
                    responsável pela marca:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <Award className="h-4 w-4 text-primary/60" />
                      <span className="font-body text-sm text-primary font-medium">
                        La Dame Famme
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="h-px w-12 bg-outline-variant" />
              <span className="font-body text-[10px] font-semibold tracking-[0.15em] text-primary uppercase">
                Força empresarial feminina
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
