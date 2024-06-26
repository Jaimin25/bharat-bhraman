import { Dispatch, SetStateAction } from "react";
import { FaSearch } from "react-icons/fa";

import { Box, Card, CardBody, Heading, Input, InputGroup, InputLeftAddon, Select, Stack, Text } from "@chakra-ui/react";

export default function TourPackgesSidebar({
  setQuery,
}: {
  setQuery: Dispatch<SetStateAction<{ type: string; value: string }>> | null;
}) {
  return (
    <Box className="w-full lg:w-1/4">
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
                  onChange={(e) => {
                    if (setQuery) {
                      setQuery({ type: "search", value: e.target.value });
                    }
                  }}
                />
              </InputGroup>
            </Box>
            <Box className="space-y-2">
              <Text>Sort</Text>
              <Select
                onChange={(e) => {
                  if (setQuery) {
                    setQuery({ type: "sort", value: e.target.value });
                  }
                }}
              >
                <option>Highest to lowest</option>
                <option>Lowest to highest</option>
              </Select>
            </Box>
            <Box className="space-y-2">
              <Text>Budget</Text>
              <InputGroup>
                <InputLeftAddon>₹</InputLeftAddon>
                <Input
                  type="number"
                  placeholder="5000"
                  roundedLeft={"none"}
                  onChange={(e) => {
                    if (setQuery) {
                      setQuery({ type: "budget", value: e.target.value });
                    }
                  }}
                />
              </InputGroup>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
}
