import Link from "next/link";
import { FaClock, FaIndianRupeeSign, FaLocationDot } from "react-icons/fa6";

import { useSession } from "@/src/app/_providers/session-provider";
import { Box, Button, Card, CardBody, Stack, Text } from "@chakra-ui/react";

export default function BookPackageSection({
  pID,
  amount,
  duration,
  location,
}: {
  pID: string;
  amount: string;
  duration: string;
  location: string;
}) {
  const { isAuthSession, sessionUser } = useSession();

  return (
    <Box>
      <Card>
        <CardBody>
          <Box className="space-y-2">
            <Box>
              <Stack>
                <Box className="flex-1">
                  <Text className="text-sm">Starting from</Text>
                  <Box className="flex items-center">
                    <FaIndianRupeeSign />
                    <Text className="font-semibold">{amount}</Text>
                  </Box>
                  <Text className="text-sm">Per person</Text>
                </Box>
                <Box className="flex items-center gap-1">
                  <FaClock className="h-4 w-4 text-indigo-500" />
                  <Text>{duration}</Text>
                </Box>
                <Box className="flex items-center gap-1">
                  <FaLocationDot className="h-4 w-4 text-purple-500" />
                  <Text>{location}</Text>
                </Box>
              </Stack>
            </Box>
            <Box>
              <Link
                href={
                  !isAuthSession && !sessionUser
                    ? { pathname: "/auth/signin", query: { redirect: `/tour_packages/v/${pID}` } }
                    : `/tour_packages/v/${pID}/book`
                }
              >
                <Button colorScheme="green">Book Now</Button>
              </Link>
            </Box>
          </Box>
        </CardBody>
      </Card>
    </Box>
  );
}
