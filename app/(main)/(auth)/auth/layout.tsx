"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { useSession } from "@/app/_providers/session-provider";
import { Box } from "@chakra-ui/react";

export default function RootAuthLayout({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();

  const redirectUrl = searchParams.get("redirect");

  const router = useRouter();
  const { isAuthSession } = useSession();

  useEffect(() => {
    if (isAuthSession) return router.push(redirectUrl ? redirectUrl : "/user/dashboard");
  }, [isAuthSession, router, redirectUrl]);

  return <Box className="flex h-full justify-center bg-black/5 p-4 pt-20">{children}</Box>;
}
