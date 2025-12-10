"use client";

import { Bin } from "@/generated/prisma/client";
import { InferZod } from "@/interfaces";
import { slugRegex } from "@/schemas/bin/create-bin-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { FormFieldInput } from "../../../ui/form-fields-inputs/form-field-input";
import { createBinFields } from "../../dashboard/create-bin/create-bin-fields";
import { useEffect } from "react";
import { slugify } from "@/helpers/slugify/slugify";
import { TagsField } from "@/components/ui";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field";
import { Checkbox } from "@/components/ui/checkbox";

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
    console.log({ values });
  };

  const title = watch("title");

  useEffect(() => {
    if (title) setValue("slug", slugify(title));
  }, [title]);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5">
          {Array.from([createBinFields[0], createBinFields[1]]).map((field) => (
            <FormFieldInput<EditBinValues>
              key={field.name}
              control={control}
              id={field.name}
              type="text"
              renderLabel
              {...field}
            />
          ))}
          <FormFieldInput<EditBinValues>
            control={control}
            id="description"
            type="text"
            label="Description"
            renderLabel
            name="description"
            placeholder="Description..."
          />

          <Field>
            <FieldLabel>Tags</FieldLabel>
            <TagsField control={control} name="tags" />
          </Field>

          <Field orientation={"horizontal"}>
            <Checkbox id={`isPublic`} />
            <FieldContent>
              <FieldLabel htmlFor={`isPublic`}>Public</FieldLabel>
              <FieldDescription>
                If you mark your bin as public, it counts on community stats,
                and anyone may fork it
              </FieldDescription>
            </FieldContent>
          </Field>

          <Field orientation={"horizontal"}>
            <Checkbox id={`isMockApi`} />
            <FieldContent>
              <FieldLabel htmlFor={`isMockApi`}>Mock API</FieldLabel>
              <FieldDescription>
                Consider that if you mark this bin as mock API, it will must
                fill the schema: METHOD {">"} STATUS CODE {">"} ENDPOINT {">"}{" "}
                response data. You can change this later.
              </FieldDescription>
            </FieldContent>
          </Field>
        </div>
      </form>
    </div>
  );
};
