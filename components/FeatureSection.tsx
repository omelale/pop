"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface FeatureSectionProps {
  id?: string;
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
  href: string;
  image: string;
  imageAlt: string;
  reversed: boolean;
}

/**
 * Reusable alternating image + text section. Used for "The Menu" and
 * "The Space". One side scales in slightly as it enters view (subtle
 * Ken Burns).
 */
export default function FeatureSection({
  eyebrow,
  title,
  body,
  cta,
  href,
  image,
  imageAlt,
  reversed,
}: FeatureSectionProps) {
  const reduce = useReducedMotion();

  return (
    <section
      className={`relative overflow-hidden ${
        reversed ? "bg-cream" : "bg-ink text-cream"
      }`}
    >
      <div className="container-pop grid grid-cols-1 items-center gap-10 py-20 md:grid-cols-2 md:gap-16 md:py-28 lg:gap-24">
        {/* Image */}
        <motion.div
          className={`${reversed ? "md:order-2" : ""} relative aspect-[5/6] overflow-hidden`}
          initial={{ opacity: 0, scale: reduce ? 1 : 1.08 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={imageAlt}
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* Copy */}
        <div className={`${reversed ? "md:order-1" : ""} flex flex-col`}>
          <motion.span
            className={`eyebrow ${reversed ? "" : "!text-terracotta"}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {eyebrow}
          </motion.span>

          <motion.h2
            className="heading-display mb-5 text-3xl text-balance md:text-5xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: reduce ? 0 : 0.1 }}
          >
            {title}
          </motion.h2>

          <motion.p
            className={`mb-8 max-w-md text-base leading-relaxed md:text-lg ${
              reversed ? "text-ink/75" : "text-cream/80"
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: reduce ? 0 : 0.2 }}
          >
            {body}
          </motion.p>

          <motion.a
            href={href}
            className={`group inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] ${
              reversed ? "text-terracotta" : "text-cream"
            }`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: reduce ? 0 : 0.3 }}
          >
            <span className="link-underline">{cta}</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
