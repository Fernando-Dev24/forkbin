import { AnyZodSchema, InferZod } from "@/interfaces";

export const validateSchema = <TSchema extends AnyZodSchema>(
  schema: TSchema,
  values: InferZod<TSchema>
) => {
  const { data, success, error } = schema.safeParse(values);

  if (!success) {
    return {
      ok: false,
      message: error.issues[0].message,
    };
  }

  return {
    ok: true,
    message: "",
    data,
  };
};
