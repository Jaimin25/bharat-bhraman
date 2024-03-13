"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useSession } from "@/app/_providers/session-provider";
import { Box } from "@chakra-ui/react";

export default function RootAuthLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { isAuthSession } = useSession();

  useEffect(() => {
    if (isAuthSession) return router.push("/user/dashboard");
  }, [isAuthSession, router]);

  return <Box className="flex h-full justify-center bg-black/5 p-4">{children}</Box>;
}
