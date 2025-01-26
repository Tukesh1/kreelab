import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
// import { Analytics } from "@vercel/analytics/react";

const font = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "kreelab | Fuel Your Vision, Elevate Your Brand.",
  description: "Grow your business with kreelab, a design & development studio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>

        {children}

      </body>
    </html>
  );
}
