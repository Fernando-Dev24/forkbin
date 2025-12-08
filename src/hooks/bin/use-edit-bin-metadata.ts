"use client";

import { useForm } from "react-hook-form";
import { BinsByUserPayload, InferZod } from "@/interfaces";
import { useSheetType } from "../use-sheet-typed";
import { CreateBinSchema } from "@/schemas/bin";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useId } from "react";
import { useFormTransition } from "../use-form-transition";
import { onUpdateBinMetadata } from "@/actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { slugify } from "@/helpers/slugify/slugify";

export type BinMetadataValues = Pick<
  InferZod<typeof CreateBinSchema>,
  "title" | "description" | "slug" | "isPublic"
>;

export const useEditBinMetadata = () => {
  const { isOpen, itemToEdit, onToggle } = useSheetType<BinsByUserPayload>();
  const { control, handleSubmit, watch, setValue } = useForm<BinMetadataValues>(
    {
      resolver: zodResolver(
        CreateBinSchema.omit({ isMockApi: true, tags: true })
      ),
      values: {
        title: itemToEdit?.title || "",
        description: itemToEdit?.description! || "",
        slug: itemToEdit?.slug || "",
        isPublic: itemToEdit?.isPublic || false,
      },
    }
  );
  const { pending, startTransition, clearError, setError } =
    useFormTransition();
  const uniqueId = useId();
  const router = useRouter();

  const onSubmit = (values: BinMetadataValues) => {
    startTransition(async () => {
      clearError();
      const { ok, message } = await onUpdateBinMetadata({
        id: itemToEdit?.id!,
        values,
      });

      if (!ok) {
        setError(message);
        return;
      }

      toast.success(message, { position: "top-center" });
      onToggle(false, null);
      router.refresh();
    });
  };

  const title = watch("title");

  useEffect(() => {
    if (title) {
      setValue("slug", slugify(title));
    }
  }, [title]);

  return {
    isOpen,
    itemToEdit,
    control,
    pending,
    uniqueId,
    onToggle,
    handleSubmit,
    onSubmit,
  };
};
