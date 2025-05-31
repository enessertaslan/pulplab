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
  title: "Don’t Work Harder. Work Smarter — with AI Built Just for You.",
  description:
    "PulpLab creates AI-powered systems that fit your business like a glove. From reporting and internal processes to support and analytics. We automate the boring so you can focus on scaling.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth" dir="ltr">
      <head>
        {/* GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DG47LV95LE"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DG47LV95LE');
          `}
        </Script>

        {/* GTM-NT79X35 */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id=GTM-NT79X35'+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NT79X35');
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
        {/* GTM noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NT79X35"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

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
