"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { AnyZodSchema, InferZod } from "@/interfaces";

export const useAuthForm = <TSchema extends AnyZodSchema>(
  schema: TSchema,
  values: InferZod<TSchema>
) => {
  const { control, handleSubmit } = useForm<InferZod<TSchema>>({
    resolver: zodResolver(schema),
    defaultValues: values,
  });

  const [isPasswordType, setIsPasswordType] = useState(true);

  const togglePassword = () => {
    setIsPasswordType(!isPasswordType);
  };

  return {
    isPasswordType,
    control,
    togglePassword,
    handleSubmit,
  };
};
