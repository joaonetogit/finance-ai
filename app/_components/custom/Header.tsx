"use client";

import { NAV_MENU_ITEMS } from "@/app/_constants/navMenuItems";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between border-b border-solid px-8 py-4">
      <div className="flex items-center gap-10">
        <Image src="/logo.svg" alt="Finance AI Logo" width={173} height={39} />
        <nav className="flex items-center gap-10">
          {NAV_MENU_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                pathname === item.href
                  ? "font-bold text-primary"
                  : "text-muted-foreground"
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <UserButton showName />
    </header>
  );
};

export default Header;
