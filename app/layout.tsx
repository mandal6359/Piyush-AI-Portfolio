import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Piyush Mandal | AI & ML Developer",
  description: "AI/ML Developer, Data Scientist & Cloud Enthusiast. Building intelligent systems that solve real-world problems.",
  keywords: ["AI", "Machine Learning", "Data Science", "Python", "Portfolio"],
  openGraph: {
    title: "Piyush Mandal | AI & ML Developer",
    description: "AI/ML Developer building intelligent systems",
    images: ["/piyush.jpeg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
