"use server";

import { handleActionError } from "@/helpers";
import { prisma } from "@/lib/prisma";
import { createSSRClient } from "@/lib/supabase/server";
import { onSignOut } from "./sign-out";

export const getUserSession = async () => {
  try {
    // Primero obtenemos el usuario de supabase
    const supabase = await createSSRClient();
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error) {
      return {
        ...handleActionError(error),
        user: null,
      };
    }

    // Obtenemos el usuario segun el ID devuelto por supabase
    const prismaUser = await prisma.user.findFirst({
      where: {
        id: user?.id,
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        username: true,
        email: true,
        avatar: true,
      },
    });

    if (!prismaUser) {
      await onSignOut();
      return { ok: false, message: "User not found", user: null };
    }

    return {
      ok: true,
      message: "",
      user: prismaUser,
    };
  } catch (error) {
    return {
      ...handleActionError(error),
      user: null,
    };
  }
};
