"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag } from "lucide-react";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/cart-context";
import { NAV_LINKS } from "@/constants";
import { cn } from "@/utils/cn";

export function Header() {
  const [visible, setVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, openCart } = useCart();
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  const isActive = (href: string, label: string) => {
    if (href === "#") return label === "Home" && pathname === "/";
    return pathname === href;
  };

  useEffect(() => {
    const handleScroll = () => {
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
  }, []);

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

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        transform: visible ? "translateY(0)" : "translateY(-100%)",
      }}
      className="z-50 bg-primary-fixed transition-transform duration-300"
    >
      <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-6 md:px-16">
        <a href="/" className="relative z-50">
          <img
            src="/images/graonatural_logo.jpeg"
            alt="Grão Natural"
            className="h-14 w-14 rounded-full object-cover"
          />
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                "relative font-body text-[11px] font-semibold tracking-[0.15em] text-primary uppercase transition-colors duration-300 hover:text-on-primary-fixed-variant",
                "after:absolute after:left-0 after:-bottom-[3px] after:h-[2px] after:bg-current after:transition-all after:duration-300",
                isActive(link.href, link.label) ? "after:w-full" : "after:w-0 hover:after:w-full"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={openCart}
            className="relative flex h-10 w-10 items-center justify-center text-primary hover:text-on-primary-fixed-variant transition-colors duration-300"
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
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative z-50 flex h-10 w-10 items-center justify-center text-primary md:hidden"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-primary-fixed md:hidden overflow-x-hidden"
          >
            <nav className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "relative font-headline text-3xl text-primary hover:text-on-primary-fixed-variant transition-colors duration-300",
                    "after:absolute after:left-0 after:-bottom-[4px] after:h-[2px] after:bg-current after:transition-all after:duration-300",
                    isActive(link.href, link.label) ? "after:w-full" : "after:w-0 hover:after:w-full"
                  )}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
