import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/", "/api/"], // agar koi folder aap hide karna chahein
    },
    sitemap: "https://ahilwebstudio.vercel.app/sitemap.xml",
    host: "https://ahilwebstudio.vercel.app",
  };
}
