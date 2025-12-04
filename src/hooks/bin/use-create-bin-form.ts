"use client";

import { AnyZodSchema, InferZod } from "@/interfaces";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const useCreateBinForm = <TSchema extends AnyZodSchema>(
  schema: TSchema,
  values: InferZod<TSchema>
) => {
  const { control, handleSubmit, reset } = useForm<InferZod<TSchema>>({
    resolver: zodResolver(schema),
    defaultValues: values,
  });

  const onSubmit = (formValues: InferZod<TSchema>) => {
    console.log({ formValues });
  };

  return {
    control,
    reset,
    handleSubmit,
    onSubmit,
  };
};
