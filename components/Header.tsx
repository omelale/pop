"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import PopLogo from "./PopLogo";

/**
 * Sticky header.
 * - Transparent over the hero, fading to a solid cream backdrop with ink text
 *   once the user scrolls past a threshold.
 * - Mobile: hamburger menu that opens a full-screen overlay on a terracotta
 *   background.
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent background scrolling when the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled ? "bg-cream/95 shadow-sm backdrop-blur" : "bg-transparent"
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
      >
        <div className="container-pop flex h-20 items-center justify-between">
          {/* Logo lockup */}
          <a href="#home" className="group flex items-center gap-3">
            <span className="leading-none">
              <PopLogo
                color={scrolled ? "#1A1512" : "#F4EEE1"}
                className="h-7 w-auto transition-all duration-300 md:h-9"
              />
            </span>
            <span
              className={`hidden text-[10px] uppercase tracking-[0.4em] transition-colors duration-300 md:inline ${
                scrolled ? "text-ink/65" : "text-cream/85"
              }`}
              style={{ fontFamily: "var(--font-body)" }}
            >
              Place Of People
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 lg:gap-7 lg:flex">
            {siteConfig.nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`link-underline text-[11px] uppercase tracking-[0.24em] transition-colors duration-300 md:text-xs ${
                  scrolled
                    ? "text-ink hover:text-terracotta"
                    : "text-cream hover:text-terracotta"
                }`}
              >
                {link.label}
              </a>
            ))}

            {/* Instagram */}
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="POP on Instagram"
              className={`transition-colors duration-300 ${
                scrolled
                  ? "text-ink hover:text-terracotta"
                  : "text-cream hover:text-terracotta"
              }`}
            >
              <Instagram className="h-[18px] w-[18px]" strokeWidth={1.6} />
            </a>

            <a href="#location" className="btn-primary">
              Reserve a Table
            </a>
          </nav>

          {/* Mobile: hamburger */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className={`lg:hidden transition-colors duration-300 ${
              scrolled ? "text-ink" : "text-cream"
            }`}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col justify-center bg-terracotta px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <nav className="flex flex-col gap-6 text-center">
              {siteConfig.nav.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-3xl font-bold uppercase tracking-[0.2em] text-cream hover:text-ink"
                  style={{ fontFamily: "var(--font-display)" }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}

              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 text-cream underline-offset-8 hover:underline"
              >
                <Instagram className="h-5 w-5" /> Instagram
              </a>

              <a
                href="#location"
                className="btn-cream mt-4 self-center"
                onClick={() => setMobileOpen(false)}
              >
                Reserve a Table
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
