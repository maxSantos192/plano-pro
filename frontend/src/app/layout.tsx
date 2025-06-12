import "./globals.css";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Footer from "./_components/footer";
import Header from "./_components/header";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PlanoPro",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-background flex min-h-screen flex-col antialiased`}
      >
        <AntdRegistry>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </AntdRegistry>
      </body>
    </html>
  );
}
