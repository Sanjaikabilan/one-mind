import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/providers/next-theme-provider";
import CursorCircle from "@/components/CursorCircle";

const DM_Font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "One Mind",
  description: "The perfect portfolio you have ever seen!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={DM_Font.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <CursorCircle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
