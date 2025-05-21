"use client";

export function Url({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="link ml-2"
    >
      {children}
    </a>
  );
}
