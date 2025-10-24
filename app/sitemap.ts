import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ahilwebstudio.vercel.app/",
      lastModified: new Date(),
      changefreq: "monthly",
      priority: 1.0,
    },
    {
      url: "https://ahilwebstudio.vercel.app/services",
      lastModified: new Date(),
      changefreq: "monthly",
      priority: 0.9,
    },
    {
      url: "https://ahilwebstudio.vercel.app/projects",
      lastModified: new Date(),
      changefreq: "monthly",
      priority: 0.9,
    },
    {
      url: "https://ahilwebstudio.vercel.app/contact",
      lastModified: new Date(),
      changefreq: "monthly",
      priority: 0.8,
    },
  ];
}
