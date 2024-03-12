"use client";

import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import axios from "axios";

import { getLoggedInUser } from "@/store/appwriteService";
import { SessionContextProps } from "@/typings/session-provider-props";

const SessionContext = createContext<SessionContextProps>({
  isFetching: false,
  sessionUser: null,
  setUser: () => {},
});

export const useSession = () => {
  return useContext(SessionContext);
};

export default function SessionProvider({ children }: { children: React.ReactNode }) {
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
        (session = { ...session, phone: resData.userDetails.mobileNo } as SessionContextProps["sessionUser"]),
      );
    }
  }, []);

  useEffect(() => {
    setIsFetching(true);
    const fetchSession = async () => {
      const session = await getLoggedInUser();
      if (!session) {
        setSessionUser(null);
        return;
      }
      fetchUser(session as SessionContextProps["sessionUser"]);
      setSessionUser(session as SessionContextProps["sessionUser"]);
    };
    fetchSession();
  }, [fetchUser]);

  const setUser = useCallback(
    (user: SessionContextProps["sessionUser"] | null) => {
      if (!user) {
        setSessionUser(null);
        return;
      }
      setIsFetching(true);
      fetchUser(user as SessionContextProps["sessionUser"]);
    },
    [fetchUser],
  );

  return <SessionContext.Provider value={{ sessionUser, setUser, isFetching }}>{children}</SessionContext.Provider>;
}
