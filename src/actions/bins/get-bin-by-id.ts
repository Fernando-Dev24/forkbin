"use server";

import { handleActionError } from "@/helpers";
import { prisma } from "@/lib/prisma";

export const getBinById = async (id: string) => {
  try {
    const bin = await prisma.bin.findFirst({ where: { id } });
    if (!bin) return { ok: false, message: "Bin not found", bin: null };

    return { ok: true, message: "Bin found", bin };
  } catch (error) {
    return { ...handleActionError(error), bin: null };
  }
};
