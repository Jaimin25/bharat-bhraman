import { Box } from "@chakra-ui/react";

export default function RootAuthLayout({ children }: { children: React.ReactNode }) {
  return <Box className="mt-14 flex h-full justify-center bg-black/5 p-4">{children}</Box>;
}
