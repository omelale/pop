"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import NewsletterForm from "./NewsletterForm";

/**
 * Contact & Location.
 * Right side holds a background image; left side holds the hours, address,
 * contact details, and the newsletter signup. The reserve CTA lives in the
 * header — here we surface the functional location info.
 */
export default function ContactSection() {
  const reduce = useReducedMotion();
  const { contact } = siteConfig;

  return (
    <section
      id="location"
      className="relative overflow-hidden bg-cream"
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left — detail column */}
        <div className="container-pop py-24 md:py-32">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {contact.eyebrow}
          </motion.span>

          <motion.h2
            className="heading-display mb-10 max-w-md text-3xl text-balance md:text-5xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: reduce ? 0 : 0.1 }}
          >
            {contact.title}
          </motion.h2>

          <ul className="space-y-6 text-ink">
            <motion.li
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: reduce ? 0 : 0.15 }}
            >
              <MapPin className="mt-1 h-5 w-5 flex-none text-terracotta" />
              <span className="leading-relaxed">{contact.address}</span>
            </motion.li>

            <motion.li
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: reduce ? 0 : 0.22 }}
            >
              <Phone className="mt-1 h-5 w-5 flex-none text-terracotta" />
              <a
                href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                className="link-underline"
              >
                {contact.phone}
              </a>
            </motion.li>

            <motion.li
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: reduce ? 0 : 0.29 }}
            >
              <Mail className="mt-1 h-5 w-5 flex-none text-terracotta" />
              <a href={`mailto:${contact.email}`} className="link-underline">
                {contact.email}
              </a>
            </motion.li>

            {contact.hours.map((h) => (
              <motion.li
                key={h.days}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: reduce ? 0 : 0.36 }}
              >
                <Clock className="mt-1 h-5 w-5 flex-none text-terracotta" />
                <div>
                  <div className="font-medium">{h.days}</div>
                  <div className="text-ink/70">{h.time}</div>
                </div>
              </motion.li>
            ))}
          </ul>

          {/* Newsletter signup */}
          <motion.div
            className="mt-12 border-t border-ink/15 pt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: reduce ? 0 : 0.4 }}
          >
            <NewsletterForm />
          </motion.div>
        </div>

        {/* Right — background image */}
        <motion.div
          className="relative min-h-[420px] md:min-h-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={contact.backgroundImage}
            alt="POP bistro exterior"
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* Soft terracotta overlay for cohesion with the brand */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-terracotta/30 via-transparent to-terracotta/20 md:from-transparent md:to-terracotta/15" />
        </motion.div>
      </div>
    </section>
  );
}
