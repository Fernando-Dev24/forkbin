"use server";

import { handleActionError } from "@/helpers";
import { prisma } from "@/lib/prisma";

export const getPopularBins = async (take: number) => {
  try {
    const bins = await prisma.bin.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        author: {
          select: {
            username: true,
          },
        },
        forksCount: true,
      },
      where: {
        isPublic: true,
      },
      orderBy: {
        forksCount: "desc",
      },
      take,
    });

    return bins;
  } catch (error) {
    handleActionError(error);
  }
};
