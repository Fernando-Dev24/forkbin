import type { Metadata } from "next";
import { mainFont } from "../fonts/fonts";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Forkbin",
  description: "Forkbin: Mock now, use it anywhere",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${mainFont.className} ${mainFont.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
