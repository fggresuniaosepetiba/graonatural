"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { WHATSAPP_NUMBER } from "@/constants";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const drawerVariants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: { type: "spring" as const, damping: 30, stiffness: 300 },
  },
  exit: {
    x: "100%",
    transition: { type: "spring" as const, damping: 30, stiffness: 300 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    totalPrice,
    totalItems,
    clearCart,
  } = useCart();

  const handleWhatsApp = () => {
    let message = "Olá! Gostaria de finalizar meu pedido:\n\n";
    items.forEach((item) => {
      message += `${item.quantity}x ${item.product.name} - R$ ${(
        item.product.price * item.quantity
      )
        .toFixed(2)
        .replace(".", ",")}\n`;
    });
    message += `\nTotal: R$ ${totalPrice.toFixed(2).replace(".", ",")}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.3 }}
            onClick={closeCart}
            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
          />

          <motion.aside
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-surface shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between px-6 h-20 border-b border-outline-variant/10">
              <div className="flex items-center gap-3">
                <ShoppingBag className="h-5 w-5 text-primary" />
                <h2 className="font-headline text-xl text-primary">
                  Carrinho
                </h2>
                <span className="font-body text-xs text-secondary">
                  ({totalItems} {totalItems === 1 ? "item" : "itens"})
                </span>
              </div>
              <button
                onClick={closeCart}
                className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-surface-container transition-colors duration-200"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-surface-container">
                  <ShoppingBag className="h-8 w-8 text-outline-variant" />
                </div>
                <h3 className="font-headline text-xl text-primary mb-2">
                  Seu carrinho está vazio
                </h3>
                <p className="font-body text-sm text-secondary max-w-xs">
                  Adicione produtos naturais para começar sua jornada de
                  bem-estar.
                </p>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4 scrollbar-hide">
                  <AnimatePresence mode="popLayout">
                    {items.map((item) => (
                      <motion.div
                        key={item.product.id}
                        layout
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.25 }}
                        className="flex gap-4 bg-surface-container-low p-4 group"
                      >
                        <div
                          className="h-20 w-20 shrink-0 bg-cover bg-center"
                          style={{
                            backgroundImage: `url(${item.product.image})`,
                          }}
                        />

                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="font-headline text-base text-primary truncate">
                              {item.product.name}
                            </h4>
                            <button
                              onClick={() => removeItem(item.product.id)}
                              className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                            >
                              <Trash2 className="h-3.5 w-3.5 text-secondary hover:text-error transition-colors" />
                            </button>
                          </div>
                          <p className="font-body text-[10px] font-semibold tracking-[0.1em] text-secondary uppercase mt-0.5 mb-3">
                            {item.product.weight} · {item.product.badge}
                          </p>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-0 border border-outline-variant/30">
                              <button
                                onClick={() =>
                                  updateQuantity(
                                    item.product.id,
                                    item.quantity - 1
                                  )
                                }
                                className="flex h-8 w-8 items-center justify-center hover:bg-surface-container transition-colors"
                              >
                                <Minus className="h-3 w-3" />
                              </button>
                              <span className="flex h-8 w-10 items-center justify-center font-body text-sm font-medium">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  updateQuantity(
                                    item.product.id,
                                    item.quantity + 1
                                  )
                                }
                                className="flex h-8 w-8 items-center justify-center hover:bg-surface-container transition-colors"
                              >
                                <Plus className="h-3 w-3" />
                              </button>
                            </div>
                            <span className="font-headline text-base text-primary">
                              R${" "}
                              {(item.product.price * item.quantity)
                                .toFixed(2)
                                .replace(".", ",")}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                <div className="border-t border-outline-variant/10 px-6 py-6 space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between font-body text-sm">
                      <span className="text-secondary">Subtotal</span>
                      <span className="text-primary">
                        R$ {totalPrice.toFixed(2).replace(".", ",")}
                      </span>
                    </div>
                    <div className="flex justify-between font-body text-sm">
                      <span className="text-secondary">Frete</span>
                      <span className="text-secondary">Calculado no pedido</span>
                    </div>
                    <div className="flex justify-between font-headline text-lg text-primary pt-2 border-t border-outline-variant/10">
                      <span>Total</span>
                      <span>
                        R$ {totalPrice.toFixed(2).replace(".", ",")}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={handleWhatsApp}
                    className="w-full bg-primary text-on-primary py-4 font-body text-[11px] font-semibold tracking-[0.15em] uppercase hover:bg-primary/90 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Finalizar Pedido
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  <button
                    onClick={clearCart}
                    className="w-full text-center font-body text-xs text-secondary hover:text-primary transition-colors duration-200"
                  >
                    Limpar carrinho
                  </button>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
