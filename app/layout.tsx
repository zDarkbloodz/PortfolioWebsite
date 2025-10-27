import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eric 'Plnderer' Reyes | Software Engineer & Creative Technologist",
  description: "Full-stack software engineer specializing in AI, web development, and creative technology. Military veteran building the future of tech and culture.",
  keywords: ["Software Engineer", "Full Stack Developer", "AI", "Puerto Rico", "Veteran", "Creative Technology"],
  authors: [{ name: "Eric J. Reyes Rivera" }],
  openGraph: {
    title: "Eric 'Plnderer' Reyes | Software Engineer",
    description: "Full-stack software engineer specializing in AI and creative technology",
    url: "https://ericreyes.dev",
    siteName: "Eric Reyes Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eric 'Plnderer' Reyes | Software Engineer",
    description: "Full-stack software engineer specializing in AI and creative technology",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
