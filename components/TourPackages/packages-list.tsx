import { Box } from "@chakra-ui/react";
import { Package } from "@prisma/client";

import TourPackageCard from "../Cards/tour-package-card";

export default function PackagesList({ packages }: { packages: Package[] }) {
  return (
    <Box className="grid h-full flex-1 grid-cols-1 gap-4 md:grid-cols-2">
      {packages.map((item, index) => (
        <Box key={index}>
          <TourPackageCard
            pID={item.pID}
            title={item.packageTitle}
            locations={item.locations}
            duration={item.duration}
            price={item.price}
            images={[item.images[Math.floor(Math.random() * item.images.length)]]}
          />
        </Box>
      ))}
    </Box>
  );
}
