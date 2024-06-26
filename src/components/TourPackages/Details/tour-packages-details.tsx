"use client";

import useFetchDetails from "@/src/app/_hooks/useFetchDetails";
import BookSectionSkeleton from "@/src/components/Skeleton/PackageDetails/book-section-skeleton";
import DetailsSectionSkeleton from "@/src/components/Skeleton/PackageDetails/details-section-skeleton";
import ReviewSectionSkeleton from "@/src/components/Skeleton/PackageDetails/review-section-skeleton";
import { Box } from "@chakra-ui/react";
import { Package } from "@prisma/client";

import BookPackageSection from "./Sections/book-package-section";
import PackageDetailsSection from "./Sections/package-details-section";
import PackageReviewSection from "./Sections/package-review-section";

export default function TourPackageDetailsComponent({ pID }: { pID: string }) {
  const { resData, isFetchingDetails } = useFetchDetails<Package>("/api/tour_packages/details", [
    {
      key: "pID",
      value: pID,
    },
  ]);

  if (isFetchingDetails)
    return (
      <Box className="grid h-full w-full grid-cols-1 gap-4 lg:grid-cols-3">
        <DetailsSectionSkeleton />
        <Box className="cols-span-1 grid gap-4">
          <BookSectionSkeleton />
          <ReviewSectionSkeleton />
        </Box>
      </Box>
    );

  return (
    <Box className="grid h-full w-full grid-cols-1 gap-4 lg:grid-cols-3">
      <PackageDetailsSection packageDetails={resData as Package} />
      <Box className="cols-span-1 grid gap-4">
        <BookPackageSection
          pID={(resData as Package).pID}
          amount={(resData as Package).price}
          duration={(resData as Package).duration}
          location={(resData as Package).locations}
        />
        <PackageReviewSection />
      </Box>
    </Box>
  );
}
