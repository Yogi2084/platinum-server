import { betterAuth } from "better-auth";
import { serverUrl } from "../../utils/environment";
import { prismaClient } from "../prisma";
import { prismaAdapter } from "better-auth/adapters/prisma";

export const betterAuthClient = betterAuth({
  baseURL: serverUrl,
  basePath: "/authentications",
  database:prismaAdapter(prismaClient,{provider:"postgresql"}),
  user: {
    modelName: "User",
  },
  account: {
    modelName: "Account",
  },
  session: {
    modelName: "Session",
  },
  verification: {
    modelName: "Verification",
  },
});