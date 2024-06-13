"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { useState } from "react";
import Header from "@/components/Header";
import Foot from "@/components/Home/Foot";
import { Analytics } from '@vercel/analytics/react';
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState("light");
  return (
    <html lang="en" className={theme}>
      <head>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v3.4.0/mapbox-gl.css"
          rel="stylesheet"
        />

        <link rel="shortcut icon" href="./kyr.png" type="png" />
      </head>

      <body className={inter.className}>
        <Header theme={theme} setTheme={setTheme} />
        {children}
        <Foot />
        <Analytics />
      </body>
    </html>
  );
}
