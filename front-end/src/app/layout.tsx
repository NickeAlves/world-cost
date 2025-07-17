import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "World Cost",
  description: "Developed by Nicolas Alves",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
