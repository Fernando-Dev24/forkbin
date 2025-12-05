"use client";

import { Button, LinkButton, SubmitButton } from "@/components/ui";
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  Sheet,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { Controller } from "react-hook-form";
import { createBinFields } from "../create-bin/create-bin-fields";
import { FormFieldInput } from "../../../ui/form-fields-inputs/form-field-input";
import { Separator } from "@/components/ui/separator";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field";
import { Checkbox } from "@/components/ui/checkbox";
import { useEditBinMetadata } from "@/hooks";

export const EditBinSheet = () => {
  const {
    isOpen,
    itemToEdit,
    control,
    uniqueId,
    pending,
    handleSubmit,
    onSubmit,
    onToggle,
  } = useEditBinMetadata();

  return (
    <Sheet open={isOpen} onOpenChange={(open) => onToggle(open, itemToEdit)}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{itemToEdit?.title}</SheetTitle>
          <SheetDescription>
            Edit your bin metadata. Important: If you need to change the API
            mock form, please go to{" "}
            <LinkButton
              href={`app/b/${itemToEdit?.id}`}
              variant={"link"}
              size={"sm"}
            >
              edit
            </LinkButton>
            , change the content and save changes
          </SheetDescription>
        </SheetHeader>

        {/* FORM */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {createBinFields.map((field) => (
            <div className="px-4" key={field.name}>
              <FormFieldInput
                control={control}
                name={field.name}
                label={field.label}
                placeholder={field.placeholder}
                type="text"
                id={`${uniqueId}-${field.label}`}
                renderLabel
              />
            </div>
          ))}

          <Separator className="my-5" />

          <div className="px-4 my-5 space-y-5">
            <Controller
              name="isPublic"
              control={control}
              render={({ field }) => (
                <Field orientation={"horizontal"}>
                  <Checkbox
                    id={`${uniqueId}-isPublic`}
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                  <FieldContent>
                    <FieldLabel htmlFor={`${uniqueId}-isPublic`}>
                      Public
                    </FieldLabel>
                    <FieldDescription>
                      If you mark your bin as public, it counts on community
                      stats, and anyone may fork it
                    </FieldDescription>
                  </FieldContent>
                </Field>
              )}
            />
          </div>

          <SheetFooter>
            <SubmitButton isPending={pending} label="Save changes" />
            <SheetClose asChild>
              <Button variant="outline">Close</Button>
            </SheetClose>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
};
