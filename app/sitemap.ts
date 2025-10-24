import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://ahilwebstudio.vercel.app";

  const urls = [
    { loc: "/", priority: 1.0 },
    { loc: "/services", priority: 0.9 },
    { loc: "/projects", priority: 0.9 },
    { loc: "/contact", priority: 0.8 },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        (url) => `
      <url>
        <loc>${baseUrl}${url.loc}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>${url.priority}</priority>
      </url>
    `
      )
      .join("")}
  </urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
