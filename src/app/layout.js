"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

import localFont from "next/font/local";

import { Montserrat } from "next/font/google";
import Column from "../components/Column";
import NavbarBar from "../components/Navbar";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const colusFont = localFont({
  src: [
    {
      path: "../../public/fonts/Colus-Regular.woff",
      weight: "50",
    },
    {
      path: "../../public/fonts/Colus-Regular.woff",
      weight: "100",
    },

    {
      path: "../../public/fonts/Colus-Regular.woff",
      weight: "200",
    },
    {
      path: "../../public/fonts/Colus-Regular.woff",
      weight: "300",
    },
    {
      path: "../../public/fonts/Colus-Regular.woff",
      weight: "400",
    },
  ],
  variable: "--font-colus",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${colusFont.variable} ${montserrat.variable}`}>
      <body>
        <Providers>
          <Column />
          <NavbarBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
