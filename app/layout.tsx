import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "জাতীয় পরিচয় পত্র নিবন্ধন ফরম / National Identity Card Registration Form",
  description: "National Identity Card Registration Form for Bangladesh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
