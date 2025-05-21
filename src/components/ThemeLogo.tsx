"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export function ThemeLogo() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by only rendering after mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Image
        src="/logo-light.svg"
        alt="logo"
        width={150}
        height={50}
        className="w-[150px] md:w-1/5 px-6"
        priority
      />
    );
  }
  const logoSrc =
    theme === "dark" || resolvedTheme === "dark"
      ? "/logo-dark.svg"
      : "/logo-light.svg";
  return (
    <Image
      src={logoSrc}
      alt="logo"
      width={150}
      height={50}
      className={`w-[150px] md:w-1/5 px-6 ${
        theme === "dark" || resolvedTheme === "dark"
          ? "invert opacity-80 brightness-95"
          : ""
      }`}
      priority
    />
  );
}
