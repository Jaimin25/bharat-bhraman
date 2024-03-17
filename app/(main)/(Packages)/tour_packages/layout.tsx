import { Box } from "@chakra-ui/react";

export default function RootDashboardLayout({ children }: { children: React.ReactNode }) {
  return <Box className="flex h-full justify-center bg-black/5 p-4">{children}</Box>;
}
