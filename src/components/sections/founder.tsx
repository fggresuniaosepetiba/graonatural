"use client";

import { motion } from "framer-motion";
import { FOUNDER, FOUNDER_JULIA } from "@/constants";
import { Award, Building2 } from "lucide-react";

export function Founder() {
  return (
    <section className="py-24 md:py-32 bg-surface-container-low">
      <div className="mx-auto max-w-[1280px] px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          className="mb-16 md:mb-24"
        >
          <span className="font-body text-[11px] font-semibold tracking-[0.4em] text-tertiary uppercase block mb-4">
            A Mente Por Trás
          </span>
          <h2 className="font-headline text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-tight text-on-surface">
            Os Nomes por trás da Grão Natural
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
            className="flex flex-col lg:flex-row gap-6 lg:gap-10"
          >
            <div className="w-64 lg:w-72 shrink-0 overflow-hidden">
              <img
                src={FOUNDER.photo}
                alt={`${FOUNDER.name} — ${FOUNDER.role}`}
                className="w-full block grayscale transition-all duration-150 hover:grayscale-0 hover:scale-[1.03]"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-headline text-[clamp(1.25rem,2.5vw,2rem)] leading-[1.1] text-on-surface mb-1">
                {FOUNDER.name}
              </h3>
              <p className="font-body text-[11px] font-semibold tracking-[0.1em] text-tertiary uppercase mb-5">
                {FOUNDER.age} anos · {FOUNDER.role}
              </p>
              <blockquote className="font-body text-sm leading-relaxed text-on-surface-variant italic border-l border-tertiary pl-5 mb-6">
                &ldquo;Empresária visionária, Vitória Justo é CEO e Founder da
                Grão Natural. Sua trajetória é marcada pela paixão por
                ingredientes naturais e bem-estar, combinando sofisticação e
                propósito em cada produto.&rdquo;
              </blockquote>

              <div className="bg-surface p-5 border border-outline-variant/10">
                <div className="flex items-center gap-2 mb-3">
                  <Building2 className="h-4 w-4 text-primary" />
                  <h4 className="font-body text-[10px] font-semibold tracking-[0.15em] text-primary uppercase">
                    Grupo Empresarial
                  </h4>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="font-body text-xs text-secondary leading-relaxed mb-2">
                      Vitória Justo também é fundadora e sócia do{" "}
                      <strong className="text-primary">
                        Baobab Cosmetics Manufacturing Company LTDA
                      </strong>
                      , responsável pela marca:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Award className="h-3.5 w-3.5 text-primary/60" />
                        <span className="font-body text-xs text-primary font-medium">
                          Baobá Cosméticos
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="pt-3 border-t border-outline-variant/10">
                    <p className="font-body text-xs text-secondary leading-relaxed mb-2">
                      Também é fundadora e sócia do grupo empresarial{" "}
                      <strong className="text-primary">J2 Capital</strong>,
                      responsável pela marca:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Award className="h-3.5 w-3.5 text-primary/60" />
                        <span className="font-body text-xs text-primary font-medium">
                          La Dame Famme
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
            className="flex flex-col lg:flex-row gap-6 lg:gap-10 lg:mt-32"
          >
            <div className="w-64 lg:w-72 shrink-0 overflow-hidden">
              <img
                src={FOUNDER_JULIA.photo}
                alt={`${FOUNDER_JULIA.name} — ${FOUNDER_JULIA.role}`}
                className="w-full block grayscale transition-all duration-150 hover:grayscale-0 hover:scale-[1.03]"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-headline text-[clamp(1.25rem,2.5vw,2rem)] leading-[1.1] text-on-surface mb-1">
                {FOUNDER_JULIA.name}
              </h3>
              <p className="font-body text-[11px] font-semibold tracking-[0.1em] text-tertiary uppercase mb-5">
                {FOUNDER_JULIA.role}
              </p>
              <blockquote className="font-body text-sm leading-relaxed text-on-surface-variant italic border-l border-tertiary pl-5 mb-6">
                &ldquo;Ao lado de Vitória, Julia Andrade é CMO e co-fundadora da
                Grão Natural. Com visão criativa e estratégica, conecta o público
                ao universo de bem-estar e naturalidade que a marca
                representa.&rdquo;
              </blockquote>

              <div className="bg-surface p-5 border border-outline-variant/10">
                <div className="flex items-center gap-2 mb-3">
                  <Building2 className="h-4 w-4 text-primary" />
                  <h4 className="font-body text-[10px] font-semibold tracking-[0.15em] text-primary uppercase">
                    Grupo Empresarial
                  </h4>
                </div>
                <p className="font-body text-xs text-secondary leading-relaxed">
Julia Andrade também é sócia e CMO da{" "}
              <strong className="text-primary">La Dame Famme</strong>,
              marca do grupo empresarial{" "}
              <strong className="text-primary">J2 Capital</strong>.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
