import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";

import { Header } from "~/components/Header";

import "./style/globals.css";

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Tiago Araujo personal website",
  description: "Blog and profissional informatios",
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head></head>
      <body
        className={`${space_grotesk.variable} overflow-x-hidden scroll-smooth bg-gray-950`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
