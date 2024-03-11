import { Models } from "appwrite";

export interface SessionContextProps {
  sessionUser: Models.User<Models.Preferences> | null;
  setUser: (user: Models.User<Models.Preferences> | null) => void;
}
