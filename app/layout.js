"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import "@/styles/globals.css";
import "@/styles/swiper-bundle.min.css";

export default function RootLayout({ children, params  }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
