import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://ahilwebstudio.vercel.app";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
