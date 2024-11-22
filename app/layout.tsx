import { ModeToggle } from "@/components/ui/mode-toggle";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next Auth - Workshop",
  description: "Workshop sobre autenticação no Next.js",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning={true}>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased  relative",
          inter.className
        )}
      >
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <div className="absolute top-5 right-5">
              <ModeToggle />
            </div>

            {children}
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
