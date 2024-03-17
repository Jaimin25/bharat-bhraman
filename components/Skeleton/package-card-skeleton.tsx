import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaHotel } from "react-icons/fa6";
import { FaBinoculars } from "react-icons/fa6";
import { FaCar } from "react-icons/fa6";
import { GiMeal } from "react-icons/gi";

import { Box, Button, Card, CardBody, Divider, Skeleton, Stack, Text } from "@chakra-ui/react";

import { PackagesImageSlider } from "../TourPackages/packages-images-slider";

export default function PackageCardSkeleton() {
  return (
    <Card>
      <CardBody padding="0px">
        <Stack className="h-auto">
          <Skeleton>
            <Box className="aspect-video">
              <PackagesImageSlider
                images={[""]}
                overlay={false}
                className="rounded-t-md"
              >
                {" "}
              </PackagesImageSlider>
            </Box>
          </Skeleton>
          <Stack
            padding="18px"
            paddingTop="0px"
          >
            <Skeleton>
              <Box>
                <Text>title</Text>
              </Box>
            </Skeleton>

            <Skeleton>
              <Box className="items-center space-y-2 text-sm">
                <Box className="flex items-center gap-1">
                  <FaLocationDot className="h-4 w-4 text-purple-500" />
                  <Text>India</Text>
                </Box>
                <Box className="flex items-center gap-1">
                  <FaClock className="h-4 w-4 text-indigo-500" />
                  <Text>3 days</Text>
                </Box>
              </Box>
            </Skeleton>
            <Divider />
            <Skeleton>
              <Box className="flex items-center justify-between gap-2 *:flex *:flex-col *:items-center *:text-sm sm:px-5">
                <Box>
                  <FaHotel className="h-4 w-4 text-red-500" />
                  <Text>Hotel</Text>
                </Box>
                <Box>
                  <FaBinoculars className="h-4 w-4 text-orange-500" />
                  <Text>Sightseeing</Text>
                </Box>
                <Box>
                  <FaCar className="h-4 w-4 text-sky-500" />
                  <Text>Transport</Text>
                </Box>
                <Box>
                  <GiMeal className="h-4 w-4 text-teal-500" />
                  <Text>Meal</Text>
                </Box>
              </Box>
            </Skeleton>
            <Divider />
            <Box className="flex items-center">
              <Box className="flex-1">
                <Text className="text-sm">Starting from</Text>
                <Skeleton className="w-1/2">
                  <Box className="flex items-center">
                    <FaIndianRupeeSign />
                    <Text className="font-semibold">9999</Text>
                  </Box>
                </Skeleton>
                <Text className="text-sm">Per person</Text>
              </Box>
              <Button
                colorScheme="green"
                size="md"
                isDisabled={true}
              >
                Book
              </Button>
            </Box>
          </Stack>
        </Stack>
      </CardBody>
    </Card>
  );
}
