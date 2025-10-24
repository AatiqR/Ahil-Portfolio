import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://ahilwebstudio.vercel.app";

  const routes = [
    "",
    "/services",
    "/projects",
    "/contact",
  ];

  const sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: route === "" ? 1.0 : 0.9,
  }));

  return sitemap;
}
