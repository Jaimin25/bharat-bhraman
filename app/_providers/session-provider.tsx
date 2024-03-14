"use client";

import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { Models } from "appwrite";
import axios from "axios";

import { getJWT, getLoggedInUser } from "@/store/appwriteService";
import { SessionContextProps } from "@/typings/session-provider-props";

import { useToast } from "./toast-provider";

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
  const { toastError } = useToast();

  const [userJWT, setUserJWT] = useState<SessionContextProps["userJWT"]>(null);
  const [isAuthSession, setIsAuthSession] = useState<boolean>(false);

  const [isFetching, setIsFetching] = useState<boolean>(false);

  const [sessionUser, setSessionUser] = useState<SessionContextProps["sessionUser"] | null>(null);

  const fetchUser = useCallback(
    async (session: SessionContextProps["sessionUser"], jwt: string) => {
      try {
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
      } catch (error) {
        setIsFetching(false);
        toastError("Error", (error as Error).message);
      }
    },
    [toastError],
  );

  const fetchJWT = useCallback(async () => {
    try {
      // let jwToken = localStorage.getItem("token");

      // if (!jwToken) {
      //   if (jwt?.jwt) {
      //     localStorage.setItem("token", jwt?.jwt as string);
      //     jwToken = jwt?.jwt;
      //   }
      // }
      const jwToken = (await getJWT()) as Models.Jwt;
      return jwToken.jwt;
    } catch (error) {
      toastError("Error", (error as Error).message);
    }
  }, [toastError]);

  useEffect(() => {
    (async () => {
      const session = await getLoggedInUser();
      if (!session) {
        setIsAuthSession(false);
        setSessionUser(null);
        return;
      }
      const jwt = await fetchJWT();
      setUserJWT(jwt as string);
      setIsAuthSession(true);
      setIsFetching(true);
      fetchUser(session as SessionContextProps["sessionUser"], jwt as string);
      setSessionUser(session as SessionContextProps["sessionUser"]);
    })();
  }, [fetchUser, fetchJWT]);

  const setUser = useCallback(
    async (user: SessionContextProps["sessionUser"] | null) => {
      if (!user) {
        localStorage.removeItem("token");
        setIsAuthSession(false);
        setSessionUser(null);
        return;
      }
      const jwt = await fetchJWT();
      setUserJWT(jwt as string);
      setIsAuthSession(true);
      setIsFetching(true);
      fetchUser(user as SessionContextProps["sessionUser"], jwt as string);
    },
    [fetchUser, fetchJWT],
  );

  return (
    <SessionContext.Provider value={{ sessionUser, setUser, isFetching, isAuthSession, userJWT }}>
      {children}
    </SessionContext.Provider>
  );
}
