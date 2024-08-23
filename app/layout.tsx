import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EigenJobs",
  description: "EigenJobs Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#f7fafc]`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
