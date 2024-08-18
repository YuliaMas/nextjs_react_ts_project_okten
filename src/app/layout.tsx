import type {Metadata} from "next";
import "./globals.css";
import React from "react";
import {ThemeProvider} from "@/components/theme-provider";
import HeaderComponent from "@/components/header/HeaderComponent";
import {inter} from "@/app/ui/fonts";
import FooterComponent from "@/components/FooterComponent";

export const metadata: Metadata = {
  title: "Movies App",
  description: "My first movies app with search movies and genres",
};

type Props = {
     children: React.ReactNode;
}

export default function RootLayout({children,}: Readonly<Props>) {
    const isDev = process.env.NODE_ENV === 'development'
  return (
    <html lang="en"  suppressHydrationWarning={isDev}>
    <body className={`${inter.className} antialiased`}>
      <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange>
          <HeaderComponent/>
          <main className={"pt-32 md:pt-28"}>
              {children}
          </main>
          <FooterComponent/>
      </ThemeProvider></body>
    </html>
  );
}
