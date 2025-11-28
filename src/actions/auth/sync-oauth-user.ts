"use server";

import { prisma } from "@/lib/prisma";
import { User } from "@supabase/supabase-js";

export const syncOauthUser = async (supabaseUser: User) => {
  const userData = {
    email: supabaseUser.email,
    username: supabaseUser.user_metadata.user_name,
    firstName:
      supabaseUser.user_metadata.full_name?.split(" ")[0] ||
      supabaseUser.user_metadata.name,
    lastName: supabaseUser.user_metadata.full_name
      ?.split(" ")
      .slice(1)
      .join(" "),
    avatar: supabaseUser.user_metadata.avatar_url,
  };

  return prisma.user.upsert({
    where: { id: supabaseUser.id },
    update: {
      email: userData.email,
      avatar: userData.avatar,
      firstName: userData.firstName,
      lastName: userData.lastName,
    },
    create: {
      id: supabaseUser.id,
      supabaseId: supabaseUser.id,
      username: userData.username,
      email: userData.email!,
      avatar: userData.avatar,
      firstName: userData.firstName,
      lastName: userData.lastName,
      accounts: {
        create: {
          id: supabaseUser.id,
          provider: "github",
          providerAccountId: supabaseUser.user_metadata.provider_id,
        },
      },
    },
  });
};
