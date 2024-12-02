import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { ClerkProvider } from "@clerk/nextjs";

const cutiveMono = localFont({
  src: "./fonts/CutiveMono-Regular.ttf",
  variable: "--font-cutive-mono",
  weight: "100 400 700 900",
});

export const metadata: Metadata = {
  title: "Bill's Coffee Julekalender",
  description:
    "Hyggeligt sted i Vestergade, hvor man kan koble af en halv times tid.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon-dark.ico",
        href: "/favicon-dark.ico",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon-light.ico",
        href: "/favicon-light.ico",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${cutiveMono.variable} font-mono min-h-screen bg-background antialiased`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
