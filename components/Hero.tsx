"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import PopLogo from "./PopLogo";

/**
 * Hero section.
 * - Full-bleed background VIDEO on desktop, static POSTER image for reduced
 *   motion / low-bandwidth contexts, and a terracotta gradient overlay at the
 *   bottom for copy legibility.
 * - Staggered line reveal (line 1 → line 2) on the headline via framer-motion.
 */
export default function Hero() {
  const reduceMotion = useReducedMotion();
  const [videoReady, setVideoReady] = useState(false);

  // Replace with the real hero clip when supplied — keep the poster
  // fallback in place.
  const videoSrc = "/hero.mp4";
  const poster =
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80";

  // Pin the section to true viewport height.
  const [vh, setVh] = useState<string>("100vh");
  useEffect(() => {
    setVh(`${window.innerHeight}px`);
    const onResize = () => setVh(`${window.innerHeight}px`);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Track whether exit animations have begun so we can force the motto to
  // render even if framer-motion's mount cycle gets interrupted (e.g. by a
  // slow Suspense boundary or reduced-motion preference).
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);
  const showVariants = mounted ? "show" : "hidden";

  const line1 = siteConfig.hero.headline[0];
  const line2 = siteConfig.hero.headline[1];

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.35, delayChildren: 0.55 },
    },
  };

  const line = {
    hidden: { opacity: 0, y: 36 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden"
      style={{ height: vh }}
    >
      {/* Background media */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black/40" />

        {!reduceMotion && (
          <video
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              videoReady ? "opacity-100" : "opacity-0"
            }`}
            autoPlay
            muted
            loop
            playsInline
            poster={poster}
            onLoadedData={() => setVideoReady(true)}
            src={videoSrc}
          />
        )}

        {(reduceMotion || !videoReady) && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={poster}
            alt="POP bistro atmosphere"
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}

        {/* Bottom terracotta gradient for copy legibility */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3"
          style={{
            background:
              "linear-gradient(to top, rgba(193,80,59,0.85) 0%, rgba(193,80,59,0.35) 40%, transparent 100%)",
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container-pop relative flex h-full flex-col items-center justify-center text-center text-cream">
        {/* POP logo lockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          <PopLogo
            color="#F4EEE1"
            className="mx-auto mb-7 h-24 w-auto drop-shadow-md md:h-32"
          />
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          className="mb-6 text-[11px] uppercase tracking-[0.6em] text-cream/90 md:text-xs"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          {siteConfig.hero.eyebrow}
        </motion.p>

        {/* Kinetic two-line headline — text-shadow keeps it legible over
            warm backgrounds on every screen size */}
        <motion.h1
          className="heading-display hero-motto text-balance text-4xl leading-[1.08] text-cream md:text-6xl lg:text-7xl"
          variants={container}
          initial="hidden"
          animate={showVariants}
        >
          <motion.span className="block normal-case" variants={line}>
            {line1}
          </motion.span>
          <motion.span
            className="mt-2 block font-semibold italic normal-case"
            variants={line}
          >
            {line2}
          </motion.span>
        </motion.h1>

        {/* Scroll indicator */}
        <motion.a
          href="#intro"
          className="absolute bottom-10 flex flex-col items-center gap-2 text-cream/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          aria-label="Scroll down"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">
            {siteConfig.hero.scrollCta}
          </span>
          <motion.span
            animate={reduceMotion ? {} : { y: [0, 8, 0] }}
            transition={{ duration: 1.4, repeat: Infinity }}
          >
            <ChevronDown className="h-5 w-5" />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}
