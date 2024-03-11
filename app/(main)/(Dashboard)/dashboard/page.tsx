"use client";
import { useState } from "react";

import { useSession } from "@/app/_providers/session-provider";
import { signOutUser } from "@/store/appwriteService";
import { Button, Card, CardBody, Text } from "@chakra-ui/react";

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
    <div>
      <Card>
        <CardBody>
          <Text>Logged In: {sessionUser?.name}</Text>
          <Button
            colorScheme="red"
            onClick={handleLogout}
            isLoading={signingOut}
          >
            Logout
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}
