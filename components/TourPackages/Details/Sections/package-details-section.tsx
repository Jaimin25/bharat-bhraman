import Image from "next/image";
import { FaStar } from "react-icons/fa6";

import { Box, Card, CardBody, Heading, ListItem, Stack, Text, UnorderedList } from "@chakra-ui/react";
import { Package } from "@prisma/client";

import { PackagesImageSlider } from "../../packages-images-slider";

export default function PackageDetailsSection({ packageDetails }: { packageDetails: Package }) {
  return (
    <Box className="w-full space-y-4 lg:col-span-2 lg:row-span-2">
      <Card>
        <CardBody padding="0px">
          <Box className="aspect-video">
            <PackagesImageSlider
              images={packageDetails.images}
              overlay={false}
              className="rounded-md"
            >
              {" "}
            </PackagesImageSlider>
          </Box>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <Box className="space-y-3">
            <Heading size="md">Package Overview</Heading>
            <Box>
              <Text className="text-sm">{packageDetails.packageDesc}</Text>
            </Box>
          </Box>
        </CardBody>
      </Card>
      <Box className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Card>
          <CardBody>
            <Heading
              size="md"
              color="green"
            >
              Inclusions
            </Heading>
            <Box className="p-2">
              <UnorderedList>
                {packageDetails.incluions.map((value, index) => (
                  <ListItem
                    key={index}
                    className="text-sm"
                  >
                    {value}
                  </ListItem>
                ))}
              </UnorderedList>
            </Box>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <Heading
              size="md"
              color="red"
            >
              Exclusions
            </Heading>
            <Box className="p-2">
              <UnorderedList>
                {packageDetails.excluions.map((value, index) => (
                  <ListItem
                    key={index}
                    className="text-sm"
                  >
                    {value}
                  </ListItem>
                ))}
              </UnorderedList>
            </Box>
          </CardBody>
        </Card>
      </Box>
      <Card>
        <CardBody>
          <Box className="space-y-3">
            <Heading size="md">Hotel Details</Heading>
            <Box className="flex w-full flex-col items-center gap-4 lg:flex-row lg:items-start">
              <Box className="h-full sm:w-1/3 lg:w-1/2">
                <Image
                  src={packageDetails.hotelDetails[1]}
                  height={500}
                  width={500}
                  alt="hotel"
                  className="rounded-md"
                />
              </Box>
              <Box className="w-full">
                <Box className="flex items-center justify-between">
                  <Box>
                    <Heading size="sm">{packageDetails.hotelDetails[0]}</Heading>
                  </Box>
                  <Box className="flex items-center">
                    {packageDetails.hotelDetails[3]}
                    <FaStar className="text-amber-500" />
                  </Box>
                </Box>
                <Text className="text-sm">{packageDetails.hotelDetails[2]}</Text>
              </Box>
            </Box>
          </Box>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <Box className="space-y-3">
            <Heading size="md">Day Wise Iternary</Heading>
            <Box>
              <Stack>
                {packageDetails.iternary.map((values, index) => (
                  <Box key={index}>
                    <Box>
                      <Text className="text-lg font-semibold">Day {index + 1}</Text>
                      <Text className="text-sm">{values}</Text>
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Box>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <Box className="space-y-3">
            <Heading size="md">Travel Validity</Heading>
            <Box>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi natus quos illum est repudiandae
                aspernatur minus perferendis omnis consequuntur, sint autem ab facilis cum cumque laborum dolor corrupti
                asperiores nostrum.
              </Text>
            </Box>
          </Box>
        </CardBody>
      </Card>
    </Box>
  );
}
