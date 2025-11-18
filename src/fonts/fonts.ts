import { Inter, Outfit } from "next/font/google";

export const mainFont = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["600", "500", "400", "300"],
});

export const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["700"],
});
