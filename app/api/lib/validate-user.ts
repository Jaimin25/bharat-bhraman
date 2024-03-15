import { Users } from "node-appwrite";

import { getAppwriteClient } from "./appwrite-service";

export async function validateUser(uid: string, sessionId: string) {
  const client = getAppwriteClient();
  const user = new Users(client);
  const userSessions = await user.listSessions(uid);

  const currentSession = userSessions.sessions.some((session) => session.$id === sessionId);

  if (currentSession) {
    return true;
  } else {
    return false;
  }
}
