import NextLink from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaHotel } from "react-icons/fa6";
import { FaBinoculars } from "react-icons/fa6";
import { FaCar } from "react-icons/fa6";
import { GiMeal } from "react-icons/gi";

import { Box, Button, Card, CardBody, Divider, Link, Stack, Text } from "@chakra-ui/react";

import { PackagesImageSlider } from "../TourPackages/packages-images-slider";

export default function TourPackageCard({
  pID,
  title,
  price,
  locations,
  duration,
  images,
}: {
  pID: string;
  title: string;
  price: string;
  locations: string;
  duration: string;
  images: string[];
}) {
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
              <Text>{title}</Text>
            </Box>

            <Box className="items-center space-y-2 text-sm">
              <Box className="flex items-center gap-1">
                <FaLocationDot className="h-4 w-4 text-purple-500" />
                <Text>{locations}</Text>
              </Box>
              <Box className="flex items-center gap-1">
                <FaClock className="h-4 w-4 text-indigo-500" />
                <Text>{duration}</Text>
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
                  <Text className="font-semibold">{price}</Text>
                </Box>
                <Text className="text-sm">Per person</Text>
              </Box>
              <Link
                as={NextLink}
                href={`/tour_packages/v/${pID}`}
              >
                <Button
                  colorScheme="green"
                  size="md"
                >
                  Book
                </Button>
              </Link>
            </Box>
          </Stack>
        </Stack>
      </CardBody>
    </Card>
  );
}
