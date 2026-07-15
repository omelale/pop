"use client";

import { Instagram } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import PopLogo from "./PopLogo";

/**
 * Footer.
 * Brand descriptor, nav mirror, Instagram link + Privacy placeholder, and a
 * copyright bottom bar.
 */
export default function Footer() {
  const { footer } = siteConfig;

  return (
    <footer className="bg-terracotta text-cream">
      <div className="container-pop grid grid-cols-1 gap-14 py-20 md:grid-cols-3 md:gap-10">
        {/* Brand column */}
        <div className="md:col-span-1">
          <PopLogo
            color="#F4EEE1"
            className="mb-4 h-11 w-auto drop-shadow-sm"
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/80">
            {footer.blurb}
          </p>
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="POP on Instagram"
            className="mt-6 inline-flex items-center gap-2 text-cream underline-offset-8 transition hover:underline"
          >
            <Instagram className="h-5 w-5" /> @popbistro.al
          </a>
        </div>

        {/* Navigation mirror */}
        <nav className="flex flex-col gap-2">
          <span className="mb-2 text-xs uppercase tracking-[0.4em] text-cream/55">
            Explore
          </span>
          {siteConfig.nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="link-underline w-fit text-sm text-cream/95 hover:text-cream"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Quick CTA / About */}
        <div className="flex flex-col gap-2">
          <span className="mb-2 text-xs uppercase tracking-[0.4em] text-cream/55">
            POP
          </span>
          <a
            href="mailto:hello@popbistro.al"
            className="link-underline w-fit text-sm text-cream/95"
          >
            hello@popbistro.al
          </a>
          <a
            href="#location"
            className="btn-outline-cream mt-4 w-fit"
          >
            Reserve a Table
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/20 py-6">
        <div className="container-pop flex flex-col items-center justify-between gap-3 text-xs uppercase tracking-[0.3em] text-cream/70 md:flex-row">
          <span>{footer.copyright}</span>
          <a
            href={footer.privacyHref}
            className="link-underline hover:text-cream"
          >
            {footer.privacyLabel}
          </a>
        </div>
      </div>
    </footer>
  );
}
