
module.exports = async (phase, { defaultConfig }) => {
  const withSitemap = require('@next/bundle-analyzer-plugin').withBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
  })


  return withSitemap({
    sitemap: {
      path: 'public/sitemap.xml',
      generate: true,
      siteUrl: 'https://www.bluepoint.ovh',
    },
    ...defaultConfig,
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "drive.google.com"
        },
      ],
    },
  });
};

