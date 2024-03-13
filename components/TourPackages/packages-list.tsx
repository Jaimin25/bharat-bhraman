import { Box } from "@chakra-ui/react";

import TourPackageCard from "../Cards/tour-package-card";

export default function PackagesList() {
  return (
    <Box className="grid grid-cols-3 gap-4">
      <TourPackageCard />
      <TourPackageCard />
    </Box>
  );
}
