"use server";

import { handleActionError } from "@/helpers";
import { prisma } from "@/lib/prisma";

export const onDeleteBin = async (binId: string) => {
  try {
    await prisma.bin.delete({ where: { id: binId } });

    return {
      ok: true,
      message: "Bin deleted successfully",
    };
  } catch (error) {
    return handleActionError(error);
  }
};
