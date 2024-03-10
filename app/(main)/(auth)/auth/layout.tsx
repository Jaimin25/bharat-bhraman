import { Box } from "@chakra-ui/react";

export default function RootAuthLayout({ children }: { children: React.ReactNode }) {
  return <Box className="mt-16">test{children}</Box>;
}
