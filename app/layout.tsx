import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "POP — Place Of People · Coffee · Brunch · Cocktails",
  description:
    "POP is a fluid, all-day bistro in Tirana — coffee to brunch to cocktails, every moment shared between people. Opening soon.",
  keywords: [
    "POP",
    "Place Of People",
    "bistro",
    "Tirana",
    "coffee",
    "brunch",
    "cocktails",
    "Albania",
  ],
  openGraph: {
    title: "POP — Place Of People",
    description:
      "One place, every part of the day. Coffee, brunch, cocktails — and every moment shared between.",
    type: "website",
    locale: "en_AL",
    url: "https://popbistro.al",
    siteName: "POP",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`}>
        {children}
      </body>
    </html>
  );
}
