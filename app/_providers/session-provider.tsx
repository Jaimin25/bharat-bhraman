"use client";

import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { Models } from "appwrite";
import axios from "axios";

import { getJWT, getLoggedInUser } from "@/store/appwriteService";
import { SessionContextProps } from "@/typings/session-provider-props";

const SessionContext = createContext<SessionContextProps>({
  isAuthSession: false,
  isFetching: false,
  sessionUser: null,
  userJWT: null,
  setUser: () => {},
});

export const useSession = () => {
  return useContext(SessionContext);
};

export default function SessionProvider({ children }: { children: React.ReactNode }) {
  const [userJWT, setUserJWT] = useState<SessionContextProps["userJWT"]>(null);
  const [isAuthSession, setIsAuthSession] = useState<boolean>(false);

  const [isFetching, setIsFetching] = useState<boolean>(false);

  const [sessionUser, setSessionUser] = useState<SessionContextProps["sessionUser"] | null>(null);

  const fetchUser = useCallback(async (session: SessionContextProps["sessionUser"], jwt: Models.Jwt) => {
    const res = await axios.post("/api/user/fetch-details", {
      uid: session?.$id,
      email: session?.email,
      jwt: jwt,
    });

    const resData = res.data;
    setIsFetching(false);
    if (resData.statusCode === 200) {
      setSessionUser(
        (session = {
          ...session,
          phone: resData.userDetails.mobileNo,
          emailVerification: resData.userDetails.emailVerified,
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
      const jwt = (await getJWT()) as Models.Jwt;
      setUserJWT(jwt?.jwt as string);
      setIsAuthSession(true);
      setIsFetching(true);
      fetchUser(session as SessionContextProps["sessionUser"], jwt);
      setSessionUser(session as SessionContextProps["sessionUser"]);
    })();
  }, [fetchUser]);

  const setUser = useCallback(
    async (user: SessionContextProps["sessionUser"] | null) => {
      if (!user) {
        setIsAuthSession(false);
        setSessionUser(null);
        return;
      }
      const jwt = (await getJWT()) as Models.Jwt;
      setIsAuthSession(true);
      setIsFetching(true);
      fetchUser(user as SessionContextProps["sessionUser"], jwt);
    },
    [fetchUser],
  );

  return (
    <SessionContext.Provider value={{ sessionUser, setUser, isFetching, isAuthSession, userJWT }}>
      {children}
    </SessionContext.Provider>
  );
}
