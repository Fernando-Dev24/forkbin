"use client";

import { Bin } from "@/generated/prisma/client";
import { FormFieldInput } from "../../../ui/form-fields-inputs/form-field-input";
import { createBinFields } from "../../dashboard/create-bin/create-bin-fields";
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
import { SubmitButton } from "../../../ui/submit-button/submit-button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Clipboard as ClipboardIcon } from "lucide-react";
import { check } from "zod";

interface Props {
  bin: Bin;
}

export const EditBinForm = ({ bin }: Props) => {
  const {
    control,
    pending,
    watch,
    handleCheckboxes,
    handleCopyEndpoint,
    handleSubmit,
    onSubmit,
  } = useEditBinContent({
    bin,
  });

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="px-5 rounded-lg bg-card">
            <AccordionTrigger>Bin metadata</AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5">
                {Array.from([createBinFields[0], createBinFields[1]]).map(
                  (field) => (
                    <FormFieldInput<EditBinValues>
                      key={field.name}
                      control={control}
                      id={field.name}
                      type="text"
                      renderLabel
                      {...field}
                    />
                  )
                )}
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
                  <Checkbox
                    id={`isPublic`}
                    checked={watch("isPublic")}
                    onCheckedChange={(checked) =>
                      handleCheckboxes("isPublic", checked)
                    }
                  />
                  <FieldContent>
                    <FieldLabel htmlFor={`isPublic`}>Public</FieldLabel>
                    <FieldDescription>
                      If you mark your bin as public, it counts on community
                      stats, and anyone may fork it
                    </FieldDescription>
                  </FieldContent>
                </Field>

                <Field orientation={"horizontal"}>
                  <Checkbox
                    id={`isMockApi`}
                    checked={watch("isMockApi")}
                    onCheckedChange={(checked) =>
                      handleCheckboxes("isMockApi", checked)
                    }
                  />
                  <FieldContent>
                    <FieldLabel htmlFor={`isMockApi`}>Mock API</FieldLabel>
                    <FieldDescription>
                      Consider that if you mark this bin as mock API, it will
                      must fill the schema: METHOD {">"} STATUS CODE {">"}{" "}
                      ENDPOINT {">"} response data. You can change this later.
                    </FieldDescription>
                  </FieldContent>
                </Field>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="my-10">
          <div className="flex items-baseline justify-between">
            <div className="flex items-center gap-x-5 mb-5 font-semibold">
              https://forkbin.com/api/{bin.slug}
              <Button
                type="button"
                variant={"outline"}
                onClick={handleCopyEndpoint}
              >
                <ClipboardIcon />
              </Button>
            </div>

            <SubmitButton
              isPending={pending}
              label="Save changes"
              className="w-auto"
            />
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
