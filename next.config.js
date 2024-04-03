module.exports = async (phase, { defaultConfig }) => {
  const withSitemap = (await import('next-sitemap')).default;

  return withSitemap({
    siteUrl: 'https://www.bluepoint.ovh',
    ...defaultConfig,
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "drive.google.com"
        },
      ],
    },
  }, [
    // Ajoutez ici les configurations de routes pour votre sitemap
  ]);
};

