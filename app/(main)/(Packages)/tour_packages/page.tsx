import PackagesList from "@/components/TourPackages/packages-list";
import TourPackgesSidebar from "@/components/TourPackages/sidebar";
import { Box } from "@chakra-ui/react";

export default function TourPackges() {
  return (
    <Box className="flex h-auto w-full space-x-4">
      <TourPackgesSidebar />
      <PackagesList />
    </Box>
  );
}
