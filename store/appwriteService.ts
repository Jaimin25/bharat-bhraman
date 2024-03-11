import { Account, Client } from "appwrite";

const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT as string)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID as string);

export const account = new Account(client);

export async function getLoggedInUser() {
  try {
    return await account.get();
  } catch (error) {
    // error
  }
}

export async function singUpUser(id: string, fullname: string, email: string, password: string) {
  try {
    const data = await account.create(id, email, password, fullname);

    if (data) {
      const loginUser = await signInUser(email, password);

      if (loginUser) {
        return loginUser;
      } else {
        return "error";
      }
    }
  } catch (error) {
    return error;
  }
}

export async function signInUser(email: string, password: string) {
  try {
    const data = await account.createEmailPasswordSession(email, password);
    if (data) {
      const userData = await account.get();
      return userData;
    } else {
      return "error";
    }
  } catch (error) {
    return error;
  }
}

export async function signOutUser() {
  try {
    return await account.deleteSession("current");
  } catch (error) {
    return error;
  }
}
