import GitHubButtons from "@/components/github-buttons";
import { ThemeToggle } from "@/components/theme-toggle";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import type React from "react";
import Logo from "./musicbrainz-api-logo.png";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} cz-shortcut-listen="true">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen bg-background">
            <header className="border-b">
              <div className="container mx-auto flex items-center gap-8 py-4">
                <div className="flex items-center gap-8">
                  <Link href="/" className="flex items-center gap-2">
                    <Image
                      src={Logo}
                      alt="MusicBrainz API Demo"
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <span className="text-xl font-bold">
                      MusicBrainz API Demo
                    </span>
                  </Link>
                  <nav className="flex gap-4">
                    <Link href="/server" className="hover:text-primary">
                      Server-side
                    </Link>
                    <Link href="/client" className="hover:text-primary">
                      Client-side
                    </Link>
                  </nav>
                </div>
                <div className="flex-1" />
                <GitHubButtons />
                <ThemeToggle />
              </div>
            </header>
            <main className="container mx-auto py-8">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
