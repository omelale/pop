import React from "react";

interface PopLogoProps {
  className?: string;
  color?: string;
  /**
   * Render as an inline <svg> inside the document (default). Use this in the
   * Header / Hero / Footer — the text picks up the page's Fraunces next/font.
   * Set `asImg` only if you must use it as an image source.
   */
  asImg?: boolean;
}

/**
 * POP wordmark as an inline, font-backed SVG so it always renders the real
 * Fraunces display cut regardless of external-font loading inside <img>.
 *
 * If the design final logo gets supplied as /public/logo.png, drop it and swap
 * all <PopLogo /> usages for `<img src="/logo.png" />`.
 */
export default function PopLogo({
  className = "h-9 w-auto",
  color = "#C1503B",
  asImg = false,
}: PopLogoProps) {
  // We use a generous view box; font is served from next/font so no <img>
  // font-fetch failures.
  const svg = (
    <svg
      viewBox="0 0 480 120"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="POP — Place Of People"
    >
      <text
        x="240"
        y="86"
        textAnchor="middle"
        fontSize="104"
        fontFamily="'Fraunces', Georgia, 'Times New Roman', serif"
        fontStyle="normal"
        fontWeight={900}
        letterSpacing="0.2em"
        fill={color}
        dominantBaseline="middle"
      >
        POP
      </text>
    </svg>
  );

  if (asImg) {
    const url =
      "data:image/svg+xml," +
      encodeURIComponent(
        `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 480 120'>` +
          `<text x='240' y='86' text-anchor='middle' font-size='104' ` +
          `font-family='Georgia, serif' font-weight='900' letter-spacing='20' ` +
          `fill='${encodeURIComponent(color)}' dominant-baseline='middle'>POP</text></svg>`
      );
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={url} alt="POP — Place Of People" className={className} />;
  }

  return svg;
}
