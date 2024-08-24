import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "byanthny | my work",
  description: "my work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
