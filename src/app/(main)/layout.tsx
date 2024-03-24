import { Suspense } from "react";
import type { Metadata } from "next";

import { Providers } from "@/src/app/_providers/providers";
import { fonts } from "@/src/app/_utils/fonts";
import FooterSection from "@/src/components/Footer/footer";
import HeaderSection from "@/src/components/Header/header";
import { Box } from "@chakra-ui/react";

import "@/src/app/globals.css";

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
