import "~/styles/globals.css";
import "@uploadthing/react/styles.css";

import { ClerkProvider } from '@clerk/nextjs';
import { TopNav } from "./_components/topnav";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery App",
  description: "Mini project tutorial with my own additions",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className={`flex flex-col gap-4`}>
        <TopNav />
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
