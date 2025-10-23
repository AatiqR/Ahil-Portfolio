import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ahil Web Studio | Full Stack Developer & Next.js Expert for Global Businesses",
  description:
    "Ahil Web Studio builds fast, SEO-optimized, and high-converting websites using Next.js and React. Helping startups, agencies, and professionals grow their online presence worldwide.",
  keywords: [
    "Full Stack Developer",
    "Next.js Expert",
    "React Developer",
    "Web Design Agency",
    "SEO Optimized Websites",
    "Freelance Web Developer",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ahilwebstudio.vercel.app/",
  },
  openGraph: {
    title: "Ahil Web Studio | Full Stack Developer & Next.js Expert",
    description:
      "Explore Ahil’s professional portfolio – Full Stack Developer and Next.js Expert helping brands grow with modern web solutions.",
    url: "https://ahilwebstudio.vercel.app/",
    siteName: "Ahil Web Studio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://ahilwebstudio.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ahil Web Studio Portfolio Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahil Web Studio | Full Stack Developer & Next.js Expert",
    description:
      "Ahil builds modern, SEO-optimized websites using Next.js and React for global businesses.",
    images: ["https://ahilwebstudio.vercel.app/og-image.jpg"],
  },
  icons: {
    icon: "/Assets/LOGO.png",
  },
};
other: {
    "google-site-verification": "DOuHYzCAHl3lOkz1Y8nLhneoLH53VIfCgZlOyLkUyX0",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <SpeedInsights />
        <Script
          id="kommunicate-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(d, m){
                var kommunicateSettings = 
                  {"appId":"22e442bab43e9efffe7c6bb7c87a7f982","popupWidget":true,"automaticChatOpenOnNavigation":true};
                var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
                s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
                var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
                window.kommunicate = m; m._globals = kommunicateSettings;
              })(document, window.kommunicate || {});
            `,
          }}
        />
      </body>
    </html>
  );
}
