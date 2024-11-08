"use client";

import { NAV_MENU_ITEMS } from "@/app/_constants/navMenuItems";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavMenu = () => {
  const pathname = usePathname();

  return (
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
  );
};

export default NavMenu;
