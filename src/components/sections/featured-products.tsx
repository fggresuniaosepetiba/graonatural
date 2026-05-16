"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/context/cart-context";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function FeaturedProducts() {
  const { addItem, openCart } = useCart();

  const handleAddToCart = (productId: string) => {
    const product = products.find((p) => p.id === productId);
    if (product) {
      addItem(product);
    }
  };

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <div>
            <h2 className="font-headline text-[clamp(2rem,4vw,3rem)] leading-[1.2] tracking-tight text-primary">
              Destaques da Temporada
            </h2>
            <p className="mt-3 font-body text-base text-secondary">
              Nossas escolhas preferidas para você.
            </p>
          </div>
          <a
            href="/produtos"
            className="hidden md:inline-flex items-center gap-2 font-body text-[11px] font-semibold tracking-[0.15em] text-primary uppercase border-b border-primary pb-0.5 hover:opacity-70 transition-opacity"
          >
            Ver todos
            <ArrowRight className="h-3 w-3" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group flex flex-col bg-surface-container-lowest"
            >
              <div className="aspect-square overflow-hidden relative">
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${product.image})` }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>

              <div className="flex flex-col p-6">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="font-headline text-xl text-primary">
                    {product.name}
                  </h3>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <Badge>{product.badge}</Badge>
                  <span className="font-body text-[10px] font-semibold tracking-[0.1em] text-secondary uppercase">
                    {product.weight}
                  </span>
                </div>

                <p className="font-body text-sm text-secondary leading-relaxed mb-4 line-clamp-2">
                  {product.description}
                </p>

                <div className="mt-auto flex items-center justify-between">
                  <span className="font-headline text-xl text-primary">
                    R$ {product.price.toFixed(2).replace(".", ",")}
                  </span>
                </div>

                <Button
                  size="sm"
                  variant="secondary"
                  className="mt-4 w-full"
                  onClick={() => handleAddToCart(product.id)}
                >
                  Adicionar ao Carrinho
                </Button>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <a
            href="/produtos"
            className="inline-flex items-center gap-2 font-body text-[11px] font-semibold tracking-[0.15em] text-primary uppercase"
          >
            Ver todos os produtos
            <ArrowRight className="h-3 w-3" />
          </a>
        </div>
      </div>
    </section>
  );
}
