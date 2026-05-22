"use client";

import { CONTACT_INFO, SITE_NAME, WHATSAPP_NUMBER } from "@/constants";

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
                className="h-12 w-12 rounded-full object-cover"
              />
              <span className="font-headline text-xl text-primary">
                {SITE_NAME}
              </span>
            </a>
            <p className="font-body text-sm text-on-surface-variant max-w-xs leading-relaxed mb-8">
              Dedicados à curadoria de ingredientes puros e naturais para uma
              vida em pleno equilíbrio.
            </p>
            <div className="flex gap-4">
              {[
                {
                  name: "Instagram",
                  href: "#",
                  path: "M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm0 2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3zm10 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-5 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z",
                  hoverColor: "hover:text-[#E4405F]",
                },
                {
                  name: "Facebook",
                  href: "#",
                  path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
                  hoverColor: "hover:text-[#1877F2]",
                },
                {
                  name: "Pinterest",
                  href: "#",
                  path: "M12 0C5.4 0 0 5.4 0 12c0 5.1 3.2 9.4 7.6 11.1-.1-.9-.2-2.4 0-3.4l1.4-6.1s-.4-.8-.4-1.9c0-1.8 1-3.2 2.3-3.2 1.1 0 1.6.8 1.6 1.8 0 1.1-.6 2.7-1 4.2-.3 1.3.6 2.3 1.9 2.3 2.3 0 4.1-2.5 4.1-6 0-3.2-2.3-5.4-5.5-5.4-3.8 0-6 2.8-6 5.7 0 1.1.4 2.3 1 3 .1.1.1.3-.1.9l-.3 1.1c-.1.5-.5.6-.9.4-1.7-.8-2.8-3.3-2.8-5.3 0-4.3 3.1-8.3 9.1-8.3 4.8 0 8.5 3.4 8.5 8 0 4.8-3 8.6-7.2 8.6-1.4 0-2.7-.7-3.2-1.6l-.9 3.4c-.3 1.3-1.2 2.9-1.8 3.9 1.4.4 2.8.6 4.3.6 6.6 0 12-5.4 12-12S18.6 0 12 0z",
                  hoverColor: "hover:text-[#E60023]",
                },
              ].map(({ name, href, path, hoverColor }) => (
                <a
                  key={name}
                  href={href}
                  className={`flex items-center justify-center w-10 h-10 rounded-full border border-outline-variant/20 text-on-surface-variant transition-all duration-300 ${hoverColor} hover:border-current`}
                  aria-label={name}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                    fill="currentColor"
                  >
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h6 className="font-body text-[11px] font-semibold tracking-[0.15em] text-primary uppercase mb-6">
              Links
            </h6>
            <ul className="space-y-4">
              {[
                { label: "Sobre Nós", href: "/sobre" },
                { label: "Catálogo", href: "/produtos" },
                { label: "Termos de Uso", href: "#" },
                { label: "Política de Privacidade", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="relative font-body text-sm text-on-surface-variant hover:text-primary transition-colors duration-200 after:absolute after:left-0 after:-bottom-[2px] after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
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
                    className="relative font-body text-sm text-on-surface-variant hover:text-primary transition-colors duration-200 after:absolute after:left-0 after:-bottom-[2px] after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
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
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("🌿 Olá Grão Natural!\n\n💻 Vim pelo site e gostaria de mais informações sobre os produtos.\n\n🙏 Aguardo o retorno!")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors duration-200"
            >
              {CONTACT_INFO.phone}
            </a>
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
