import type { Metadata } from "next";

// Styles
import "./globals.css";
import { Poppins } from "next/font/google";

// utils
import { GeneralStrings } from "@/utils/constants";
import Script from "next/script";

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
      <head>
        {/* Google IMA SDK - essential for ads */}
        <Script
          src="//imasdk.googleapis.com/js/sdkloader/ima3.js"
          strategy="beforeInteractive" // Load before React hydration
          id="google-ima-sdk"
        />
        {/* Core Shaka Player Library */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/shaka-player/4.3.0/shaka-player.compiled.js" // Check for latest version or use local path
          strategy="beforeInteractive" // Load before React hydration
          id="shaka-player-core"
        />
        {/* Shaka Player UI Library - MUST load AFTER core */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/shaka-player/4.3.0/shaka-player.ui.js" // Make sure version matches and loads after compiled.js
          strategy="beforeInteractive" // Keep the same strategy
          id="shaka-player-ui"
        />
        {/* >>> NEW: Shaka Player Ads Library - MUST load AFTER core <<< */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/shaka-player/4.3.0/shaka-player.ads.js" // Ensure version matches and loads after compiled.js
          strategy="beforeInteractive"
          id="shaka-player-ads"
        />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
