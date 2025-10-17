import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// Page-specific Metadata
export const metadata: Metadata = {
  title: "English Speaking Courses in Delhi - TalkTime Spoken English",
  description: "Join TalkTime Spoken English courses in Delhi. Improve fluency, communication, and confidence with interactive classes and expert trainers.",
  keywords: "English speaking course, Spoken English Delhi, Personality development Delhi, Public speaking classes, TalkTime Spoken English",
  openGraph: {
    title: "English Speaking Courses in Delhi",
    description: "Join TalkTime Spoken English courses in Delhi and improve your communication skills.",
    url: "https://talktimespokenenglish.com/english-courses",
    images: ["/images/seo-banner.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "English Speaking Courses in Delhi",
    description: "Join TalkTime Spoken English courses in Delhi and improve your communication skills.",
    images: ["/images/seo-banner.jpg"],
  },
  icons: { icon: "/favicon.ico", shortcut: "/favicon.ico", apple: "/apple-touch-icon.png" },
};

export default function EnglishCoursesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}>
      {/* Navbar (can be reused from root layout or customized) */}
      <header className="w-full sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-purple-700">TalkTime Spoken English</h1>
          <nav className="space-x-6">
            <a href="/" className="hover:text-purple-600">Home</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
        {children}
      {/* Footer */}
      <footer className="w-full bg-gray-100 mt-auto py-6">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-700">
          &copy; {new Date().getFullYear()} TalkTime Spoken English. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
