import { Box } from "@chakra-ui/react";

import BookPackageSection from "./Sections/book-package-section";
import PackageDetailsSection from "./Sections/package-details-section";
import PackageReviewSection from "./Sections/package-review-section";

export default function TourPackageDetailsComponent() {
  return (
    <Box className="grid h-full w-full grid-cols-3 gap-4">
      <PackageDetailsSection
        images={[
          "https://upload.wikimedia.org/wikipedia/commons/1/13/Amber_palace%2C_Jaipur.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/0/09/Thar_Khuri.jpg",
        ]}
      />
      <Box className="cols-span-1 grid gap-4">
        <BookPackageSection />
        <PackageReviewSection />
      </Box>
    </Box>
  );
}
