"use client";

import { CONTACT_INFO, SITE_NAME } from "@/constants";

export function Footer() {
  return (
    <footer className="border-t border-outline-variant/10 bg-surface-container-low">
      <div className="mx-auto max-w-[1280px] px-6 md:px-16 py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <a href="#" className="flex items-center gap-3 mb-6">
              <img
                src="/images/graonatural_logo.jpeg"
                alt="Grão Natural"
                className="h-10 w-10 rounded-full object-cover"
              />
              <span className="font-headline text-xl text-primary">
                {SITE_NAME}
              </span>
            </a>
            <p className="font-body text-sm text-on-surface-variant max-w-xs leading-relaxed mb-8">
              Dedicados à curadoria de ingredientes puros e naturais para uma
              vida em pleno equilíbrio.
            </p>
            <div className="flex gap-5">
              {["Instagram", "Facebook", "Pinterest"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="font-body text-[11px] font-semibold tracking-[0.15em] text-on-surface-variant uppercase hover:text-primary transition-colors duration-300"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h6 className="font-body text-[11px] font-semibold tracking-[0.15em] text-primary uppercase mb-6">
              Links
            </h6>
            <ul className="space-y-4">
              {["Sobre Nós", "Catálogo", "Termos de Uso", "Política de Privacidade"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h6 className="font-body text-[11px] font-semibold  tracking-[0.15em] text-primary uppercase mb-6">
              Produtos
            </h6>
            <ul className="space-y-4">
              {["Chás", "Grãos", "Temperos", "Novidades"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h6 className="font-body text-[11px] font-semibold tracking-[0.15em] text-primary uppercase mb-6">
              Contato
            </h6>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-3">
              {CONTACT_INFO.address.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i === 0 && <br />}
                </span>
              ))}
            </p>
            <p className="font-body text-sm text-primary font-medium mb-3">
              {CONTACT_INFO.email}
            </p>
            <p className="font-body text-sm text-on-surface-variant">
              {CONTACT_INFO.phone}
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-on-surface-variant/60">
            © 2024 {SITE_NAME}. Todos os direitos reservados.
          </p>
          <span className="font-body text-[10px] font-semibold tracking-[0.2em] text-on-surface-variant/30 uppercase">
            Feito com propósito
          </span>
        </div>
      </div>
    </footer>
  );
}
