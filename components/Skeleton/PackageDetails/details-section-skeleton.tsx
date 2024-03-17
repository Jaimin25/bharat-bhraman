import Image from "next/image";
import { FaStar } from "react-icons/fa6";

import { Box, Card, CardBody, Heading, Skeleton, Stack, Text } from "@chakra-ui/react";

export default function DetailsSectionSkeleton() {
  return (
    <Box className="w-full space-y-4 lg:col-span-2 lg:row-span-2">
      <Card>
        <CardBody padding="0px">
          <Skeleton>
            <Box className="aspect-video">
              <Image
                src=""
                className="rounded-md"
                height={400}
                width={500}
                alt="img"
              />{" "}
            </Box>
          </Skeleton>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <Box className="space-y-3">
            <Heading size="md">Package Overview</Heading>
            <Box>
              <Skeleton>
                <Text className="text-sm">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus officiis voluptatem similique
                  enim voluptates ab eos quis ullam aspernatur? Ipsum molestiae nostrum reprehenderit repellat id
                  architecto eos cum facere deleniti?
                </Text>
              </Skeleton>
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
            <Box className="space-y-2 p-2">
              <Skeleton>
                <Text>one</Text>
              </Skeleton>
              <Skeleton>
                <Text>one</Text>
              </Skeleton>
              <Skeleton>
                <Text>one</Text>
              </Skeleton>
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
            <Box className="space-y-2 p-2">
              <Skeleton>
                <Text>one</Text>
              </Skeleton>
              <Skeleton>
                <Text>one</Text>
              </Skeleton>
              <Skeleton>
                <Text>one</Text>
              </Skeleton>
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
                <Skeleton>
                  <Image
                    src=""
                    height={150}
                    width={200}
                    alt="hotel"
                    className="rounded-md"
                  />
                </Skeleton>
              </Box>
              <Box className="w-full space-y-2">
                <Skeleton>
                  <Box className="flex items-center justify-between">
                    <Box>
                      <Heading size="sm">Heading</Heading>
                    </Box>
                    <Box className="flex items-center">
                      stars
                      <FaStar className="text-amber-500" />
                    </Box>
                  </Box>
                </Skeleton>
                <Skeleton>Description</Skeleton>
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
                <Skeleton>
                  <Box>
                    <Text className="text-lg font-semibold">Day 1</Text>
                    <Text className="text-sm">one</Text>
                  </Box>
                </Skeleton>
                <Skeleton>
                  <Box>
                    <Text className="text-lg font-semibold">Day 1</Text>
                    <Text className="text-sm">one</Text>
                  </Box>
                </Skeleton>
                <Skeleton>
                  <Box>
                    <Text className="text-lg font-semibold">Day 1</Text>
                    <Text className="text-sm">one</Text>
                  </Box>
                </Skeleton>
              </Stack>
            </Box>
          </Box>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <Box className="space-y-3">
            <Heading size="md">Travel Validity</Heading>
            <Skeleton>
              <Box className="text-sm">
                <Text>abc</Text>
                <Text>abc</Text>
                <Text>abc</Text>
                <Text>abc</Text>
                <Text>abc</Text>
                <Text>abc</Text>
              </Box>
            </Skeleton>
          </Box>
        </CardBody>
      </Card>
    </Box>
  );
}
