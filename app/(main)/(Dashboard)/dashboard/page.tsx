"use client";
import { useState } from "react";

import { useSession } from "@/app/_providers/session-provider";
import { signOutUser } from "@/store/appwriteService";
import { Button } from "@chakra-ui/react";

export default function Dashboard() {
  const { setUser } = useSession();
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
      Hello
      <Button
        onClick={handleLogout}
        isLoading={signingOut}
      >
        Logout
      </Button>
    </div>
  );
}
