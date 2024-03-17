"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useSession } from "@/app/_providers/session-provider";
import PackageBookingComponent from "@/components/TourPackages/Booking/package-booking";
import { Box } from "@chakra-ui/react";

export default function PackageBookingPage({ params }: { params: { packageId: string } }) {
  const { isAuthSession, isFetching } = useSession();

  const router = useRouter();

  useEffect(() => {
    if (isFetching) return;
    if (!isAuthSession) {
      return router.push("/auth/signin");
    }
  }, [router, isAuthSession, isFetching]);

  return (
    <Box className="flex h-full w-full items-center justify-center">
      <PackageBookingComponent pID={params.packageId} />
    </Box>
  );
}
