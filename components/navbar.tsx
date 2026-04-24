"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/data";
import { Container } from "@/components/container";

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

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
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            Menu
          </button>

          <nav className="col-span-9 hidden items-center justify-end gap-8 md:flex" aria-label="Primary navigation">
            {navLinks.map((link) => {
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
          </nav>
        </Container>

        {menuOpen ? (
          <Container className="pb-4 md:hidden">
            <nav className="rounded-2xl border border-white/10 bg-neutral-900/95 p-3" aria-label="Mobile navigation">
              {navLinks.map((link) => {
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
