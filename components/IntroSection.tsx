"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

/**
 * Intro / mission-statement section.
 * Split layout: image on one side, mission copy on the other.
 * Scroll-triggered fade/slide reveal.
 */
export default function IntroSection() {
  const reduce = useReducedMotion();
  const { intro } = siteConfig;

  return (
    <section
      id="intro"
      className="relative overflow-hidden bg-cream py-24 md:py-32"
    >
      <div className="container-pop grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, scale: 1.06 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/5] overflow-hidden"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1000&q=80"
            alt="People gathered, laughing and sharing a meal at POP"
            className="h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-terracotta/15 via-transparent to-transparent" />
        </motion.div>

        {/* Copy side */}
        <div className="flex flex-col justify-center text-ink">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {intro.eyebrow}
          </motion.span>

          <motion.h2
            className="heading-display mb-6 text-3xl text-balance md:text-5xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: reduce ? 0 : 0.1 }}
          >
            {intro.title}
          </motion.h2>

          <motion.p
            className="mb-8 max-w-md text-base leading-relaxed text-ink/75 md:text-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: reduce ? 0 : 0.2 }}
          >
            {intro.body}
          </motion.p>

          <motion.a
            href={intro.href}
            className="group inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-terracotta"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: reduce ? 0 : 0.3 }}
          >
            <span className="link-underline">{intro.cta}</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.a>
        </div>
      </div>

      {/* Decorative mark */}
      <motion.span
        className="eyebrow absolute bottom-6 right-8 hidden uppercase tracking-[0.6em] opacity-20 md:block"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        POP — PLACE OF PEOPLE
      </motion.span>
    </section>
  );
}
