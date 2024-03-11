"use client";

import { redirect } from "next/navigation";

import { useSession } from "@/app/_providers/session-provider";
import { Box } from "@chakra-ui/react";

export default function RootDashboardLayout({ children }: { children: React.ReactNode }) {
  const { sessionUser } = useSession();

  if (!sessionUser) return redirect("/auth/signin");

  return <Box className="mt-14 flex h-full justify-center bg-black/5 p-4">{children}</Box>;
}
