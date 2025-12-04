"use client";

import { useForm } from "react-hook-form";
import { BinsByUserPayload, InferZod } from "@/interfaces";
import { useSheetType } from "../use-sheet-typed";
import { CreateBinSchema } from "@/schemas/bin";
import { zodResolver } from "@hookform/resolvers/zod";
import { useId } from "react";

export type BinMetadataValues = Pick<
  InferZod<typeof CreateBinSchema>,
  "title" | "description" | "slug" | "isPublic"
>;

export const useEditBinMetadata = () => {
  const { isOpen, itemToEdit, onToggle } = useSheetType<BinsByUserPayload>();
  const { control, handleSubmit } = useForm<BinMetadataValues>({
    resolver: zodResolver(CreateBinSchema.omit({ isMockApi: true })),
    values: {
      title: itemToEdit?.title || "",
      description: itemToEdit?.description! || "",
      slug: itemToEdit?.slug || "",
      isPublic: itemToEdit?.isPublic || false,
    },
  });
  const uniqueId = useId();

  const onSubmit = (values: BinMetadataValues) => {
    console.log({ values });
  };

  return {
    isOpen,
    itemToEdit,
    control,
    uniqueId,
    onToggle,
    handleSubmit,
    onSubmit,
  };
};
