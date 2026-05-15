"use client";

import { motion } from "framer-motion";

export function Essence() {
  return (
    <section className="py-24 md:py-32 overflow-hidden bg-surface-container-low">
      <div className="mx-auto max-w-[1280px] px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
            className="order-2 lg:order-1"
          >
            <img
              src="/images/graos-de-cafe.png"
              alt="Grãos de café"
              className="aspect-[4/5] w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block font-body text-[11px] font-semibold tracking-[0.2em] text-primary uppercase mb-6">
              Nossa Essência
            </span>
            <h2 className="font-headline text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-tight text-primary mb-8">
              Acreditamos que o cuidado com o corpo começa na escolha de
              ingredientes naturais.
            </h2>
            <p className="font-body text-base md:text-lg text-secondary leading-relaxed mb-6">
              Selecionados com atenção, qualidade e propósito. Cada produto que
              entra em seu lar foi rigorosamente testado e provado por nossa
              equipe, garantindo que a experiência Grão Natural seja sempre
              sinônimo de pureza e sabor inigualável.
            </p>
            <div className="flex items-center gap-4 mt-10">
              <div className="h-px w-12 bg-outline-variant" />
              <span className="font-body text-[10px] font-semibold tracking-[0.15em] text-primary uppercase">
                Assinado pela Fundadora
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
