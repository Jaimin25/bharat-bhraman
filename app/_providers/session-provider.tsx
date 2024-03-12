"use client";

import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { Models } from "appwrite";
import axios from "axios";

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

  const fetchUser = useCallback(async (session: Models.User<Models.Preferences>) => {
    const res = await axios.post("/api/user/fetch-details", {
      uid: session.$id,
      email: session.email,
    });

    const resData = res.data;

    if (resData.statusCode === 200) {
      setSessionUser((session = { ...session, phone: resData.userDetails.mobileNo }));
    }
  }, []);

  useEffect(() => {
    const fetchSession = async () => {
      const session = await getLoggedInUser();
      if (!session) {
        setSessionUser(null);
        return;
      }
      fetchUser(session as Models.User<Models.Preferences>);
      setSessionUser(session as SessionContextProps["sessionUser"]);
    };
    fetchSession();
  }, [fetchUser]);

  const setUser = useCallback(
    (user: Models.User<Models.Preferences> | null) => {
      if (!user) {
        setSessionUser(null);
        return;
      }
      fetchUser(user as Models.User<Models.Preferences>);
    },
    [fetchUser],
  );

  return <SessionContext.Provider value={{ sessionUser, setUser }}>{children}</SessionContext.Provider>;
}
