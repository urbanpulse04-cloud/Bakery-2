import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flour & Stone Bakery",
  description: "Handcrafted breads and pastries baked fresh daily.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
