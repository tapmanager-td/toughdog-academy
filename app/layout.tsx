import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ToughDog Knowledge Hub",
  description: "Knowledge base, training, and support for ToughDog Security Systems partners.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-zinc-950 text-zinc-100">
        {children}
      </body>
    </html>
  );
}