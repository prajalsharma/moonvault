"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = [
  { href: "/jobs", label: "Search Jobs" },
  { href: "/companies", label: "Companies" },
];

const SecondaryNavbar = () => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <nav className="flex gap-10">
      {Links.map(({ href, label }) => (
        <Link key={href} href={href} className={`${isActive(href) && "font-bold"} relative`}>
          {label}
          {isActive(href) && <span className="w-full bg-[#1a0c6d] h-0.5 rounded block absolute -bottom-2"></span>}
        </Link>
      ))}
    </nav>
  );
};
export default SecondaryNavbar;
