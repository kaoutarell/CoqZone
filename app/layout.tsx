// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

// Example: You can import Google Fonts easily with Next.js
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coq Zone",
  description: "Restaurant & Lounge – Welcome to Coq Zone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* 🔝 Navbar could go here if you want it global */}

        {children}

        {/* 🔻 Footer can go here if you want it global */}
      </body>
    </html>
  );
}
