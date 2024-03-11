"use client";

import SessionProvider from "@/app/_providers/session-provider";
import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "../_utils/theme";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </SessionProvider>
  );
}
