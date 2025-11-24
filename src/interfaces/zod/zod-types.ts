import z, { ZodType } from "zod";
import { ZodTypeDef } from "zod/v3";

export type AnyZodSchema = ZodType<any, ZodTypeDef, any>;
export type InferZod<TSchema extends AnyZodSchema> = z.infer<TSchema>;
