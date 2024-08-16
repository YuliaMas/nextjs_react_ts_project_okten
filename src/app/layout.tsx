import type {Metadata} from "next";
import "./globals.css";
import React from "react";
import {ThemeProvider} from "@/components/theme-provider";
import HeaderComponent from "@/components/header/HeaderComponent";
import {inter} from "@/app/ui/fonts";

export const metadata: Metadata = {
  title: "Movies App",
  description: "My first movies app with search movies and genres",
};

type Props = {
     children: React.ReactNode;
}

export default function RootLayout({children,}: Readonly<Props>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
      <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange>
          <HeaderComponent/>
          <div className={"pt-24"}>
              {children}
          </div>
      </ThemeProvider></body>
    </html>
  );
}
