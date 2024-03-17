"use client";

import useFetchDetails from "@/app/_hooks/useFetchDetails";
import { useSession } from "@/app/_providers/session-provider";
import PackageBookingSkeleton from "@/components/Skeleton/package-booking-skeleton";
import {
  Box,
  Button,
  Card,
  CardBody,
  Divider,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Package } from "@prisma/client";

export default function PackageBookingComponent({ pID }: { pID: string }) {
  const { sessionUser } = useSession();
  const { resData, isFetching } = useFetchDetails<Package>("/api/tour_packages/details", pID);

  if (isFetching) {
    return <PackageBookingSkeleton />;
  }

  return (
    <Box className="w-full sm:w-2/5">
      <Card>
        <CardBody className="space-y-4">
          <Heading size="md">Query Form</Heading>
          <Stack
            gap="20px"
            className="*:space-y-1"
          >
            <Box>
              <Text>Packages Name</Text>
              <Input
                value={resData?.packageTitle}
                isReadOnly
              />
            </Box>
            <Box className="flex gap-4">
              <Box>
                <Text>Adult</Text>
                <Input type="number" />
              </Box>
              <Box>
                <Text>Child</Text>
                <Input type="number" />
              </Box>
              <Box>
                <Text>Infant</Text>
                <Input type="number" />
              </Box>
            </Box>
            <Divider />
            <Box>
              <Text>Full Name</Text>
              <Input
                value={sessionUser?.name}
                isReadOnly
              />
            </Box>
            <Box>
              <Text>Email</Text>
              <Input
                value={sessionUser?.email}
                isReadOnly
              />
            </Box>
            <Box>
              <Text>Mobile No.</Text>
              <InputGroup>
                <InputLeftAddon>
                  <Text>+91</Text>
                </InputLeftAddon>
                <Input
                  value={sessionUser?.phone}
                  isReadOnly
                />
              </InputGroup>
            </Box>
            <Box>
              <Button
                colorScheme="green"
                className="w-full"
              >
                Submit
              </Button>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
}
