"use client";

import { Bin } from "@/generated/prisma/client";
import { slugify } from "@/helpers/slugify/slugify";
import { InferZod } from "@/interfaces";
import { EditBinContentSchema } from "@/schemas/bin";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useFormTransition } from "../use-form-transition";
import { toast } from "sonner";
import { onUpdateBin } from "@/actions";

interface Params {
  bin: Bin;
}

export type EditBinValues = InferZod<typeof EditBinContentSchema>;

export const useEditBinContent = ({ bin }: Params) => {
  const { control, handleSubmit, watch, getValues, setValue } =
    useForm<EditBinValues>({
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
  const { pending, startTransition } = useFormTransition();

  const onSubmit = (values: EditBinValues) => {
    // TODO: Validate that if isMockApi is true, its content needs to have the following structure:
    // TODO: METHOD > STATUS > ENDPOINT > DATA
    startTransition(async () => {
      await onUpdateBin({ binId: bin.id, values });
    });
  };

  const handleCopyEndpoint = () => {
    navigator.clipboard.writeText(`https://forkbin.com/api/${bin.slug}`);
    toast.success("Endpoint copied to clipboard");
  };

  const title = watch("title");
  watch(["isMockApi", "isPublic"]);

  useEffect(() => {
    if (title) setValue("slug", slugify(title));
  }, [title]);

  return {
    control,
    pending,
    getValues,
    handleCopyEndpoint,
    handleSubmit,
    onSubmit,
  };
};
