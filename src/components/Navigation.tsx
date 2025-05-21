// src/app/components/Navigation.tsx
"use client";

import { pages } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

export function Navigation() {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-4 text-right">
      <nav className="flex flex-row md:flex-col gap-3 md:gap-2 text-lg text-right">
        {pages.map(({ path, title }) => {
          const isActive = pathname === path;
          return (
            <Link
              key={path}
              href={path}
              className={
                isActive
                  ? "font-medium dark:text-white text-right"
                  : "text-black/30 dark:text-white/30 hover:text-black/50 dark:hover:text-white/50 transition-colors text-right"
              }
            >
              {title}
            </Link>
          );
        })}
        <ThemeToggle />
      </nav>
    </div>
  );
}
