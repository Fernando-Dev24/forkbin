"use server";

import { InferZod } from "@/interfaces";
import { EditBinContentSchema } from "@/schemas/bin";

type FormValues = InferZod<typeof EditBinContentSchema>;

interface Params {
  binId: string;
  values: FormValues;
}

export const onUpdateBin = async ({ binId, values }: Params) => {
  console.log({ binId, values });
};
