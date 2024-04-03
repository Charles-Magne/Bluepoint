const withSitemap = require('next-sitemap');

module.exports = withSitemap({
  sitemap: {
    path: 'public/sitemap.xml',
    generate: true,
    siteUrl: 'https://www.bluepoint.ovh',
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.google.com"
      },
    ],
  },
});
