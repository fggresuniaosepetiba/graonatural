import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/cart-context";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CartDrawer } from "@/components/cart/cart-drawer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/constants";

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} | Saúde, sabor e bem-estar`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full">
      <body className="min-h-full flex flex-col bg-surface text-on-surface font-body antialiased">
        <CartProvider>
          <Header />
          <main className="flex-1 pt-20">{children}</main>
          <Footer />
          <CartDrawer />
          <ScrollToTop />
        </CartProvider>
      </body>
    </html>
  );
}
