import FeatureSection from "@/src/components/Home/FeatureSection/feature-section";
import HeroSection from "@/src/components/Home/HeroSection/hero-section";
import { Box } from "@chakra-ui/react";

export default function HomePage() {
  return (
    <Box>
      <Box className="hero">
        <HeroSection />
      </Box>
      <Box className="feature-section">
        <FeatureSection />
      </Box>
    </Box>
  );
}
