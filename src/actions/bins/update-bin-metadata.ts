"use server";

import { handleActionError, validateSchema } from "@/helpers";
import { InferZod } from "@/interfaces";
import { prisma } from "@/lib/prisma";
import { CreateBinSchema } from "@/schemas/bin";

const EditSchema = CreateBinSchema.omit({ isMockApi: true });
type FormValues = InferZod<typeof EditSchema>;

interface Params {
  id: string;
  values: FormValues;
}

export const onUpdateBinMetadata = async ({ id, values }: Params) => {
  // Validate
  const validResp = validateSchema(EditSchema, values);
  if (!validResp.ok || !validResp.data || !id)
    return { ok: false, message: validResp.message };

  try {
    await prisma.bin.update({
      where: { id },
      data: validResp.data,
    });

    return {
      ok: true,
      message: "Bin updated successfully",
    };
  } catch (error) {
    return handleActionError(error);
  }
};
