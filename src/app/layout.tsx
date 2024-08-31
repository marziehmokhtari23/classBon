import type { Metadata } from "next";
import "./globals.css";
import {Figtree} from "next/font/google";
import localFont from "next/font/local"
import { Footer } from "@/app/_components/footer/footer";
import { Header } from "@/app/_components/header/header";
const figtree=Figtree({
  display:"swap",
  subsets:["latin"],
  weight:["300","400","500","600"],
  variable:"--font-figtree"
})
const yekanBakht=localFont({
  src:[
    {
      path:'../../public/fonts/yekanBakht/IRANYekanBoldFaNum.ttf',
      weight:"500",
      style:"normal",
    },
    {
      path:'../../public/fonts/yekanBakht/IRANYekanLightFaNum.ttf',
      weight:"300",
      style:"normal",
    },

  ],
 variable:"--font-yekanBakht"
  
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html  dir="rtl" className={`dark ${figtree.variable}${yekanBakht.variable}`}>
      <body className="min-h-screen w-screen grid grid-rows-[80px_1fr_auto] dark:bg-base-100 dark:text-base-content">
    <Header/>
        <div className="w-screen">
        {children}
        </div>
     <Footer/>
      </body>

    </html>
  );
}
