/**
 * POP — Place Of People
 * Central site configuration. Edit copy, links, and colors here to update
 * across all components without hunting through the UI code.
 */

export const siteConfig = {
  name: "POP",
  tagline: "PLACE OF PEOPLE",
  motto: "Every place has a name.",
  mottoEmphasis: "Ours has a feeling.",
  openingBadge: "Opening soon",
  url: "https://popbistro.al",
  instagramUrl: "https://www.instagram.com/popbistro.al/",

  nav: [
    { label: "Home", href: "#home" },
    { label: "Menu", href: "#menu" },
    { label: "Events", href: "#events" },
    { label: "Gallery", href: "#gallery" },
    { label: "Location", href: "#location" },
    { label: "About", href: "#about" },
  ],

  hero: {
    eyebrow: "PLACE OF PEOPLE",
    headline: ["Every place has a name.", "Ours has a feeling."],
    scrollCta: "Scroll to discover",
  },

  intro: {
    eyebrow: "COFFEE. BRUNCH. COCKTAILS.",
    title: "One place, every part of the day",
    body: "Welcome to POP, a place where mornings begin with coffee, afternoons turn into brunch, evenings end with cocktails, and every moment is shared with people.",
    cta: "explore more",
    href: "#about",
  },

  featureSections: [
    {
      id: "menu",
      eyebrow: "MENU",
      title: "Made to linger over",
      body: "Our menu flows the way a good day does — from first coffee and fresh pastries through long, sunlit brunches to golden-hour cocktails. Simple things, done exceptionally, whenever you need them.",
      cta: "View Full Menu",
      href: "#menu",
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Barista pouring coffee art",
      reversed: false,
    },
    {
      id: "space",
      eyebrow: "THE SPACE",
      title: "A room built for connection",
      body: "Warm light, worn wood, and nooks that invite you to stay. POP was designed for the conversations that happen when you're not watching the clock — a room that feels like it was built around your table.",
      cta: "Explore Gallery",
      href: "#gallery",
      image:
        "https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Cozy bistro interior",
      reversed: true,
    },
  ],

  cards: [
    {
      eyebrow: "GATHER",
      title: "Ways to gather beyond the table",
      href: "#events",
      image:
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Friends celebrating together",
    },
    {
      eyebrow: "CAPTURE",
      title: "Moments, captured as they happen",
      href: "#gallery",
      image:
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Bar atmosphere",
    },
    {
      eyebrow: "BELONG",
      title: "Where regulars become family",
      href: "#community",
      image:
        "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=900&q=80",
      imageAlt: "People toastimg with drinks",
    },
    {
      eyebrow: "TASTE",
      title: "Coffee to cocktails, all day",
      href: "#menu",
      image:
        "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=900&q=80",
      imageAlt: "Cocktail being prepared",
    },
  ],

  about: {
    eyebrow: "ABOUT",
    title: "A place of people, opening soon",
    body: "POP was born from a simple idea: that the best moments in the day aren't defined by the food or the drink, but by who you share them with. Coffee starts the conversation. Brunch lingers in it. Cocktails close it out. Everything in between is the point.",
    cta: "Our full story",
    href: "#",
    badge: "Opening soon",
  },

  contact: {
    eyebrow: "VISIT US",
    title: "Find us when you need us",
    backgroundImage:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80",
    address: "Coming to a neighbourhood near you — Tirana, Albania",
    phone: "+355 00 000 0000",
    email: "hello@popbistro.al",
    hours: [
      { days: "Monday – Sunday", time: "Coffee from 7 AM   ·   Cocktails until late" },
    ],
    cta: "Reserve a Table",
  },

  footer: {
    blurb: "POP — Place Of People. Coffee, brunch, cocktails, and every moment shared between.",
    copyright: "POP  ©  Place Of People",
    privacyLabel: "Privacy Notice",
    privacyHref: "#privacy",
    newsletter: {
      title: "Be the first to know when we open",
      placeholder: "your@email.com",
      cta: "Notify me",
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;
