import { FaStar } from "react-icons/fa6";

import { Avatar, Box, Card, CardBody, Heading, Skeleton, SkeletonCircle, Stack, Text } from "@chakra-ui/react";

export default function ReviewSectionSkeleton() {
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
              <Skeleton>
                <Box className="flex items-center gap-1">
                  <Text>4.0/5</Text>
                  <FaStar className="h-4 w-4 text-amber-500" />
                </Box>
              </Skeleton>
            </Heading>
            <Box>
              <Stack>
                <Box className="flex items-center gap-2">
                  <SkeletonCircle>
                    <Box>
                      <Avatar size="sm"></Avatar>
                    </Box>
                  </SkeletonCircle>
                  <Box className="flex-1 space-y-2">
                    <Skeleton>
                      <Text className="font-semibold">ABC</Text>
                    </Skeleton>
                    <Skeleton className="w-2/3">
                      <Text>&quot;Good&quot;</Text>
                    </Skeleton>
                  </Box>
                </Box>
                <Box className="flex items-center gap-2">
                  <SkeletonCircle>
                    <Box>
                      <Avatar size="sm"></Avatar>
                    </Box>
                  </SkeletonCircle>
                  <Box className="flex-1 space-y-2">
                    <Skeleton>
                      <Text className="font-semibold">ABC</Text>
                    </Skeleton>
                    <Skeleton className="w-2/3">
                      <Text>&quot;Good&quot;</Text>
                    </Skeleton>
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
