import "@/app/globals.css";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeLogo } from "@/components/ThemeLogo";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Osman Sultan",
    default: "Osman Sultan",
  },
  description: "My personal website (づ ◕‿◕ )づ",
  metadataBase: new URL("http://localhost:3000"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${ibmPlexMono.variable} font-mono antialiased bg-background text-foreground`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {" "}
          <div className="flex flex-col justify-center w-full md:max-w-3xl mx-auto gap-8 mt-[8vh] p-4">
            {/* Logo */}
            <ThemeLogo />

            <div className="flex flex-col md:flex-row gap-5">
              {/* Navigation wrapper */}
              <div className="md:w-1/7">
                <Navigation />
              </div>

              <div className="md:w-4/5 body">
                {children}
                <SpeedInsights />
                <Footer />
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
