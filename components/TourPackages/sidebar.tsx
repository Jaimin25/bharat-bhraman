import { FaSearch } from "react-icons/fa";

import { Box, Card, CardBody, Heading, Input, InputGroup, InputLeftAddon, Stack, Text } from "@chakra-ui/react";

export default function TourPackgesSidebar() {
  return (
    <Box className="w-1/4">
      <Card>
        <CardBody>
          <Stack gap="14px">
            <Box>
              <Heading size="md">Filter</Heading>
            </Box>
            <Box className="space-y-2">
              <Text>Search</Text>
              <InputGroup>
                <InputLeftAddon>
                  <FaSearch className="h-3 w-3" />
                </InputLeftAddon>
                <Input
                  placeholder="search packages.."
                  roundedLeft={"none"}
                />
              </InputGroup>
            </Box>
            <Box className="space-y-2">
              <Text>Budget</Text>
              <InputGroup>
                <InputLeftAddon>₹</InputLeftAddon>
                <Input
                  type="number"
                  placeholder="5000"
                  roundedLeft={"none"}
                />
              </InputGroup>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
}
