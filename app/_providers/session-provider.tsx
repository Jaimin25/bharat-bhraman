"use client";

import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { Models } from "appwrite";

import { getLoggedInUser } from "@/store/appwriteService";
import { SessionContextProps } from "@/typings/session-provider-props";

const SessionContext = createContext<SessionContextProps>({
  sessionUser: null,
  setUser: () => {},
});

export const useSession = () => {
  return useContext(SessionContext);
};

export default function SessionProvider({ children }: { children: React.ReactNode }) {
  const [sessionUser, setSessionUser] = useState<Models.User<Models.Preferences> | null>(null);

  useEffect(() => {
    const fetchSession = async () => {
      const session = await getLoggedInUser();
      setSessionUser(session as SessionContextProps["sessionUser"]);
    };
    fetchSession();
  }, []);

  const setUser = useCallback((user: Models.User<Models.Preferences> | null) => {
    setSessionUser(user);
  }, []);

  return <SessionContext.Provider value={{ sessionUser, setUser }}>{children}</SessionContext.Provider>;
}
