"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/data/products";
import { SectionHeader } from "@/components/ui/section";

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-surface-container-low">
      <div className="mx-auto max-w-[1280px] px-6 md:px-16">
        <SectionHeader
          title="O que dizem nossos clientes"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-surface p-10 border border-outline-variant/10 flex flex-col"
            >
              <div className="flex gap-0.5 mb-6">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>

              <p className="font-body text-base text-secondary italic leading-relaxed mb-8 flex-1">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-outline-variant/10">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-body text-sm font-bold">
                  {t.initials}
                </div>
                <div>
                  <p className="font-body text-sm font-semibold text-primary">
                    {t.name}
                  </p>
                  <p className="font-body text-[10px] font-semibold tracking-[0.1em] text-secondary uppercase">
                    {t.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
