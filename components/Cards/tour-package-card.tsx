import { Box, Card, CardBody, Stack, Text } from "@chakra-ui/react";

import { PackagesImageSlider } from "../TourPackages/packages-images-slider";

export default function TourPackageCard() {
  return (
    <Card>
      <CardBody>
        <Stack className="h-auto">
          <Box className="aspect-video">
            <PackagesImageSlider
              images={[
                "https://upload.wikimedia.org/wikipedia/commons/9/90/Gir_lion-Gir_forest%2Cjunagadh%2Cgujarat%2Cindia.jpeg",
                "https://upload.wikimedia.org/wikipedia/commons/1/10/Somanath_mandir_%28cropped%29.jpg",
              ]}
              overlay={false}
            >
              {" "}
            </PackagesImageSlider>
          </Box>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sequi distinctio mollitia excepturi impedit
            assumenda velit quod. Nostrum, accusamus nisi porro eos eveniet quas beatae aliquam quos omnis doloribus
            dolore.
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
}
