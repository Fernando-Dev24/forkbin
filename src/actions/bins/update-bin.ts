"use server";

import { validateApiSchema } from "@/helpers";
import { InferZod } from "@/interfaces";
import { EditBinContentSchema } from "@/schemas/bin";

type FormValues = InferZod<typeof EditBinContentSchema>;

interface Params {
  binId: string;
  values: FormValues;
}

export const onUpdateBin = async ({ binId, values }: Params) => {
  const { isMockApi } = values;
  // Validar primero si cumple con el schema de API si esta marcado
  if (isMockApi) {
    return validateApiSchema(values.content);
  }

  return {
    ok: true,
    message: "Updated successfully",
  };
};
