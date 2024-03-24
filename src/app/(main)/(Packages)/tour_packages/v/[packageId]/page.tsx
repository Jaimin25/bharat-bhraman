import TourPackageDetailsComponent from "@/src/components/TourPackages/Details/tour-packages-details";
import { Box } from "@chakra-ui/react";

export default function PackageDetailsPage({ params }: { params: { packageId: string } }) {
  return (
    <Box className="h-full w-full">
      <TourPackageDetailsComponent pID={params.packageId} />
    </Box>
  );
}
