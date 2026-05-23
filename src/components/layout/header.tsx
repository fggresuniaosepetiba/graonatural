"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/cart-context";
import { NAV_LINKS, WHATSAPP_MESSAGE, WHATSAPP_NUMBER } from "@/constants";
import { cn } from "@/utils/cn";

const MOBILE_MENU_ID = "mobile-navigation-menu";

export function Header() {
  const [visible, setVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, openCart } = useCart();
  const lastScrollY = useRef(0);
  const firstMobileLinkRef = useRef<HTMLAnchorElement | null>(null);
  const pathname = usePathname();

  const isActive = (href: string, label: string) => {
    if (href === "#") return label === "Home" && pathname === "/";
    return pathname === href;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) {
        setVisible(true);
        return;
      }

      const current = window.scrollY;
      if (current > lastScrollY.current && current > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY.current = current;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflowX = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflowX = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflowX = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const focusId = window.requestAnimationFrame(() => {
      firstMobileLinkRef.current?.focus();
    });

    return () => window.cancelAnimationFrame(focusId);
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          transform: isMobileMenuOpen
            ? "translateY(0)"
            : visible
              ? "translateY(0)"
              : "translateY(-100%)",
        }}
        className="z-50 bg-primary-fixed transition-transform duration-300"
      >
        <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-6 md:px-16">
          <Link
            href="/"
            className="relative z-[70]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <img
              src="/images/graonatural_logo.jpeg"
              alt="Grão Natural"
              className="h-14 w-14 rounded-full object-cover"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "relative font-body text-[11px] font-semibold tracking-[0.15em] text-primary uppercase transition-colors duration-300 hover:text-on-primary-fixed-variant",
                  "after:absolute after:left-0 after:-bottom-[3px] after:h-[2px] after:bg-current after:transition-all after:duration-300",
                  isActive(link.href, link.label)
                    ? "after:w-full"
                    : "after:w-0 hover:after:w-full"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={openCart}
              className="relative flex h-10 w-10 items-center justify-center text-primary transition-colors duration-300 hover:text-on-primary-fixed-variant"
              aria-label="Abrir carrinho"
            >
              <ShoppingBag className="h-5 w-5" />
              {totalItems > 0 && (
                <motion.span
                  key={totalItems}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[9px] font-bold text-on-primary"
                >
                  {totalItems}
                </motion.span>
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="relative z-[70] flex h-10 w-10 items-center justify-center text-primary md:hidden"
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls={MOBILE_MENU_ID}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.24 }}
            className="fixed inset-0 z-[90] md:hidden"
          >
            <button
              aria-label="Fechar menu"
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            />

            <motion.aside
              id={MOBILE_MENU_ID}
              role="dialog"
              aria-modal="true"
              aria-label="Menu principal"
              initial={{ opacity: 0, y: -18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 flex h-dvh w-full flex-col overflow-y-auto overscroll-contain bg-primary-fixed/95 px-6 pt-[max(1.25rem,env(safe-area-inset-top))] pb-[max(1.5rem,env(safe-area-inset-bottom))]"
            >
              <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                  <img
                    src="/images/graonatural_logo.jpeg"
                    alt="Grão Natural"
                    className="h-14 w-14 rounded-full object-cover"
                  />
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/15 text-primary transition-colors duration-300 hover:bg-primary/5"
                  aria-label="Fechar menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mx-auto mt-8 w-full max-w-[1280px] border-t border-primary/10 pt-8">
                <p className="mb-4 font-body text-[10px] font-semibold tracking-[0.18em] text-primary/70 uppercase">
                  Navegação
                </p>

                <nav className="flex flex-col" aria-label="Links mobile">
                  {NAV_LINKS.map((link, i) => (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.06, duration: 0.28 }}
                    >
                      <Link
                        ref={i === 0 ? firstMobileLinkRef : undefined}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          "block py-3 font-headline text-[clamp(1.15rem,5.4vw,1.45rem)] leading-[1.1] tracking-[0.06em] text-primary uppercase transition-colors duration-300 focus:outline-none focus-visible:text-on-primary-fixed-variant",
                          isActive(link.href, link.label)
                            ? "text-on-primary-fixed-variant"
                            : "hover:text-on-primary-fixed-variant"
                        )}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>

              <div className="mx-auto mt-auto w-full max-w-[1280px] border-t border-primary/10 pt-6">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center font-body text-[11px] font-semibold tracking-[0.14em] text-primary uppercase transition-colors duration-300 hover:text-on-primary-fixed-variant"
                >
                  Fale com a equipe
                </a>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
