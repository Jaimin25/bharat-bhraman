"use client";
import { useState } from "react";

import { useSession } from "@/app/_providers/session-provider";
import { signOutUser } from "@/store/appwriteService";
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
  Stack,
  Text,
} from "@chakra-ui/react";

export default function Dashboard() {
  const { setUser, sessionUser } = useSession();
  const [signingOut, setSigningOut] = useState(false);
  const handleLogout = () => {
    setSigningOut(true);
    (async () => {
      try {
        const loggedOut = await signOutUser();
        if (loggedOut) {
          setUser(null);
        }
        setSigningOut(false);
      } catch (error) {
        setSigningOut(false);
        // toast error
      }
    })();
  };
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
              <Input value={sessionUser?.name} />
            </Box>
            <Box>
              <Text className="font-medium">Email</Text>
              <Input value={sessionUser?.email} />
            </Box>
            <Box>
              <Text className="font-medium">Mobile Number</Text>
              <InputGroup>
                <InputLeftAddon>
                  <Text>+91</Text>
                </InputLeftAddon>
                <Input value={sessionUser?.phone} />
              </InputGroup>
            </Box>
            <Button
              colorScheme="red"
              onClick={handleLogout}
              isLoading={signingOut}
            >
              Logout
            </Button>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
}
