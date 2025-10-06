import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/authProvider";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Project Stack",
  description: "Collaborate on projects seamlessly with Project Stack.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased bg-background text-foreground border-border outline-ring/50`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}