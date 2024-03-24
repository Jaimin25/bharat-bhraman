import { Badge, Box, Card, CardBody, Skeleton, Stack, Text } from "@chakra-ui/react";

export default function UserBookingsCardSkeleton() {
  return (
    <Card shadow="base">
      <CardBody className="space-y-2">
        <Stack>
          <Box>
            <Text className="font-semibold">Package Name</Text>
            <Skeleton>
              <Text className="text-sm">title</Text>
            </Skeleton>
          </Box>
          <Box className="flex gap-4">
            <Box>
              <Text className="font-semibold">Adults</Text>
              <Skeleton>
                <Text className="text-sm">2</Text>
              </Skeleton>
            </Box>
            <Box>
              <Text className="font-semibold">Child</Text>
              <Skeleton>
                <Text className="text-sm">0</Text>
              </Skeleton>
            </Box>
            <Box>
              <Text className="font-semibold">Infant</Text>
              <Skeleton>
                <Text className="text-sm">0</Text>
              </Skeleton>
            </Box>
          </Box>
          <Box>
            <Text className="font-semibold">Confirmation</Text>
            <Skeleton>
              <Badge colorScheme={"green"}>pending</Badge>
            </Skeleton>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}
