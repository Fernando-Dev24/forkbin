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
import { Button, TagsField } from "@/components/ui";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field";
import { Checkbox } from "@/components/ui/checkbox";
import { EditorWrapper } from "./editor-wrapper";
import { useEditBinContent } from "@/hooks";
import { EditBinValues } from "@/hooks/bin/use-edit-bin-content";

interface Props {
  bin: Bin;
}

export const EditBinForm = ({ bin }: Props) => {
  const { control, handleSubmit, onSubmit } = useEditBinContent({ bin });

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* // TODO: Add an accordion to clean the page to focus on editor */}
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

        <div className="my-20">
          <div className="flex items-baseline justify-between">
            <h4 className="mb-5 uppercase font-semibold text-accent-foreground">
              YOUR JSON CONTENT
            </h4>

            <Button type="submit">Save changes</Button>
          </div>
          <EditorWrapper
            control={control}
            name="content"
            content={bin.content}
          />
        </div>
      </form>
    </div>
  );
};
