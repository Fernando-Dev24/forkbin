import { Inter, IBM_Plex_Mono, Outfit, Cascadia_Code } from "next/font/google";

export const mainFont = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["600", "500", "400", "300"],
});

export const serifFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["600", "500", "400", "300"],
});

export const monoFont = IBM_Plex_Mono({
  variable: "--font-ibm",
  subsets: ["latin"],
  weight: ["600", "500", "400", "300"],
});
