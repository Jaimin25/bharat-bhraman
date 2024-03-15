"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Models } from "appwrite";
import axios from "axios";

import { getCurrentSession, getLoggedInUser } from "@/store/appwriteService";
import { SessionContextProps } from "@/typings/session-provider-props";

import { useToast } from "./toast-provider";

const SessionContext = createContext<SessionContextProps>({
  isAuthSession: false,
  isFetching: false,
  sessionUser: null,
  currentSession: null,
  setUser: () => {},
});

export const useSession = () => {
  return useContext(SessionContext);
};

export default function SessionProvider({ children }: { children: React.ReactNode }) {
  const { toastError } = useToast();

  const [currentSession, setCurrentSession] = useState<SessionContextProps["currentSession"]>(null);
  const [isAuthSession, setIsAuthSession] = useState<boolean>(false);

  const [isFetching, setIsFetching] = useState<boolean>(false);

  const [sessionUser, setSessionUser] = useState<SessionContextProps["sessionUser"] | null>(null);

  const fetchUser = async (session: SessionContextProps["sessionUser"], sessionId: string) => {
    try {
      const res = await axios.post("/api/user/fetch-details", {
        uid: session?.$id,
        email: session?.email,
        sessionId: sessionId,
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
      } else {
        toastError("Error", resData.message);
      }
    } catch (error) {
      setIsFetching(false);
      toastError("Error", (error as Error).message);
    }
  };

  const fetchSession = async () => {
    try {
      const currentSession = (await getCurrentSession()) as Models.Session;
      return currentSession.$id;
    } catch (error) {
      toastError("Error", (error as Error).message);
    }
  };

  useEffect(() => {
    (async () => {
      const user = await getLoggedInUser();

      if (!user) {
        setIsAuthSession(false);
        setSessionUser(null);
        return;
      }
      const session = await fetchSession();
      setCurrentSession(session as string);
      setIsAuthSession(true);
      setIsFetching(true);
      fetchUser(user as SessionContextProps["sessionUser"], session as string);
      setSessionUser(user as SessionContextProps["sessionUser"]);
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setUser = async (user: SessionContextProps["sessionUser"] | null) => {
    if (!user) {
      localStorage.removeItem("token");
      setIsAuthSession(false);
      setSessionUser(null);
      return;
    }
    const jwt = await fetchSession();
    setCurrentSession(jwt as string);
    setIsAuthSession(true);
    setIsFetching(true);
    fetchUser(user as SessionContextProps["sessionUser"], jwt as string);
  };

  return (
    <SessionContext.Provider value={{ sessionUser, setUser, isFetching, isAuthSession, currentSession }}>
      {children}
    </SessionContext.Provider>
  );
}
