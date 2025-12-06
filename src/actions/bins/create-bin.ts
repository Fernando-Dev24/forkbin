"use server";

import { InferZod } from "@/interfaces";
import { CreateBinSchema } from "../../schemas/bin/create-bin-schema";
import { handleActionError, validateSchema } from "@/helpers";
import { prisma } from "@/lib/prisma";
import { createSSRClient } from "@/lib/supabase/server";

type FormValues = InferZod<typeof CreateBinSchema>;

export const onCreateBin = async (values: FormValues) => {
  const { ok, message, data } = validateSchema(CreateBinSchema, values);
  if (!ok || !data) return { ok, message, newBinId: null };

  try {
    const supabase = await createSSRClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return { ok: false, message: "User not found", newBinId: null };

    const newBinId = await prisma.bin.create({
      data: {
        title: data.title,
        slug: data.slug,
        description: data.description,
        isPublic: data.isPublic,
        isMockApi: data.isMockApi,
        content: {},
        authorId: user.id,
      },
      select: { id: true },
    });

    return {
      ok: true,
      message: "Bin created successfully",
      newBinId: newBinId.id,
    };
  } catch (error) {
    return { ...handleActionError(error), newBinId: null };
  }
};
