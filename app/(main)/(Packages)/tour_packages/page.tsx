"use client";

import { useState } from "react";

import useFetchDetails from "@/app/_hooks/useFetchDetails";
import usePackagesFilter from "@/app/_hooks/usePackagesFilter";
import PackageCardSkeleton from "@/components/Skeleton/package-card-skeleton";
import PackagesList from "@/components/TourPackages/packages-list";
import TourPackgesSidebar from "@/components/TourPackages/sidebar";
import { Box } from "@chakra-ui/react";
import { Package } from "@prisma/client";

export default function TourPackges() {
  const { isFetchingDetails, resData } = useFetchDetails<Package[]>("/api/tour_packages", [{ key: "", value: "" }]);

  const [query, setQuery] = useState<string>("");

  const { filteredList } = usePackagesFilter(query, resData as Package[]);

  if (isFetchingDetails) {
    return (
      <Box className="flex h-auto w-full flex-col gap-4 lg:flex-row lg:gap-0 lg:space-x-4">
        <TourPackgesSidebar setQuery={null} />
        <Box className="grid h-full flex-1 grid-cols-1 gap-4 md:grid-cols-2">
          <PackageCardSkeleton />
          <PackageCardSkeleton />
        </Box>
      </Box>
    );
  }

  return (
    <Box className="flex h-auto w-full flex-col gap-4 lg:flex-row lg:gap-0 lg:space-x-4">
      <TourPackgesSidebar setQuery={setQuery} />
      <PackagesList packages={filteredList ? filteredList : (resData as Package[])} />
    </Box>
  );
}
