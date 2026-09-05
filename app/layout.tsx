import "./globals.css";
import type { Metadata } from "next";
import Preloader from "./components/Preloader";

export const metadata: Metadata = {
  title: "Bright Future Foundation of America",
  description:
    "Encourage. Educate. Empower. Bright Future Foundation of America restores dignity, supports education, and inspires communities.",
  icons: { icon: "/logo.png" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body><Preloader />{children}</body>
    </html>
  );
}
