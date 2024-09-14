"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = [
  { href: "/jobs", label: "Search Jobs" },
  { href: "/addJobs", label: "Add Jobs" },
];

const SecondaryNavbar = () => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <nav className="flex gap-10 bg-[#f7fafc] -mt-1 px-7 md:px-12 border-b pt-4 pb-2 drop-shadow-sm">
      {Links.map(({ href, label }) => (
        <Link key={href} href={href} className={`${isActive(href) && "font-bold"} relative`}>
          {label}
          {isActive(href) && (
            <span className="w-full bg-[#1a0c6d] h-0.5 rounded block absolute -bottom-2"></span>
          )}
        </Link>
      ))}
    </nav>
  );
};
export default SecondaryNavbar;
