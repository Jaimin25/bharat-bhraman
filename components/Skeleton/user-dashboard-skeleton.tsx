import { Box, Button, CardBody, Input, InputGroup, InputLeftAddon, Skeleton, Stack, Text } from "@chakra-ui/react";

export default function UserDashboardSkeleton() {
  return (
    <CardBody>
      <Stack
        spacing="16px"
        className="*:space-y-1"
      >
        <Box>
          <Text className="font-medium">Full Name</Text>
          <Skeleton>
            <Input value={""} />
          </Skeleton>
        </Box>
        <Box>
          <Text className="font-medium">Email</Text>
          <Skeleton>
            <Input value={""} />
          </Skeleton>
        </Box>
        <Box>
          <Text className="font-medium">Mobile Number</Text>
          <Skeleton>
            <InputGroup>
              <InputLeftAddon>
                <Text>+91</Text>
              </InputLeftAddon>
              <Input value={""} />
            </InputGroup>
          </Skeleton>
        </Box>
        <Button
          isDisabled={true}
          colorScheme="red"
        >
          Logout
        </Button>
      </Stack>
    </CardBody>
  );
}
