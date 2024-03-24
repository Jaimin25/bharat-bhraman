"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useSession } from "@/src/app/_providers/session-provider";
import { Box } from "@chakra-ui/react";

export default function RootDashboardLayout({ children }: { children: React.ReactNode }) {
  const { isAuthSession } = useSession();

  const router = useRouter();

  useEffect(() => {
    if (!isAuthSession) return router.push("/auth/signin");
  }, [router, isAuthSession]);

  return <Box className="flex h-full justify-center bg-black/5 p-4 pt-20">{children}</Box>;
}
