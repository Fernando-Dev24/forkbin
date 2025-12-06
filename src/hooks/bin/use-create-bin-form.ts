"use client";

import { AnyZodSchema, InferZod } from "@/interfaces";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useFormTransition } from "../use-form-transition";
import { onCreateBin } from "@/actions";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const useCreateBinForm = <TSchema extends AnyZodSchema>(
  schema: TSchema,
  values: InferZod<TSchema>
) => {
  const { control, handleSubmit, reset } = useForm<InferZod<TSchema>>({
    resolver: zodResolver(schema),
    defaultValues: values,
  });
  const { pending, startTransition, clearError, setError } =
    useFormTransition();

  const router = useRouter();

  const onSubmit = (formValues: InferZod<TSchema>) => {
    clearError();
    startTransition(async () => {
      const { ok, message, newBinId } = await onCreateBin(formValues);
      if (!ok) {
        setError(message);
        return;
      }

      toast.success(message, {
        description: "Redirecting",
        position: "top-center",
      });

      router.push(`/app/edit/b/${newBinId}`);
    });
  };

  return {
    control,
    reset,
    pending,
    handleSubmit,
    onSubmit,
  };
};
