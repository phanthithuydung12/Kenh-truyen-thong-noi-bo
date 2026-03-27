import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VB Portal - Kênh Thông Tin Nội Bộ Vietbank",
  description: "Internal VB Portal - Kênh Thông Tin Nội Bộ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${manrope.variable} bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}
