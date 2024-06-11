import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Velvety facial and skincare",
  description: "Generated by create next app",
};

const ivymodeLight = localFont({
  src: "./IvyMode-Light.woff2",
  variable: "--font-ivymodeLight",
});

const ailregular = localFont({
  src: "./Aileron-Regular.woff2",
  variable: "--font-ailregular",
});

const aillight = localFont({
  src: "./Aileron-Light.woff2",
  variable: "--font-aillight",
});
const aillightitalic = localFont({
  src: "./Aileron-LightItalic.woff2",
  variable: "--font-aillightitalic",
});

const ailbold = localFont({
  src: "./Aileron-Bold.woff2",
  variable: "--font-ailbold",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ivymodeLight.variable} ${ailregular.variable} ${aillight.variable} ${ailbold.variable} ${aillightitalic}`}
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
