"use server";

import { handleActionError } from "@/helpers";
import { PaginationOptions } from "@/interfaces";
import { prisma } from "@/lib/prisma";
import { createSSRClient } from "@/lib/supabase/server";

export const getBinsByUser = async ({
  take = 6,
  page = 1,
}: PaginationOptions) => {
  if (isNaN(+page)) page = 1;
  if (page < 1) page = 1;

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
      skip: (page - 1) * take,
      orderBy: {
        updatedAt: "desc",
      },
    });

    const totalBins = await prisma.bin.count({ where: { authorId: userId } });
    const totalPages = Math.ceil(totalBins / take);

    return { bins, totalPages };
  } catch (error) {
    return { ...handleActionError(error), bins: [], totalPages: 0 };
  }
};
