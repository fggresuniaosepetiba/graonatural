"use client";

import { motion } from "framer-motion";

export function Quote() {
  return (
    <section className="relative py-32 md:py-48 bg-primary text-on-primary overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full bg-cover bg-center bg-repeat"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=2000&auto=format&fit=crop)`,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-16 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block font-body text-[11px] font-semibold tracking-[0.2em] text-on-primary-container/70 uppercase mb-8"
        >
          A Experiência Natural
        </motion.span>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p className="font-headline text-[clamp(1.5rem,4vw,3rem)] leading-[1.15] italic text-on-primary-container">
            &ldquo;Mais do que produtos naturais, entregamos cuidado e equilíbrio
            para a sua alma.&rdquo;
          </p>
        </motion.blockquote>

        <motion.footer
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-10"
        >
          <div className="mx-auto mb-3 h-px w-8 bg-on-primary-container/30" />
          <cite className="font-body text-sm font-semibold tracking-[0.15em] text-on-primary-container/80 not-italic uppercase">
            Vitória Justo
          </cite>
        </motion.footer>
      </div>
    </section>
  );
}
