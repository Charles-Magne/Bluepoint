// L'URL de votre site
const URL = "https://www.bluepoint.ovh"

// Vos routes statiques
const SITE_ROUTES = ["/", "/bluepoint", "/services", "/contact", "/plandusite", "/donneesdusite" ]

export default async function sitemap() {

  const routes = SITE_ROUTES.map(route => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }))

  return [...routes]
}