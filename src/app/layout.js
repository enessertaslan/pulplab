import "./globals.css";
import "./assets/css/tailwind.css";
import "./assets/css/materialdesignicons.min.css";
import { Figtree } from "next/font/google";
import Script from "next/script";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-figtree",
});

export const metadata = {
  title: "Mortal.Ai - Next Js AI Writer & Copywriting Template",
  description: "Mortal.Ai - Next Js AI Writer & Copywriting Template",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth" dir="ltr">
      <head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${figtree.variable} font-figtree text-base text-slate-900 dark:text-white dark:bg-slate-900`}
      >
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
