"use client";

import SessionProvider from "@/app/_providers/session-provider";
import ToastProvider from "@/app/_providers/toast-provider";
import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "../_utils/theme";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider
      theme={theme}
      toastOptions={{ defaultOptions: { position: "top-right" } }}
    >
      <ToastProvider>
        <SessionProvider>{children}</SessionProvider>
      </ToastProvider>
    </ChakraProvider>
  );
}
