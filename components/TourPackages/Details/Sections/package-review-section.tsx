import { FaStar } from "react-icons/fa6";

import { Avatar, Box, Card, CardBody, Heading, Stack, Text } from "@chakra-ui/react";

export default function PackageReviewSection() {
  return (
    <Box>
      <Card>
        <CardBody>
          <Box className="space-y-4">
            <Heading
              size="md"
              className="flex items-center justify-between gap-2"
            >
              <Text>Reviews</Text>
              <Box className="flex items-center gap-1">
                <Text>4.0/5</Text>
                <FaStar className="h-4 w-4 text-amber-500" />
              </Box>
            </Heading>
            <Box>
              <Stack>
                <Box className="flex items-center gap-2">
                  <Box>
                    <Avatar size="sm"></Avatar>
                  </Box>
                  <Box className="flex-1">
                    <Text className="font-semibold">ABC</Text>
                    <Text>&quot;Good&quot;</Text>
                  </Box>
                  <Box className="flex items-center gap-1">
                    <FaStar className="text-amber-500" />
                    <Text>4</Text>
                  </Box>
                </Box>
              </Stack>
            </Box>
          </Box>
        </CardBody>
      </Card>
    </Box>
  );
}
