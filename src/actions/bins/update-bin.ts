"use server";

import { handleActionError, validateSchema } from "@/helpers";
import { InferZod } from "@/interfaces";
import { prisma } from "@/lib/prisma";
import { EditBinContentSchema } from "@/schemas/bin";
import Ajv from "ajv";

type FormValues = InferZod<typeof EditBinContentSchema>;

interface Params {
  binId: string;
  values: FormValues;
}

export const onUpdateBin = async ({ binId, values }: Params) => {
  const { useSchema, schema, content } = values;

  // Validate all form field are valid
  const {
    ok,
    data,
    message: validationMessage,
  } = validateSchema(EditBinContentSchema, values);
  if (!ok || !data) return { ok, message: validationMessage };

  // Validate that content fullfill schema directives
  const ajv = new Ajv();
  const validate = ajv.compile(JSON.parse(schema || "{}"));
  const isValid = validate(content);

  if (useSchema && !isValid)
    return { ok: false, message: validate.errors?.[0].message };

  try {
    await prisma.bin.update({
      where: { id: binId },
      data: {
        ...data,
      },
    });

    return {
      ok: true,
      message: "Updated successfully",
    };
  } catch (error) {
    return { ...handleActionError(error) };
  }
};
