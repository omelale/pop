/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Match the Cloudflare Pages static-file path so emitted asset links
  // (/assets/_next/...) resolve to the files uploaded under .open-next/assets/.
  assetPrefix: "/assets",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
};

module.exports = nextConfig;
