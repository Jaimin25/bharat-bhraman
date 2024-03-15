import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaHotel } from "react-icons/fa6";
import { FaBinoculars } from "react-icons/fa6";
import { FaCar } from "react-icons/fa6";
import { GiMeal } from "react-icons/gi";

import { Box, Button, Card, CardBody, Divider, Stack, Text } from "@chakra-ui/react";

import { PackagesImageSlider } from "../TourPackages/packages-images-slider";

export default function TourPackageCard({ images }: { images: string[] }) {
  return (
    <Card>
      <CardBody padding="0px">
        <Stack className="h-auto">
          <Box className="aspect-video">
            <PackagesImageSlider
              images={images}
              overlay={false}
              className="rounded-t-md"
            >
              {" "}
            </PackagesImageSlider>
          </Box>
          <Stack
            padding="18px"
            paddingTop="0px"
          >
            <Box>
              <Text>Tour Package Title</Text>
            </Box>

            <Box className="flex items-center gap-4 text-sm">
              <Box className="flex items-center gap-1">
                <FaLocationDot className="h-4 w-4 text-purple-500" />
                <Text>Location</Text>
              </Box>
              <Box className="flex items-center gap-1">
                <FaClock className="h-4 w-4 text-indigo-500" />
                <Text>4 Nights/5 Days</Text>
              </Box>
            </Box>
            <Divider />
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
            <Divider />
            <Box className="flex items-center">
              <Box className="flex-1">
                <Text className="text-sm">Starting from</Text>
                <Box className="flex items-center">
                  <FaIndianRupeeSign />
                  <Text className="font-semibold">15000</Text>
                </Box>
                <Text className="text-sm">Per person</Text>
              </Box>
              <Button
                colorScheme="green"
                size="md"
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
