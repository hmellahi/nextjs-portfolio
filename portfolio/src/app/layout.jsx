import Navbar from "@/components/Navbar/index";
import Script from "next/script";
import { Suspense } from "react";
import "./globals.css";
import { Poppins } from 'next/font/google'

export const metadata = {
  title: "Hamza Mellahi | Portfolio",
  description: "Hamza Mellahi portfolio",
};

const poppins = Poppins({ subsets: ["latin"] });

const isDevelopment = process.env.NODE_ENV === "development";

export default function App({ children }) {
  return (
    <html lang="en">
      {/* <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Work+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap"
        />
      </Head> */}
      <body className={`${poppins?.className} font-poppins bg-slate-300/20`}>
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
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          {children}
        </Suspense>
      </body>
    </html>
  );
}
