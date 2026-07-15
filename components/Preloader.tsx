"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Preloader: brand wordmark reveals on a Terracotta backdrop, then fades
 * out to reveal the page.
 *
 * - Self-dismisses after a short duration.
 * - Respects `prefers-reduced-motion` (renders nothing / instant finish).
 * - Never blocks interaction: it disappears regardless of asset loading.
 */
export default function Preloader() {
  const [show, setShow] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  // Guard for reduced-motion + a firm timeout so the page is never blocked.
  useEffect(() => {
    const reduceMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduce-motion: reduce)").matches;
    if (reduceMotion) {
      setShow(false);
      setShouldRender(false);
      return;
    }

    const max = setTimeout(() => setShow(false), 1800);
    const cleanup = setTimeout(() => setShouldRender(false), 2500);
    return () => {
      clearTimeout(max);
      clearTimeout(cleanup);
    };
  }, []);

  // If reduced motion is on, render nothing.
  if (!shouldRender) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-terracotta"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          aria-hidden="true"
        >
          <motion.div
            className="flex flex-col items-center gap-3"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Swap the image for the real POP logo when it's dropped in. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="POP — Place Of People"
              className="h-16 w-auto object-contain"
              onError={(e) => {
                // Fallback if the asset isn't present yet
                (e.currentTarget as HTMLImageElement).style.display = "none";
                const fallback = (e.currentTarget.parentNode as HTMLElement)
                  ?.querySelector<HTMLSpanElement>("[data-logo-fallback]");
                if (fallback) fallback.style.display = "inline-flex";
              }}
            />
            <span
              data-logo-fallback
              className="hidden items-center text-3xl font-black uppercase tracking-[0.25em] text-cream"
              style={{ fontFamily: "var(--font-display)" }}
            >
              POP
            </span>
            <span
              className="mt-2 text-[10px] uppercase tracking-[0.5em] text-cream/70"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Place Of People
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
