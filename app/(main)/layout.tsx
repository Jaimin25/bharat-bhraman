import { Suspense } from "react";
import type { Metadata } from "next";

import HeaderSection from "@//components/Header/header";
import { Providers } from "@/app/_providers/providers";
import { fonts } from "@/app/_utils/fonts";
import FooterSection from "@/components/Footer/footer";
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
            <Suspense>
              <Box className="flex-1">{children}</Box>
            </Suspense>
            <FooterSection />
          </Box>
        </Providers>
      </body>
    </html>
  );
}
