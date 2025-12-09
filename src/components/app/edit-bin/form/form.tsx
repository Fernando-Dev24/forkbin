"use client";

import { Bin } from "@/generated/prisma/client";
import { InferZod } from "@/interfaces";
import { slugRegex } from "@/schemas/bin/create-bin-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const EditBinContentSchema = z.object({
  title: z.string().min(1, "Title is required").max(20),
  description: z
    .string()
    .min(1, "Description is required")
    .max(50, "Description could not be more than 50 characters"),
  slug: z
    .string()
    .regex(
      slugRegex,
      "Invalid slug format. Slugs must contain only lowercase letters, numbers, and single hyphens, and cannot start or end with a hyphen."
    ),
  tags: z.array(z.string()),
  content: z.any(),
  isPublic: z.boolean().default(false),
  isMockApi: z.boolean().default(false),
});

type EditBinValues = InferZod<typeof EditBinContentSchema>;

interface Props {
  bin: Bin;
}

export const EditBinForm = ({ bin }: Props) => {
  const { control } = useForm<EditBinValues>({
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

  return <></>;
};
