"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { products } from "@/data/products";
import { useCart } from "@/context/cart-context";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const SECTION_PICK = 2;

const sections = [
  "Temperos",
  "Caldos, Sais e Especiais",
  "Temperos e Condimentos",
  "Grãos, Cereais e Suplementos Naturais",
  "Chás Naturais",
];

function getFeatured() {
  const featured: typeof products = [];
  for (const section of sections) {
    const filtered = products.filter((p) => p.section === section);
    featured.push(...filtered.slice(0, SECTION_PICK));
  }
  return featured;
}

export function FeaturedProducts() {
  const { addItem } = useCart();
  const featured = getFeatured();

  const handleAddToCart = (productId: string) => {
    const product = products.find((p) => p.id === productId);
    if (product) {
      addItem(product);
    }
  };

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-16">
        <div className="mb-16">
          <h2 className="font-headline text-[clamp(2rem,4vw,3rem)] leading-[1.2] tracking-tight text-primary">
            Destaques da Temporada
          </h2>
          <p className="mt-3 font-body text-base text-secondary">
            Nossas escolhas preferidas para você.
          </p>
          <p className="mt-2 text-sm italic text-secondary">
            <em>As imagens abaixo são meramente ilustrativas</em>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {featured.map((product, i) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="group flex flex-col bg-surface-container-lowest"
            >
              <div className="aspect-square overflow-hidden relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  quality={78}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>

              <div className="flex flex-1 flex-col p-4 lg:p-5">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="font-headline text-base lg:text-lg text-primary leading-tight">
                    {product.name}
                  </h3>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <Badge>{product.badge}</Badge>
                  <span className="font-body text-[10px] font-semibold tracking-[0.1em] text-secondary uppercase">
                    {product.weight}
                  </span>
                </div>

                <p className="font-body text-xs text-secondary leading-relaxed mb-3 line-clamp-2">
                  {product.description}
                </p>

                <div className="mt-auto flex items-center justify-between pt-3 border-t border-outline-variant/10">
                  <span className="font-headline text-lg text-primary">
                    R$ {product.price.toFixed(2).replace(".", ",")}
                  </span>
                </div>

                <Button
                  size="sm"
                  variant="secondary"
                  className="mt-3 w-full text-[9px]"
                  onClick={() => handleAddToCart(product.id)}
                >
                  Adicionar ao Carrinho
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
