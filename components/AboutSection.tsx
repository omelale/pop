"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import PopLogo from "./PopLogo";

/**
 * About / Brand Story.
 * Full-bleed Terracotta background with cream text — the section where the
 * brand colour is used boldly. Looping background video is optional here;
 * we use a static high-quality background image with a terracotta overlay
 * so it works on every device, then layer text over the top.
 */
export default function AboutSection() {
  const reduce = useReducedMotion();
  const { about } = siteConfig;

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-terracotta py-24 md:py-32"
    >
      {/* Background image, tinted the brand colour */}
      <div className="absolute inset-0 -z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-terracotta/90" />
        <div className="absolute inset-0 bg-gradient-to-br from-terracotta/95 via-transparent to-terracotta/80" />
      </div>

      <div className="container-pop relative grid grid-cols-1 items-center gap-16 md:grid-cols-2">
        {/* Left: brand lockup + badge */}
        <motion.div
          className="flex flex-col items-start"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <PopLogo
            color="#F4EEE1"
            className="mb-6 h-20 w-auto drop-shadow-sm"
          />

          <span className="mt-2 inline-flex w-fit items-center gap-2 rounded-full border border-cream/40 px-4 py-1.5 text-[11px] uppercase tracking-[0.4em] text-cream/90">
            <span className="h-1.5 w-1.5 rounded-full bg-cream" />
            {about.badge}
          </span>
        </motion.div>

        {/* Right: copy */}
        <div className="text-cream">
          <motion.span
            className="eyebrow !text-cream"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {about.eyebrow}
          </motion.span>

          <motion.h2
            className="heading-display mb-6 text-3xl text-balance md:text-5xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: reduce ? 0 : 0.1 }}
          >
            {about.title}
          </motion.h2>

          <motion.p
            className="mb-10 max-w-md text-base leading-relaxed text-cream/85 md:text-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: reduce ? 0 : 0.2 }}
          >
            {about.body}
          </motion.p>

          <motion.a
            href={about.href}
            className="group inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-cream"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: reduce ? 0 : 0.3 }}
          >
            <span className="link-underline">{about.cta}</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.a>
        </div>
      </div>

      {/* Decorative sweeping line */}
      <motion.div
        className="absolute -bottom-1 left-0 right-0 h-px bg-cream/30"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "left" }}
      />
    </section>
  );
}
