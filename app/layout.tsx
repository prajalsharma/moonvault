import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import SecondaryNavbar from "@/components/SecondaryNavbar";

const plus_jakarata_sans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EigenJobs",
  description: "Job Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plus_jakarata_sans.className}`}>
        <Header />
        <div>
          <section className="main-section h-screen flex justify-center items-center bg-[#eaf2ff]">
            <h1 className="text-xl md:text-4xl font-bold">EigenJobs(this is for future stuff)</h1>
          </section>
          <SecondaryNavbar />
        </div>
        {children}
      </body>
    </html>
  );
}
