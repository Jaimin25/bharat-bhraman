import type { Metadata } from "next";

import FooterSection from "@/app/_components/Footer/footer";
import HeaderSection from "@/app/_components/Header/header";
import { Providers } from "@/app/_providers/providers";
import { fonts } from "@/app/_utils/fonts";
import { Box } from "@chakra-ui/react";

import "@/app/globals.css";

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
        <Providers>
          <Box className="flex h-full flex-col">
            <HeaderSection />
            <Box className="my-16 flex-1">{children}</Box>
            <FooterSection />
          </Box>
        </Providers>
      </body>
    </html>
  );
}
