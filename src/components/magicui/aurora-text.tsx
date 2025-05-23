"use client";

import React, { memo } from "react";

interface AuroraTextProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  speed?: number;
}

export const AuroraText = memo(
  ({
    children,
    className = "",
    colors = ["#2D6A4F", "#40916C", "#52B788", "#38A169", "#2F855A"],
    speed = 1,
  }: AuroraTextProps) => {
    // Use useEffect and useState to track dark mode
    const [isDarkMode, setIsDarkMode] = React.useState(false);

    React.useEffect(() => {
      // Check if document is available (client side only)
      if (typeof document !== "undefined") {
        // Initial check
        setIsDarkMode(document.documentElement.classList.contains("dark"));

        // Set up observer to watch for class changes on html element
        const observer = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            if (mutation.attributeName === "class") {
              setIsDarkMode(
                document.documentElement.classList.contains("dark")
              );
            }
          });
        });

        observer.observe(document.documentElement, { attributes: true });

        return () => observer.disconnect();
      }
    }, []);

    const gradientStyle = {
      backgroundImage: `linear-gradient(135deg, ${colors.join(", ")}, ${
        colors[0]
      })`,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      WebkitTextStroke: isDarkMode
        ? "1px rgba(255, 255, 255, 0.4)"
        : "1px rgba(0, 0, 0, 0.4)",
      animationDuration: `${10 / speed}s`,
    };

    return (
      <span
        className={`relative inline-block ${className}`}
        style={{ padding: "0.1em" }}
      >
        <span className="sr-only">{children}</span>
        <span
          className="relative animate-aurora bg-[length:200%_auto] bg-clip-text text-transparent"
          style={{
            ...gradientStyle,
            display: "block",
            padding: "0.25em 0.5em",
            lineHeight: "1.5",
            boxDecorationBreak: "clone",
            marginTop: "-0.25em", // Offset the top padding
            marginBottom: "-0.25em", // Offset the bottom padding
          }}
          aria-hidden="true"
        >
          {children}
        </span>
      </span>
    );
  }
);

AuroraText.displayName = "AuroraText";
