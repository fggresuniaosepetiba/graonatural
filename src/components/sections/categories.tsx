"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/products";
import { SectionHeader } from "@/components/ui/section";

const categoryLinks: Record<string, string> = {
  "chas": "/produtos#section-Chás-Naturais",
  "temperos": "/produtos#section-Temperos-e-Condimentos",
  "graos": "/produtos#section-Grãos,-Cereais-e-Suplementos-Naturais",
  "bem-estar": "/bem-estar",
};

export function Categories() {
  return (
    <section className="py-24 md:py-32 bg-surface-container-low">
      <div className="mx-auto max-w-[1280px] px-6 md:px-16">
        <SectionHeader
          title="Explore por Categorias"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-5">
          {categories.map((cat, i) => {
            const isLarge = i === 1;
            const link = categoryLinks[cat.id];
            return (
              <motion.a
                key={cat.id}
                href={link || "#"}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`group relative overflow-hidden ${
                  i === 0
                    ? "md:col-span-8 md:row-span-1 md:aspect-[2/1]"
                    : isLarge
                    ? "md:col-span-4 md:row-span-2 md:aspect-auto"
                    : "md:col-span-4 md:row-span-1 md:aspect-[4/3]"
                } aspect-[4/3]`}
              >
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${cat.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <h3 className="font-headline text-2xl text-white mb-1">
                    {cat.name}
                  </h3>
                  <span className="inline-flex items-center gap-2 font-body text-[11px] font-semibold tracking-[0.15em] text-white/70 uppercase group-hover:text-white transition-colors duration-300">
                    {cat.description}
                    <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
