import { useState } from "react";

import { useSession } from "@/app/_providers/session-provider";
import { signOutUser } from "@/store/appwriteService";
import { Badge, Box, Button, CardBody, Input, InputGroup, InputLeftAddon, Stack, Text } from "@chakra-ui/react";

export default function UserAccountDetails() {
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
          <Box className="flex items-center gap-2">
            <Text className="font-medium">Email</Text>
            {!sessionUser?.emailVerification && <Badge colorScheme="red">Email unverified</Badge>}
          </Box>
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
  );
}
