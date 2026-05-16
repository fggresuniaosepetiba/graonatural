"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative flex h-screen min-h-[600px] max-h-[900px] items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2000&auto=format&fit=crop)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          className="max-w-xl"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block font-body text-[11px] font-semibold tracking-[0.2em] text-white/70 uppercase mb-6"
          >
            Curadoria Natural desde 2025
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-headline text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.08] tracking-tight text-white"
          >
            Saúde, sabor e bem-estar
            <br />
            <span className="italic">em cada detalhe.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-6 font-body text-lg text-white/70 max-w-md leading-relaxed"
          >
            Produtos naturais selecionados para transformar sua rotina com mais
            qualidade, aroma e equilíbrio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a href="/produtos">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Ver Produtos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a
              href={`https://wa.me/${5521994343928}?text=${encodeURIComponent("Olá! Gostaria de fazer um pedido.")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="secondary"
                className="border-white/30 text-white hover:bg-white hover:text-primary"
              >
                Fazer Pedido
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface to-transparent" />
    </section>
  );
}
