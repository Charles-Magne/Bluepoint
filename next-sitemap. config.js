module.exports = {
    siteUrl: 'https://www.bluepoint.ovh',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    exclude: ['/admin', '/login', '/signup'],
    robotsTxtOptions: {
      policies: [{ userAgent: '*', allow: '/' }],
    },
  };
  