import { Toaster } from "@/components/ui/toaster";
import "@fontsource/inter"
import type { Metadata } from "next";
import "./globals.css";
import { NewsProvider } from "./admin/context/news.context";

export const metadata: Metadata = {
  title: "Betar US: Zionist Movement of Ze’ev Jabotinsky",
  description: "Betar is a Zionist youth movement founded in 1923 in Riga, Latvia, by Vladimir (Ze'ev) Jabotinsky.",
  icons: {
    icon: "/Betar-Favicon.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans`}
      >
        <NewsProvider>
          {children}
          <Toaster />
        </NewsProvider>
      </body>
    </html>
  );
}
