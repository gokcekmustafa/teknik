import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Profesyonel Teknik | Villa & Daire Teknik Servis",
  description:
    "Villa ve daireleriniz için elektrik, tesisat, otomasyon, yalıtım ve ince işçilik hizmetleri. Sertifikalı usta kadrosu ve yazılı iş garantisi.",
  openGraph: {
    title: "Profesyonel Teknik | Villa & Daire Teknik Servis",
    description:
      "Villa ve daireleriniz için profesyonel teknik servis çözümleri.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
