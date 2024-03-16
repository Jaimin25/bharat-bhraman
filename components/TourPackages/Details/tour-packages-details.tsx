"use client";

import useFetchDetails from "@/app/_hooks/useFetchDetails";
import { Box } from "@chakra-ui/react";
import { Package } from "@prisma/client";

import BookPackageSection from "./Sections/book-package-section";
import PackageDetailsSection from "./Sections/package-details-section";
import PackageReviewSection from "./Sections/package-review-section";

export default function TourPackageDetailsComponent({ pID }: { pID: string }) {
  const { resData, isFetching } = useFetchDetails<Package>("/api/tour_packages/details", pID);

  if (isFetching) return;

  return (
    <Box className="grid h-full w-full grid-cols-1 gap-4 lg:grid-cols-3">
      <PackageDetailsSection packageDetails={resData as Package} />
      <Box className="cols-span-1 grid gap-4">
        <BookPackageSection />
        <PackageReviewSection />
      </Box>
    </Box>
  );
}
