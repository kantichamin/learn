import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import Navbar from "./components/navbar";
import "./globals.css";

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "LearnDev — คู่มือสายอาชีพ Software Development",
    template: "%s | LearnDev",
  },
  description:
    "แหล่งเรียนรู้สายอาชีพ Software Development สำหรับนักศึกษา — PO, PM, BA, SA, Dev, DevOps, Designer, Data Engineer, AI Engineer",
  openGraph: {
    title: "LearnDev — คู่มือสายอาชีพ Software Development",
    description:
      "แหล่งเรียนรู้สายอาชีพ Software Development สำหรับนักศึกษา",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" suppressHydrationWarning>
      <body className={`${kanit.variable} antialiased`} suppressHydrationWarning>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
