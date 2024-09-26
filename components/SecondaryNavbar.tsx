"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = [
  { href: "/jobs", label: "Search Jobs" },
  {
    href: "https://docs.google.com/forms/d/e/1FAIpQLSeVUwPQ2nNemq8pXbxs5nKmxi4hsSDHkcpWU3hJjcPUx7l_Jw/viewform",
    label: "Add Jobs",
  },
];

const SecondaryNavbar = () => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <nav className="bg-[#f7fafc] -mt-1 px-7 md:px-12 border-b pt-4 pb-2 drop-shadow-sm ">
      <div className="flex gap-10 max-w-[70.75rem] mx-auto">
        {Links.map(({ href, label }) => (
          <Link key={href} href={href} className={`${isActive(href) && "font-bold"} relative`}>
            {label}
            {isActive(href) && (
              <span className="w-full bg-[#1a0c6d] h-0.5 rounded block absolute -bottom-2"></span>
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
};
export default SecondaryNavbar;
