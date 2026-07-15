"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

/**
 * 4-card responsive grid (2×2 desktop, stacked mobile).
 * Each card scales its background image and lifts on hover.
 * Each eyebrow abbreviates the full category name into a punchy tag.
 */
export default function CardGrid() {
  return (
    <section
      id="card-grid"
      className="relative bg-cream py-24 md:py-32"
    >
      <div className="container-pop">
        <div className="mb-12 flex flex-col items-center text-center md:mb-16">
          <span className="eyebrow">WAYS IN</span>
          <h2 className="heading-display max-w-2xl text-balance text-3xl md:text-5xl">
            Find your way into POP
          </h2>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.12 },
            },
          }}
        >
          {siteConfig.cards.map((card) => (
            <Card key={card.title} {...card} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

interface Card {
  eyebrow: string;
  title: string;
  href: string;
  image: string;
  imageAlt: string;
}

function Card({ eyebrow, title, image, href, imageAlt }: Card) {
  return (
    <motion.a
      href={href}
      className="group relative block h-[420px] overflow-hidden sm:h-[460px]"
      variants={{
        hidden: { opacity: 0, y: 40 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      whileHover="hover"
    >
      {/* Background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <motion.img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover"
        variants={{
          hover: { scale: 1.06 },
        }}
        transition={{ duration: 0.7 }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent transition-colors duration-500 group-hover:from-terracotta/80 group-hover:via-black/30 group-hover:to-transparent" />

      {/* Content */}
      <div className="relative flex h-full flex-col justify-end p-8 text-cream">
        <span className="mb-2 text-[10px] uppercase tracking-[0.4em]">
          {eyebrow}
        </span>
        <h3
          className="heading-display mb-4 max-w-[14rem] text-2xl leading-tight text-balance"
        >
          {title}
        </h3>
        <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em]">
          <span className="link-underline">explore more</span>
          <motion.span
            className="inline-block"
            variants={{
              hover: { x: 3, y: -3 },
            }}
            transition={{ duration: 0.3 }}
          >
            <ArrowUpRight className="h-4 w-4" />
          </motion.span>
        </span>
      </div>
    </motion.a>
  );
}
