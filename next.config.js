/** @type {import('next').NextConfig} */
const nextConfig = {};

//module.exports = nextConfig
const withSitemap = require('next-sitemap')({
  siteUrl: 'https://www.bluepoint.ovh',
});

module.exports = withSitemap ({
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.google.com"
      },
    ],
  },
});
