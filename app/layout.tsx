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
          <div>
            <section className="main-section h-screen flex flex-col justify-center bg-[#eaf2ff] text-sm sm:text-base px-7 items-start gap-3 md:text-center md:items-center">
              <h1 className="sm:max-w-[35rem] md:max-w-[40rem]">
                <span className="font-bold text-4xl block text-[#1a0c6d] pb-2">EigenJobs</span> is a
                community initiative built with the support of the{" "}
                <span className="font-bold text-[#1a0c6d]">EigenLayer team,</span> dedicated to
                helping founders connect with top talent and builders find good opportunities within
                the <span className="font-bold text-[#1a0c6d]">EigenLayer ecosystem.</span>
              </h1>
              <ScrollIntoViewButton />
            </section>
            <SecondaryNavbar />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
