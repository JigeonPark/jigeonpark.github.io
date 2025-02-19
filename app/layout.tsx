"use client";

import { useEffect } from "react";
import { ThemeProvider, useTheme } from "./theme/ThemeProvider";
import Header from "./Header";
import Footer from "./Footer";
import ThemeToggle from "./theme/ThemeToggle";
import { GlobalStyle } from "./styles/GlobalStyle";

export let isMobile = false;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const changeIsMobile = () => {
    isMobile = window.innerWidth < 576;
  };

  useEffect(() => {
    window.addEventListener("resize", changeIsMobile);
    return () => window.removeEventListener("resize", changeIsMobile);
  }, []);

  useEffect(() => {
    isMobile = window.innerWidth < 576;
  }, []);

  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <GlobalStyle />
          <Header />
          {children}
          <Footer />
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
