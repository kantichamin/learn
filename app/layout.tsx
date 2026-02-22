import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "กันติชา ไชยชนะ | โปรไฟล์",
  description:
    "เว็บไซต์โปรไฟล์ส่วนตัวของกันติชา ไชยชนะ (ซีแกรม) นักศึกษาคณะวิศวกรรมศาสตร์ สาขาคอมพิวเตอร์ มหาวิทยาลัยเชียงใหม่",
  openGraph: {
    title: "กันติชา ไชยชนะ | โปรไฟล์",
    description:
      "เว็บไซต์โปรไฟล์ส่วนตัวของกันติชา ไชยชนะ (ซีแกรม) นักศึกษาคณะวิศวกรรมศาสตร์ สาขาคอมพิวเตอร์ มหาวิทยาลัยเชียงใหม่",
    type: "profile",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" suppressHydrationWarning>
      <body className={`${kanit.variable} antialiased`} suppressHydrationWarning>{children}</body>
    </html>
  );
}
