// import { PrismaClient } from "../prisma/db";

import { PrismaClient } from "../lib/generated/prisma";

 
declare global {
  var prisma: PrismaClient | undefined;
}
 
export const prismaClient = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalThis.prisma = prismaClient;