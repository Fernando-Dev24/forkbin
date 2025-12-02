"use server";

import { handleActionError } from "@/helpers";
import { prisma } from "@/lib/prisma";
import { createSSRClient } from "@/lib/supabase/server";

export const getBinsByUser = async (take: number) => {
  const supabase = await createSSRClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const userId = user?.id;

  try {
    const bins = await prisma.bin.findMany({
      where: {
        authorId: userId,
      },
      select: {
        id: true,
        title: true,
        description: true,
        isPublic: true,
        _count: {
          select: {
            forks: true,
          },
        },
        updatedAt: true,
      },
      take: take,
      orderBy: {
        updatedAt: "desc",
      },
    });

    return { bins };
  } catch (error) {
    return { ...handleActionError(error), bins: [] };
  }
};
