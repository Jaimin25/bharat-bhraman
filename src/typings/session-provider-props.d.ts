import { Models } from "appwrite";

export interface SessionContextProps {
  isAuthSession: boolean;
  isFetching: boolean;
  sessionUser: Models.User<Models.Preferences> | null;
  currentSession: string | null;
  setUser: (user: Models.User<Models.Preferences> | null) => void;
}
