import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BitCamp24",
  description: "BitCamp24 project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <div className="z-20 relative">
          <NavBar />
        </div>
        <div className="z-0">
          {children}
        </div>
      </body>
    </html >
  );
}
