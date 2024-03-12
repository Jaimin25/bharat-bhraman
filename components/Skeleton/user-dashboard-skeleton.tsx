import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function UserDashboardSkeleton() {
  return (
    <Box className="w-full sm:w-2/3 lg:w-[35%]">
      <Card>
        <CardHeader>
          <Heading size="md">Account Details</Heading>
        </CardHeader>
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
      </Card>
    </Box>
  );
}
