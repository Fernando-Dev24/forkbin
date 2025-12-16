"use client";

import { Bin } from "@/generated/prisma/client";
import { slugify } from "@/helpers/slugify/slugify";
import { InferZod } from "@/interfaces";
import { EditBinContentSchema } from "@/schemas/bin";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface Params {
  bin: Bin;
}

export type EditBinValues = InferZod<typeof EditBinContentSchema>;

export const useEditBinContent = ({ bin }: Params) => {
  const { control, handleSubmit, watch, setValue } = useForm<EditBinValues>({
    resolver: zodResolver(EditBinContentSchema),
    values: {
      title: bin.title,
      description: bin.description || "",
      slug: bin.slug,
      tags: bin.tags,
      content: bin.content,
      isPublic: bin.isPublic,
      isMockApi: bin.isMockApi,
    },
  });

  const onSubmit = (values: EditBinValues) => {
    // TODO: Validate that if isMockApi is true, its content needs to have the following structure:
    // TODO: METHOD > STATUS > ENDPOINT > DATA
    console.log({ values });
  };

  const title = watch("title");

  useEffect(() => {
    if (title) setValue("slug", slugify(title));
  }, [title]);

  return {
    control,
    handleSubmit,
    onSubmit,
  };
};
