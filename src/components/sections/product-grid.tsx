"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { products } from "@/data/products";
import { useCart } from "@/context/cart-context";
import { Button } from "@/components/ui/button";
import { cn } from "@/utils/cn";

const GRADIENTS = [
  ["from-amber-100", "to-orange-200"],
  ["from-green-100", "to-emerald-200"],
  ["from-rose-100", "to-pink-200"],
  ["from-blue-100", "to-indigo-200"],
  ["from-purple-100", "to-violet-200"],
  ["from-yellow-100", "to-amber-200"],
  ["from-teal-100", "to-cyan-200"],
  ["from-red-100", "to-rose-200"],
  ["from-lime-100", "to-green-200"],
  ["from-sky-100", "to-blue-200"],
];

function getGradient(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return GRADIENTS[Math.abs(hash) % GRADIENTS.length];
}

const sections = [
  "Temperos",
  "Caldos, Sais e Especiais",
  "Temperos e Condimentos",
  "Grãos, Cereais e Suplementos Naturais",
  "Chás Naturais",
];

export function ProductGrid() {
  const { addItem, openCart } = useCart();
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const getQty = (id: string) => quantities[id] ?? 1;

  const handleAddToCart = (productId: string) => {
    const product = products.find((p) => p.id === productId);
    if (!product) return;
    const qty = getQty(productId);
    for (let i = 0; i < qty; i++) {
      addItem(product);
    }
    setQuantities((prev) => ({ ...prev, [productId]: 1 }));
  };

  const scrollToSection = (section: string) => {
    const el = document.getElementById(`section-${section.replace(/\s+/g, "-")}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-6 md:px-16">
        <div className="mb-12 max-w-2xl">
          <h1 className="font-headline text-[clamp(2.2rem,5vw,3.5rem)] leading-[1.15] tracking-tight text-primary">
            Nossos Produtos
          </h1>
          <p className="mt-4 font-body text-base text-secondary leading-relaxed">
            Curadoria especial de temperos, grãos, cereais e chás naturais para
            transformar sua alimentação com mais sabor e saúde.
          </p>
        </div>

        <div className="mb-14">
          <div className="flex flex-wrap gap-2">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="rounded-full border border-outline-variant/20 px-3 py-2 font-body text-[10px] leading-none font-semibold tracking-[0.08em] text-on-surface-variant uppercase transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary sm:px-4 sm:py-2.5 sm:text-[11px] sm:tracking-[0.1em]"
              >
                {section}
              </button>
            ))}
          </div>
        </div>

        {sections.map((sectionName, sectionIndex) => {
          const sectionProducts = products.filter(
            (p) => p.section === sectionName
          );
          if (sectionProducts.length === 0) return null;

          return (
            <motion.div
              key={sectionName}
              id={`section-${sectionName.replace(/\s+/g, "-")}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5 }}
              className="mb-16 last:mb-0"
            >
              <div className="mb-2 flex flex-col items-start gap-3 md:flex-row md:items-center md:gap-4">
                <h2 className="max-w-full text-balance font-headline text-2xl leading-tight text-primary md:text-3xl">
                  {sectionName}
                </h2>
                <div className="hidden h-px flex-1 bg-outline-variant/10 md:block" />
              </div>
              <p className="font-body text-xs text-secondary mb-10 italic">
                As imagens abaixo são meramente ilustrativas
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {sectionProducts.map((product, i) => {
                  const [from, to] = getGradient(product.name);
                  const qty = getQty(product.id);

                  return (
                    <motion.article
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-30px" }}
                      transition={{ delay: i * 0.05, duration: 0.4 }}
                      className="group flex flex-col bg-surface-container-lowest border border-outline-variant/5 hover:border-outline-variant/20 transition-colors duration-300"
                    >
                      <div className="aspect-square overflow-hidden relative">
                        {product.image ? (
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                            quality={78}
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        ) : (
                          <div
                            className={cn(
                              "h-full w-full bg-gradient-to-br flex items-center justify-center transition-transform duration-700 group-hover:scale-105",
                              from,
                              to
                            )}
                          >
                            <span className="font-headline text-5xl md:text-6xl text-white/70 select-none">
                              {product.name.charAt(0)}
                            </span>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                      </div>

                      <div className="flex flex-1 flex-col p-4 md:p-5">
                        <div className="flex items-start justify-between gap-2 mb-0.5">
                          <h3 className="font-headline text-base md:text-lg text-primary leading-tight">
                            {product.name}
                          </h3>
                        </div>

                        {product.weight && (
                          <span className="font-body text-[10px] font-semibold tracking-[0.1em] text-secondary uppercase mb-2">
                            {product.weight}
                          </span>
                        )}

                        <p className="font-body text-xs text-secondary leading-relaxed mb-3 line-clamp-2">
                          {product.description}
                        </p>

                        <span className="mt-auto font-headline text-lg md:text-xl text-primary mb-4">
                          R$ {product.price.toFixed(2).replace(".", ",")}
                        </span>

                        <div className="flex flex-col items-start gap-2 min-[1250px]:flex-row min-[1250px]:items-center min-[1250px]:gap-3">
                          <div className="flex w-fit items-center border border-outline-variant/20 shrink-0">
                            <button
                              onClick={() =>
                                setQuantities((prev) => ({
                                  ...prev,
                                  [product.id]: Math.max(1, qty - 1),
                                }))
                              }
                              className="flex h-7 w-7 items-center justify-center transition-colors hover:bg-surface-container min-[1250px]:h-8 min-[1250px]:w-8"
                            >
                              <Minus className="h-2.5 w-2.5 min-[1250px]:h-3 min-[1250px]:w-3" />
                            </button>
                            <span className="flex h-7 w-8 items-center justify-center font-body text-xs font-medium tabular-nums min-[1250px]:h-8 min-[1250px]:w-9 min-[1250px]:text-sm">
                              {qty}
                            </span>
                            <button
                              onClick={() =>
                                setQuantities((prev) => ({
                                  ...prev,
                                  [product.id]: qty + 1,
                                }))
                              }
                              className="flex h-7 w-7 items-center justify-center transition-colors hover:bg-surface-container min-[1250px]:h-8 min-[1250px]:w-8"
                            >
                              <Plus className="h-2.5 w-2.5 min-[1250px]:h-3 min-[1250px]:w-3" />
                            </button>
                          </div>

                          <Button
                            size="sm"
                            className="h-7 w-full min-w-0 justify-center gap-1 px-2.5 text-[8px] min-[1024px]:min-w-[112px] min-[1250px]:h-8 min-[1250px]:w-auto min-[1250px]:flex-1 min-[1250px]:gap-1.5 min-[1250px]:px-3 min-[1250px]:text-[9px]"
                            onClick={() => handleAddToCart(product.id)}
                          >
                            <ShoppingBag className="h-2.5 w-2.5 shrink-0 min-[1250px]:h-3 min-[1250px]:w-3" />
                            <span className="whitespace-nowrap">Adicionar</span>
                          </Button>
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
