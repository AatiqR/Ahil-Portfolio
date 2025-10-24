import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://ahilwebstudio.vercel.app";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/"], // <-- directory ko clearly block karega
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
