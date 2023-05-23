import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const title = "ByForUs: Create Daily Impact with Just ₹1!";
const description =
  "Join Our Passionate Community of Changemakers and Create Daily Impact with Just ₹1!";

export const metadata = {
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    images: "/logo.svg",
    title,
    description,
    url: "https://byforus.org",
    type: "website",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}
