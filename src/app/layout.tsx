import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { siteConfig } from "@/config/site";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-vazirmatn",
});

const iranSans = localFont({
  src: [
    {
      path: "../../public/fonts/IranSansX(Eco)/Webfonts/fonts/woff2/IRANSansX-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/IranSansX(Eco)/Webfonts/fonts/woff2/IRANSansX-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-iransans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "خدمات شبکه و پشتیبانی IT در همدان | فرانت FARANET",
  description: "طراحی، راه‌اندازی و پشتیبانی زیرساخت‌های شبکه و فناوری اطلاعات در همدان؛ از شبکه و سرور تا مجازی‌سازی، امنیت، Help Desk و قراردادهای پشتیبانی مستمر کسب‌وکارها.",
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: siteConfig.url,
    title: "فرانت | FARANET",
    description: "توسعه ارتباطات هوشمند نیکان - راهکارهای هوشمند برای کسب‌و‌کارهای شما",
    siteName: "FARANET",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "فرانت | FARANET",
    "image": `${siteConfig.url}/brand/logo.png`,
    "description": "خدمات پشتیبانی شبکه، راه‌اندازی زیرساخت فناوری اطلاعات، و مجازی‌سازی در همدان.",
    "url": siteConfig.url,
    "telephone": siteConfig.phone,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hamedan",
      "addressRegion": "Hamedan Province",
      "addressCountry": "IR"
    }
  };

  return (
    <html lang="fa" dir="rtl" className={`${vazirmatn.variable} ${iranSans.variable} scroll-smooth scroll-pt-24 md:scroll-pt-32`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-vazirmatn antialiased text-slate-800 bg-slate-50 min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
