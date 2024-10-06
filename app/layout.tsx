import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import SecondaryNavbar from "@/components/SecondaryNavbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import ScrollIntoViewButton from "@/components/ScrollIntoViewButton";

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
          <div className="pattern">
            <section className="main-section relative h-[60vh] flex flex-col justify-center text-sm sm:text-base px-7 pt-28 items-start gap-3 md:text-center md:items-center">
              <div className="sm:max-w-[35rem] md:max-w-[40rem] mb-8 md:mb-28">
                <h1 className="font-bold text-4xl block text-[#1a0c6d] pb-2">EigenJobs</h1>
                <p>
                  is a community initiative built with the support of the{" "}
                  <span className="font-bold text-[#1a0c6d]">EigenLayer team,</span> dedicated to
                  helping founders connect with top talent and builders find good opportunities
                  within the <span className="font-bold text-[#1a0c6d]">EigenLayer ecosystem.</span>
                </p>
              </div>
            </section>
            <SecondaryNavbar />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
