import { Box } from "@chakra-ui/react";

import TourPackageCard from "../Cards/tour-package-card";

export default function PackagesList() {
  return (
    <Box className="grid h-full flex-1 grid-cols-2 gap-4">
      <TourPackageCard />
      <TourPackageCard />
      <TourPackageCard />
      <TourPackageCard />
      <TourPackageCard />
      <TourPackageCard />
      <TourPackageCard />
      <TourPackageCard />
    </Box>
  );
}
