"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { GiMoonBats } from "react-icons/gi";
import { PiSunHorizonBold } from "react-icons/pi";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by only rendering after mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    if (theme === "system") {
      // If currently using system theme, switch to the opposite of the resolved theme
      setTheme(resolvedTheme === "dark" ? "light" : "dark");
    } else {
      // If user has manually set a theme, toggle between light and dark
      setTheme(theme === "dark" ? "light" : "dark");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="text-black/30 dark:text-white/30 hover:text-black/50 dark:hover:text-white/50 transition-colors focus:outline-none p-0 bg-transparent text-right"
      aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ? (
        <GiMoonBats className="inline w-4 h-4" />
      ) : (
        <PiSunHorizonBold className="inline w-4 h-4" />
      )}
    </button>
  );
}
