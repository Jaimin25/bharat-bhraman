import { Account } from "node-appwrite";

import { getAppwriteClient } from "./appwrite-service";

export async function validateUser(jwt: string) {
  const client = getAppwriteClient(jwt);

  const account = new Account(client);

  const user = await account.get();

  if (user) {
    return true;
  } else {
    return false;
  }
}
