import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Site Metadata
export const metadata: Metadata = {
  title: "TalkTime Spoken English - Best English Speaking Course in Delhi",
  description: "Join TalkTime Spoken English to speak English confidently. Interactive courses, expert trainers, and personality development classes in Delhi.",
  keywords: "English speaking course, Spoken English Delhi, Public speaking Delhi, Personality development, TalkTime Spoken English, talktime", 
  authors: [{ name: "TalkTime Spoken English", url: "https://talktimespokenenglish.com" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#6B46C1", // Violet color
  openGraph: {
    title: "TalkTime Spoken English - Best English Speaking Course in Delhi",
    description: "Join TalkTime Spoken English to speak English confidently. Interactive courses, expert trainers, and personality development classes in Delhi.",
    url: "https://talktimespokenenglish.com",
    siteName: "TalkTime Spoken English",
    images: [
      {
        url: "/talktimelogo.png",
        width: 1200,
        height: 630,
        alt: "TalkTime Spoken English English Course Banner",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TalkTime Spoken English - Best English Speaking Course in Delhi",
    description: "Join TalkTime Spoken English to speak English confidently. Interactive courses, expert trainers, and personality development classes in Delhi.",
    images: ["talktimelogo.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
