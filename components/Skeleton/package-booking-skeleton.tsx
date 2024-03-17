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
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function PackageBookingSkeleton() {
  return (
    <Box className="w-full sm:w-2/5">
      <Card>
        <CardBody className="space-y-4">
          <Heading size="md">Query Form</Heading>
          <Stack gap="20px">
            <Box>
              <Text>Packages Name</Text>
              <Skeleton>
                <Input
                  value={"name"}
                  isReadOnly
                />
              </Skeleton>
            </Box>
            <Box className="flex gap-4">
              <Box>
                <Text>Adult</Text>
                <Skeleton>
                  <Input type="number" />
                </Skeleton>
              </Box>
              <Box>
                <Text>Child</Text>
                <Skeleton>
                  <Input type="number" />
                </Skeleton>
              </Box>
              <Box>
                <Text>Infant</Text>
                <Skeleton>
                  <Input type="number" />
                </Skeleton>
              </Box>
            </Box>
            <Divider />
            <Box>
              <Text>Full Name</Text>
              <Skeleton>
                <Input
                  value={"fullname"}
                  isReadOnly
                />
              </Skeleton>
            </Box>
            <Box>
              <Text>Email</Text>
              <Skeleton>
                <Input
                  value={"email"}
                  isReadOnly
                />
              </Skeleton>
            </Box>
            <Box>
              <Text>Mobile No.</Text>
              <Skeleton>
                <InputGroup>
                  <InputLeftAddon>
                    <Text>+91</Text>
                  </InputLeftAddon>
                  <Input
                    value={"phone"}
                    isReadOnly
                  />
                </InputGroup>
              </Skeleton>
            </Box>
            <Box>
              <Button
                colorScheme="green"
                className="w-full"
                isDisabled
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
