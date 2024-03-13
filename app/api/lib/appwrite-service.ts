import { Client } from "node-appwrite";

export function getAppwriteClient(jwt: string) {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT as string)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID as string)
    .setJWT(jwt);

  return client;
}
