import { Prisma } from "@/generated/prisma/client";

export type UserSession = Prisma.UserGetPayload<{
  select: {
    id: true;
    firstName: true;
    lastName: true;
    username: true;
    email: true;
    avatar: true;
  };
}>;
