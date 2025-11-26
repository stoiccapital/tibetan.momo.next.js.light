import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tibetan Momo",
  description: "Authentische tibetische Momos in Regensdorf.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className="bg-white">
      <body className="bg-white text-neutral-900">{children}</body>
    </html>
  );
}

