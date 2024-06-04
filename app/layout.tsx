import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import "./styles/globals.css";
import Link from "next/link";

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
              <a className="header__logo" href="/">
                <img  src="/header/logo.png" alt="logo"/>
              </a>
              <ul className="header__list">
                <li className="header__item">
                  <a href="/japan">Japan</a>
                </li>
                <li className="header__item">
                  <a href="/brazil">Brazil</a>
                </li>
                <li className="header__item">
                  <a href="/canada">Canada</a>
                </li>
                <li className="header__item">
                  <a href="/australia">Australia</a>
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
