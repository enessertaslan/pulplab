import "./globals.css";
import "./assets/css/tailwind.css";
import "./assets/css/materialdesignicons.min.css";
import { Figtree } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-figtree",
});

export const metadata = {
  title: "Don’t Work Harder. Work Smarter — with AI Built Just for You. ",
  description:
    "PulpLab creates AI-powered systems that fit your business like a glove.From reporting and internal processes to support and analytics. We automate the boring so you can focus on scaling.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth" dir="ltr">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QR086TYN4S
"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-QR086TYN4S
');
  `}
        </Script>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${figtree.variable} font-figtree text-base text-slate-900 dark:text-white dark:bg-slate-900`}
      >
        <Analytics />
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
          async
        />
        {children}
      </body>
    </html>
  );
}
