import { Provider } from "@/generated/prisma/enums";
import { Bin } from "../bin/bin-type";
import { Fork } from "../fork/fork-type";
import { Prisma } from "@/generated/prisma/client";

export interface User {
  id: string;
  supabaseId: string;
  email: string;
  password: string | null;
  username: string;
  name: string | null;
  avatar: string | null;
  country: string | null;
  credits: string | null;
  createdAt: Date;
  updatedAt: Date;

  // Relaciones
  bins: Bin[];
  forks: Fork[];
  accounts: Account[];
}

export interface Account {
  id: string;
  userId: string;
  provider: Provider;
  providerAccountId: string;
  refresh_token: string | null;
  access_token: string | null;
  expires_at: number | null;

  user: User;
}

export type UserSession = Prisma.UserGetPayload<{
  select: {
    id: true;
    firstName: true;
    lastName: true;
  };
}>;
