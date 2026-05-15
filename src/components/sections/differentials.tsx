"use client";

import { motion } from "framer-motion";
import { Leaf, Shield, Heart, Sparkles } from "lucide-react";

const items = [
  {
    icon: Leaf,
    title: "Produtos Selecionados",
    description: "Curadoria rigorosa de cada ingrediente.",
  },
  {
    icon: Shield,
    title: "Qualidade Garantida",
    description: "Certificação e transparência total.",
  },
  {
    icon: Heart,
    title: "Atendimento Humanizado",
    description: "Atenção dedicada a cada cliente.",
  },
  {
    icon: Sparkles,
    title: "Bem-estar Natural",
    description: "Equilíbrio para o seu dia a dia.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Differentials() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-12"
        >
          {items.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="group text-center"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/5 ring-1 ring-primary/10 group-hover:bg-primary/10 group-hover:ring-primary/20 transition-all duration-500">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-body text-[11px] font-semibold tracking-[0.15em] text-primary uppercase mb-2">
                {item.title}
              </h3>
              <p className="font-body text-sm text-secondary leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
