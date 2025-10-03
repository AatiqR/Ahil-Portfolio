import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script"; // Import the Script component
import { SpeedInsights } from "@vercel/speed-insights/next"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ahil Agency – High-Converting Websites for Business Growth",
  description: "Ahil Agency creates high-converting, SEO-optimized websites that drive leads, sales, and long-term growth. We help businesses, coaches, doctors, law firms & startups stand out online.",
      icons: {
    icon: "/Assets/LOGO.png", 
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
