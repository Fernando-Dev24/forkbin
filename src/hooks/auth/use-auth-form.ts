import { AnyZodSchema, InferZod } from "@/interfaces";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const useAuthForm = <TSchema extends AnyZodSchema>(
  schema: TSchema,
  values: InferZod<TSchema>
) => {
  const { control, handleSubmit } = useForm<InferZod<TSchema>>({
    resolver: zodResolver(schema),
    defaultValues: values,
  });

  const [isPasswordType, setIsPasswordType] = useState(true);

  const onSubmit = (formValues: InferZod<TSchema>) => {
    console.log({ formValues });
  };

  const togglePassword = () => {
    setIsPasswordType(!isPasswordType);
  };

  return {
    isPasswordType,
    control,
    togglePassword,
    handleSubmit,
    onSubmit,
  };
};
