import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import SecondaryNavbar from "@/components/SecondaryNavbar";
import { ThemeProvider } from "@/components/ThemeProvider";

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${plus_jakarata_sans.className}`}>
        <ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange>
          <Header />
          <div>
            <section className="main-section h-screen flex justify-center items-center bg-[#eaf2ff]">
              <h1 className="text-xl md:text-4xl font-bold">EigenJobs is a community initiative built with the support of the EigenLayer team, dedicated to helping founders connect with top talent and builders find good opportunities within the EigenLayer ecosystem</h1>
            </section>
            <SecondaryNavbar />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
