"use client";

import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import axios from "axios";

import { getLoggedInUser } from "@/store/appwriteService";
import { SessionContextProps } from "@/typings/session-provider-props";

const SessionContext = createContext<SessionContextProps>({
  isAuthSession: false,
  isFetching: false,
  sessionUser: null,
  setUser: () => {},
});

export const useSession = () => {
  return useContext(SessionContext);
};

export default function SessionProvider({ children }: { children: React.ReactNode }) {
  const [isAuthSession, setIsAuthSession] = useState<boolean>(false);

  const [isFetching, setIsFetching] = useState<boolean>(false);

  const [sessionUser, setSessionUser] = useState<SessionContextProps["sessionUser"] | null>(null);

  const fetchUser = useCallback(async (session: SessionContextProps["sessionUser"]) => {
    const res = await axios.post("/api/user/fetch-details", {
      uid: session?.$id,
      email: session?.email,
    });

    const resData = res.data;
    setIsFetching(false);
    if (resData.statusCode === 200) {
      setSessionUser(
        (session = {
          ...session,
          phone: resData.userDetails.mobileNo,
          emailVerification: resData.emailVerified,
        } as SessionContextProps["sessionUser"]),
      );
    }
  }, []);

  useEffect(() => {
    (async () => {
      const session = await getLoggedInUser();
      if (!session) {
        setIsAuthSession(false);
        setSessionUser(null);
        return;
      }
      setIsAuthSession(true);
      setIsFetching(true);
      fetchUser(session as SessionContextProps["sessionUser"]);
      setSessionUser(session as SessionContextProps["sessionUser"]);
    })();
  }, [fetchUser]);

  const setUser = useCallback(
    (user: SessionContextProps["sessionUser"] | null) => {
      if (!user) {
        setIsAuthSession(false);
        setSessionUser(null);
        return;
      }
      setIsAuthSession(true);
      setIsFetching(true);
      fetchUser(user as SessionContextProps["sessionUser"]);
    },
    [fetchUser],
  );

  return (
    <SessionContext.Provider value={{ sessionUser, setUser, isFetching, isAuthSession }}>
      {children}
    </SessionContext.Provider>
  );
}
