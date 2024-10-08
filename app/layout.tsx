import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import next from "@/public/next.svg";
import { url } from "inspector";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body className=" bg-body bg-no-repeat bg-cover">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
