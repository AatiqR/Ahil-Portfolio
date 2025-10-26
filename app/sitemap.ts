import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ahilwebstudio.vercel.app";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: "2025-10-24",
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: "2025-10-24",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: "2025-10-24",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: "2025-10-24",
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
