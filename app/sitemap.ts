import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastMod = new Date().toISOString();

  return [
    {
      url: "https://ahilwebstudio.vercel.app/",
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: "https://ahilwebstudio.vercel.app/services",
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://ahilwebstudio.vercel.app/projects",
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://ahilwebstudio.vercel.app/contact",
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}

