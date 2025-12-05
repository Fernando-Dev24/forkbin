"use server";

import { InferZod } from "@/interfaces";
import { CreateBinSchema } from "../../schemas/bin/create-bin-schema";
import { handleActionError, validateSchema } from "@/helpers";
import { prisma } from "@/lib/prisma";

type FormValues = InferZod<typeof CreateBinSchema>;

export const onCreateBin = async (values: FormValues) => {
  const { ok, message, data } = validateSchema(CreateBinSchema, values);
  if (!ok || !data) return { ok, message };

  try {
    /* await prisma.bin.create({
      data: {
         title: data.title,
         slug: data.slug,
         description: data.description,
         isPublic: data.isPublic,
         isMockApi: data.isMockApi,
         content: {},
      }
   }) */
  } catch (error) {
    return handleActionError(error);
  }
};
