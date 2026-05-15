"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden bg-primary-container p-12 md:p-24 text-center"
        >
          <div className="absolute inset-0 opacity-[0.03]">
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=2000&auto=format&fit=crop)`,
              }}
            />
          </div>

          <div className="relative z-10">
            <h2 className="font-headline text-[clamp(1.5rem,3.5vw,2.5rem)] leading-[1.15] text-on-primary-container mb-4">
              Seu próximo pedido natural começa aqui.
            </h2>
            <p className="font-body text-base md:text-lg text-on-primary-container/80 mb-10 max-w-md mx-auto">
              Receba em casa a curadoria exclusiva da Grão Natural.
            </p>
            <Button
              size="lg"
              className="bg-surface-container-lowest text-primary hover:bg-white shadow-xl"
            >
              Fazer Pedido
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
