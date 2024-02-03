import Navbar from "@/components/Navbar/index";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "Hamza Mellahi | Portfolio",
  description:
    "http://hmellahi.me is the personal website of Hamza Mellahi, a Software Engineer and Content Creator. Built with Next.js 13.",
  author: "Hamza Mellahi",
  url: "http://hmellahi.me",
  keywords: ["Software Engineer", "Content Creator", "Next.js", "Portfolio", "React.js"], // Relevant keywords for your website
  type: "website",
  siteName: "Hamza Mellahi",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const isDevelopment = process.env.NODE_ENV === "development";

export default function App({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins?.className} bg-slate-300/20`}>
        {!isDevelopment && (
          <>
            <Script
              strategy="lazyOnload"
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
            />
            <Script strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
