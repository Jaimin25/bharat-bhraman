"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useSession } from "@/app/_providers/session-provider";
import UserDashboardSkeleton from "@/components/Skeleton/user-dashboard-skeleton";
import { Box } from "@chakra-ui/react";

export default function RootDashboardLayout({ children }: { children: React.ReactNode }) {
  const { isAuthSession, isFetching } = useSession();

  const router = useRouter();

  useEffect(() => {
    if (!isAuthSession) return router.push("/auth/signin");
  }, [router, isAuthSession]);

  if (isFetching) {
    return (
      <Box className="flex h-full justify-center bg-black/5 p-4">
        <UserDashboardSkeleton />
      </Box>
    );
  }

  return <Box className="flex h-full justify-center bg-black/5 p-4">{children}</Box>;
}
