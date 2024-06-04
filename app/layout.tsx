import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <div className="container">
            <div className="header__nav">
              <Link className="header__logo" href="/">
                <Image  src="/header/logo.png" alt="logo"/>
              </Link>
              <ul className="header__list">
                <li className="header__item">
                  <a href="/pages/japan">Japan</a>
                </li>
                <li className="header__item">
                  <a href="/pages/brazil">Brazil</a>
                </li>
                <li className="header__item">
                  <a href="/pages/canada">Canada</a>
                </li>
                <li className="header__item">
                  <a href="/pages/australia">Australia</a>
                </li>
              </ul>
            </div>
            
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
