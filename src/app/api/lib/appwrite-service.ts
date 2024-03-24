import { Client } from "node-appwrite";

export function getAppwriteClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT as string)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID as string)
    .setKey(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_KEY as string);

  return client;
}
