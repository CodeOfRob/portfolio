import type { Metadata } from "next";

import NavBar from "@/components/navbar/page";
import MouseShadow from "@/components/util/mouse-shadow";

import "./globals.css";

export const metadata: Metadata = {
  title: "Robin Kupfer",
  description: "Portfolio of Robin Kupfer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <NavBar />
        <MouseShadow />
        {children}
      </body>
    </html>
  );
}
