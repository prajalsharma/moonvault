"use client";

import { cn } from "@/lib/utils";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import SubstackEmbed from "./SubstackEmbed";

const Links = [
  { label: "Blog", href: "https://www.blog.eigenlayer.xyz/" },
  { label: "Discourse", href: "https://forum.eigenlayer.xyz/" },
  { label: "Twitter", href: "https://twitter.com/eigenlayer" },
  { label: "Discord", href: "https://discord.com/invite/eigenlayer" },
  { label: "Research", href: "https://research.eigenlayer.xyz/" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMobile, setIsOpenMobile] = useState(false);

  return (
    <header className="bg-[#1a0c6d] py-5 px-7 md:px-8 fixed w-full z-50">
      <nav className="text-white font-bold flex gap-3 items-center relative justify-between mx-auto">
        <div className="flex items-center gap-3">
          <div className="bg-white p-2">
            <img
              src="https://cdn.prod.website-files.com/64053c5d931f167ecf5997be/6405771ffb64702144b3da4a_el-logo.png"
              alt=""
              className="size-5"
            />
          </div>
          <span className="text-2xl lg:text-3xl">Eigen Jobs</span>
        </div>
        <div className="relative md:hidden">
          <button
            className="flex items-center justify-center z-50"
            onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X size={30} className="text-white" />
            ) : (
              <Menu size={30} className="text-white" />
            )}
          </button>

          <div
            className={cn(
              "absolute text-sm bg-white py-7 text-[#1a0c6d] top-12 h-screen w-screen transition-all duration-500 flex flex-col gap-2",
              isOpen ? "-right-[1.75rem]" : "-right-[72rem]"
            )}>
            <button
              className="w-full flex justify-between px-7 text-base"
              onClick={() => setIsOpenMobile(!isOpenMobile)}>
              <span>Community</span>
              <ChevronDown
                size={20}
                className={`transition-transform ${isOpenMobile ? "-rotate-180" : ""}`}
              />
            </button>
            {isOpenMobile && (
              <div className="relative">
                <ul
                  className={cn(
                    "bg-muted space-y-3 px-9 py-3.5 text-sm absolute top-0 left-0 w-full transition-all duration-500"
                  )}>
                  {Links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="relative hidden md:flex">
          <button
            className={cn(
              "mr-4 text-[#1a0c6d] bg-white transition-colors py-2 px-3 lg:px-7 rounded-lg flex items-center text-sm hover:bg-[#eaf2ff]",
              isOpen && "bg-[#eaf2ff]"
            )}
            onClick={() => setIsOpen(!isOpen)}>
            <span>Join Community</span>
          </button>
          {isOpen && (
            <div className="absolute w-[35%] text-sm bg-white p-4 text-[#1a0c6d] rounded-md drop-shadow-lg space-y-6 top-12 -left-1">
              {Links.map((link) => (
                <Link key={link.label} href={link.href} className="hover:underline block">
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
          )}
          <SubstackEmbed />
        </div>
      </nav>
    </header>
  );
};
export default Header;
