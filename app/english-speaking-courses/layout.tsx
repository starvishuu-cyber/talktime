import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// Site Metadata
export const metadata: Metadata = {
  title: "TalkTime Spoken English - Best English Speaking Course in Delhi, India",
  description: "Join TalkTime Spoken English, India's top English speaking institute in Delhi. Improve communication, fluency & confidence.",
  keywords: "English speaking course, Spoken English Delhi, Personality development Delhi, Public speaking classes, TalkTime Spoken English",
  openGraph: {
    title: "TalkTime Spoken English",
    description: "Join TalkTime Spoken English, India's top English speaking institute in Delhi.",
    url: "https://talktimespokenenglish.com/",
    images: ["/images/seo-banner.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TalkTime Spoken English",
    description: "Join TalkTime Spoken English, India's top English speaking institute in Delhi.",
    images: ["/images/seo-banner.jpg"],
  },
  icons: { icon: "/favicon.ico", shortcut: "/favicon.ico", apple: "/apple-touch-icon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}>
        {/* Navbar */}
        <header className="w-full fixed z-50 bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-purple-700">TalkTime Spoken English</h1>
            <nav className="space-x-6">
              <a href="/" className="hover:text-purple-600">Home</a>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-8 mt-24">
          {children}
        </main>

        {/* Footer */}
        <footer className="w-full bg-gray-100 mt-auto py-6">
          <div className="max-w-7xl mx-auto px-4 text-center text-gray-700">
            &copy; {new Date().getFullYear()} TalkTime Spoken English. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
