import { Box } from "@chakra-ui/react";

import TourPackageCard from "../Cards/tour-package-card";

export default function PackagesList() {
  return (
    <Box className="grid h-full flex-1 grid-cols-2 gap-4">
      <TourPackageCard
        images={[
          "https://upload.wikimedia.org/wikipedia/commons/9/90/Gir_lion-Gir_forest%2Cjunagadh%2Cgujarat%2Cindia.jpeg",
          "https://upload.wikimedia.org/wikipedia/commons/1/10/Somanath_mandir_%28cropped%29.jpg",
        ]}
      />
      <TourPackageCard
        images={[
          "https://upload.wikimedia.org/wikipedia/commons/1/13/Amber_palace%2C_Jaipur.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/0/09/Thar_Khuri.jpg",
        ]}
      />
      <TourPackageCard
        images={[
          "https://upload.wikimedia.org/wikipedia/commons/a/ae/Temi_tea_garden.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/d/d1/Gurudongmar.Lake.jpg",
        ]}
      />
      <TourPackageCard
        images={[
          "https://upload.wikimedia.org/wikipedia/commons/a/ad/Munnar_hillstation_kerala.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/c/c0/Athirapally_Waterfalls_after_the_Monsoons.jpg",
        ]}
      />
    </Box>
  );
}
