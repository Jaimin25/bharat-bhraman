import { Badge, Box, Button, Card, CardBody, Stack, Text } from "@chakra-ui/react";
import { BookingQuery } from "@prisma/client";

export default function UserBookingsCard({ item }: { item: BookingQuery }) {
  return (
    <Card shadow="base">
      <CardBody className="space-y-2">
        <Stack>
          <Box>
            <Text className="font-semibold">Package Name</Text>
            <Text className="text-sm">{item.packageTitle}</Text>
          </Box>
          <Box className="flex gap-4">
            <Box>
              <Text className="font-semibold">Adults</Text>
              <Text className="text-sm">{item.adults}</Text>
            </Box>
            <Box>
              <Text className="font-semibold">Child</Text>
              <Text className="text-sm">{item.child}</Text>
            </Box>
            <Box>
              <Text className="font-semibold">Infant</Text>
              <Text className="text-sm">{item.infant}</Text>
            </Box>
          </Box>
          <Box>
            <Text className="font-semibold">Confirmation</Text>
            <Badge colorScheme={item.status === "pending" ? "red" : "green"}>{item.status}</Badge>
          </Box>
        </Stack>
        {item.status === "pending" && (
          <Box textAlign="end">
            <Button colorScheme="red">Cancel</Button>
          </Box>
        )}
      </CardBody>
    </Card>
  );
}
