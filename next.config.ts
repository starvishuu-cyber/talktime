// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "talktimeenglish.netlify.app/", // e.g. example.com or cdn.talktimespokenenglish.com
      },
    ],
  },
};

export default nextConfig;
