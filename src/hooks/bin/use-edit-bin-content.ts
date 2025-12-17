"use client";

import { Bin } from "@/generated/prisma/client";
import { slugify } from "@/helpers/slugify/slugify";
import { InferZod } from "@/interfaces";
import { EditBinContentSchema } from "@/schemas/bin";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useFormTransition } from "../use-form-transition";
import { toast } from "sonner";
import { onUpdateBin } from "@/actions";
import { CheckedState } from "@radix-ui/react-checkbox";

interface Params {
  bin: Bin;
}

export type EditBinValues = InferZod<typeof EditBinContentSchema>;

export const useEditBinContent = ({ bin }: Params) => {
  const { control, handleSubmit, watch, setValue, getValues } =
    useForm<EditBinValues>({
      resolver: zodResolver(EditBinContentSchema),
      values: {
        title: bin.title,
        description: bin.description || "",
        slug: bin.slug,
        tags: bin.tags,
        content: bin.content,
        schema: bin.schema,
        isPublic: bin.isPublic,
        useSchema: bin.useSchema,
      },
    });
  const { pending, startTransition } = useFormTransition();
  const [isSchemaEditor, setIsSchemaEditor] = useState(false);

  const onSubmit = (values: EditBinValues) => {
    startTransition(async () => {
      const { ok, message } = await onUpdateBin({ binId: bin.id, values });
      if (!ok) {
        toast.error(message, { position: "top-center" });
        return;
      }

      toast.success(message, { position: "top-center" });
    });
  };

  const handleCheckboxes = (checked: CheckedState) => {
    if (checked === "indeterminate") return;
    setValue("isPublic", checked);
  };

  const handleCopyEndpoint = () => {
    navigator.clipboard.writeText(`https://forkbin.com/api/${bin.slug}`);
    toast.success("Endpoint copied to clipboard");
  };

  const toggleRenderSchema = () => {
    const currentValue = getValues("useSchema");
    setValue("useSchema", !currentValue);
    setIsSchemaEditor((prev) => !prev);
  };

  const title = watch("title");

  useEffect(() => {
    if (title) setValue("slug", slugify(title));
  }, [title]);

  return {
    control,
    pending,
    isSchemaEditor,
    toggleRenderSchema,
    watch,
    handleCheckboxes,
    handleCopyEndpoint,
    handleSubmit,
    onSubmit,
  };
};
