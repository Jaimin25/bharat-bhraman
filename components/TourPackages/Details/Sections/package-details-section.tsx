import Image from "next/image";

import { Box, Card, CardBody, Heading, ListItem, Stack, Text, UnorderedList } from "@chakra-ui/react";

import { PackagesImageSlider } from "../../packages-images-slider";

export default function PackageDetailsSection({ images }: { images: string[] }) {
  return (
    <Box className="col-span-2 row-span-2 w-full space-y-4">
      <Card>
        <CardBody>
          <Box className="aspect-video">
            <PackagesImageSlider
              images={images}
              overlay={false}
              className="rounded-lg"
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
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, vero. Provident libero impedit
                temporibus, similique ipsum non modi praesentium porro atque accusantium minima autem soluta ducimus
                cumque! Omnis, aut veritatis?
              </Text>
            </Box>
          </Box>
        </CardBody>
      </Card>
      <Box className="grid grid-cols-2 gap-4">
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
                <ListItem>lorem</ListItem>
                <ListItem>lorem</ListItem>
                <ListItem>lorem</ListItem>
                <ListItem>lorem</ListItem>
                <ListItem>lorem</ListItem>
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
                <ListItem>lorem</ListItem>
                <ListItem>lorem</ListItem>
                <ListItem>lorem</ListItem>
                <ListItem>lorem</ListItem>
                <ListItem>lorem</ListItem>
              </UnorderedList>
            </Box>
          </CardBody>
        </Card>
      </Box>
      <Card>
        <CardBody>
          <Box className="space-y-3">
            <Heading size="md">Hotel Details</Heading>
            <Box className="flex gap-4">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Exterior_view_of_Taj_Mahal_Hotel%2C_New_Delhi.jpg"
                height={100}
                width={250}
                alt="hotel"
                className="rounded-md"
              />
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa perspiciatis et voluptatibus nesciunt
                quam, veritatis similique. Deleniti corporis ratione ad at, mollitia eius, vitae nesciunt quasi sequi
                dolor tempora cupiditate.
              </Text>
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
                <Box>
                  <Text>Day 1 lorem</Text>
                </Box>
                <Box>
                  <Text>Day 2 lorem</Text>
                </Box>
                <Box>
                  <Text>Day 3 lorem</Text>
                </Box>
                <Box>
                  <Text>Day 4 lorem</Text>
                </Box>
                <Box>
                  <Text>Day 5 lorem</Text>
                </Box>
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
