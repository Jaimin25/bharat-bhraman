import { FaClock, FaIndianRupeeSign, FaLocationDot } from "react-icons/fa6";

import { Box, Button, Card, CardBody, Skeleton, Stack, Text } from "@chakra-ui/react";

export default function BookSectionSkeleton() {
  return (
    <Box>
      <Card>
        <CardBody>
          <Box className="space-y-2">
            <Box>
              <Stack>
                <Box className="flex-1">
                  <Skeleton>
                    <Text className="text-sm">Starting from</Text>
                    <Box className="flex items-center">
                      <FaIndianRupeeSign />
                      <Text className="font-semibold">15000</Text>
                    </Box>
                    <Text className="text-sm">Per person</Text>
                  </Skeleton>
                </Box>
                <Skeleton>
                  <Box className="flex items-center gap-1">
                    <FaClock className="h-4 w-4 text-indigo-500" />
                    <Text>4 Nights/5 Days</Text>
                  </Box>
                </Skeleton>
                <Skeleton>
                  <Box className="flex items-center gap-1">
                    <FaLocationDot className="h-4 w-4 text-purple-500" />
                    <Text>Location</Text>
                  </Box>
                </Skeleton>
              </Stack>
            </Box>
            <Button
              colorScheme="green"
              isDisabled={true}
            >
              Book Now
            </Button>
          </Box>
        </CardBody>
      </Card>
    </Box>
  );
}
