"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "@/components/container";
import { LanguageToggle } from "@/components/language-toggle";
import { useI18n } from "@/components/language-provider";

export function Navbar() {
  const pathname = usePathname();
  const { t } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/projects", label: t.nav.projects },
    { href: "/services", label: t.nav.services },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ];

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 12);
      setHidden(currentY > lastY && currentY > 140);
      lastY = currentY;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-transform duration-300 ${hidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className={`border-b ${scrolled ? "border-white/10 bg-neutral-950/85 backdrop-blur" : "border-transparent bg-transparent"}`}>
        <Container className="grid h-20 grid-cols-12 items-center">
          <Link href="/" className="col-span-8 font-grotesk text-lg tracking-[0.1em] text-white md:col-span-3">
            ARCSTONE
            <span className="ml-2 text-brand-gold">CONSTRUCT</span>
          </Link>

          <button
            type="button"
            className="col-span-4 justify-self-end rounded-full border border-white/20 px-4 py-2 text-sm text-white md:hidden"
            aria-label={t.nav.openMenuAria}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {t.nav.menu}
          </button>

          <nav className="col-span-9 hidden items-center justify-end gap-5 md:flex" aria-label={t.nav.primaryNavAria}>
            {links.map((link) => {
              const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm tracking-wide transition ${active ? "text-brand-gold" : "text-neutral-300 hover:text-white"}`}
                >
                  {link.label}
                </Link>
              );
            })}
            <motion.div
              initial={false}
              animate={{
                opacity: scrolled ? 1 : 0.72,
                y: scrolled ? 0 : -4,
                scale: scrolled ? 1 : 0.98,
              }}
              transition={{ duration: 0.28, ease: "easeOut" }}
            >
              <LanguageToggle />
            </motion.div>
          </nav>
        </Container>

        {menuOpen ? (
          <Container className="pb-4 md:hidden">
            <nav className="space-y-3 rounded-2xl border border-white/10 bg-neutral-900/95 p-3" aria-label={t.nav.mobileNavAria}>
              <div className="px-1">
                <LanguageToggle compact />
              </div>
              {links.map((link) => {
                const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block rounded-xl px-4 py-3 text-sm ${active ? "bg-white/8 text-brand-gold" : "text-neutral-200 hover:bg-white/5"}`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </Container>
        ) : null}
      </div>
    </header>
  );
}
