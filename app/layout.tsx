import type { Metadata } from "next";

import { Providers } from "./_providers/providers";
import { fonts } from "./_utils/fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: "Bharat Bhraman",
  description: "Tour packages to travel across India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={fonts.rubik.variable}
    >
      <body className={fonts.rubik.variable}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
