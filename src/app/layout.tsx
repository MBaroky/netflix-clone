import type { Metadata } from "next";

// Styles
import "./globals.css";
import { Poppins } from "next/font/google";

// utils
import { GeneralStrings } from "@/utils/constants";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"], // Adjust weights as needed
});

export const metadata: Metadata = {
  title: GeneralStrings.APP_NAME,
  description: GeneralStrings.DESCRIPTION,
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
    <html lang="en" className="custom-scrollbar">
      <body className={`${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
