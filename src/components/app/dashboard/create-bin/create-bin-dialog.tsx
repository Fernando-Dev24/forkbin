"use client";

import { useEffect, useId, useState } from "react";
import { Button, FormFieldInput, TagsField } from "@/components/ui";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { createBinFields } from "./create-bin-fields";
import { useCreateBinForm } from "@/hooks";
import { CreateBinSchema } from "@/schemas/bin";
import { Separator } from "@/components/ui/separator";
import { FilePlus, X } from "lucide-react";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field";
import { Checkbox } from "@/components/ui/checkbox";
import { Controller } from "react-hook-form";
import clsx from "clsx";
import { Spinner } from "@/components/ui/spinner";
import { slugify } from "@/helpers/slugify/slugify";

export const CreateBinDialog = () => {
  const { control, watch, setValue, pending, handleSubmit, onSubmit } =
    useCreateBinForm(CreateBinSchema, {
      title: "",
      slug: "",
      description: "",
      tags: [],
      isMockApi: false,
      isPublic: false,
    });

  const [isOpen, setIsOpen] = useState(false);

  const uniqueId = useId();
  const title = watch("title");

  useEffect(() => {
    if (title) {
      setValue("slug", slugify(title));
    }
  }, [title]);

  return (
    <Dialog
      modal={false}
      open={isOpen}
      onOpenChange={(open) => setIsOpen(open)}
    >
      <DialogTrigger asChild>
        <Button variant="default" className="w-full md:w-auto">
          Create new bin
        </Button>
      </DialogTrigger>

      {/* DIALOG CONTENT */}
      <div
        className={clsx("fixed top-0 left-0 z-10 w-full h-screen bg-black/50", {
          "hidden!": !isOpen,
          "block!": isOpen,
        })}
      >
        <DialogContent className="max-w-[90%] max-h-[80%] md:h-auto lg:max-w-[50%] overflow-y-auto">
          <DialogTitle>Create a new bin</DialogTitle>
          <DialogDescription>
            Fill all fields to start editing your new bin
          </DialogDescription>

          <form onSubmit={handleSubmit(onSubmit)}>
            {createBinFields.map((field) => (
              <FormFieldInput
                control={control}
                label={field.label}
                name={field.name}
                placeholder={field.placeholder}
                key={field.name}
                id={`${uniqueId}-${field.name}`}
                type="text"
                renderLabel
              />
            ))}

            <div>
              <p className="text-sm mb-3">Tags</p>
              <TagsField control={control} name="tags" />
            </div>

            <Separator className="my-5" />

            <div className="mt-5 space-y-5">
              <Field orientation={"horizontal"}>
                <Checkbox id={`${uniqueId}-isPublic`} />
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

              <Field orientation={"horizontal"}>
                <Checkbox id={`${uniqueId}-isMockApi`} />
                <FieldContent>
                  <FieldLabel htmlFor={`${uniqueId}-isMockApi`}>
                    Mock API
                  </FieldLabel>
                  <FieldDescription>
                    Consider that if you mark this bin as mock API, it will must
                    fill the schema: METHOD {">"} STATUS CODE {">"} ENDPOINT{" "}
                    {">"} response data. You can change this later.
                  </FieldDescription>
                </FieldContent>
              </Field>
            </div>

            <Separator className="my-5" />

            <DialogFooter className="mt-5">
              <Button type="submit">
                {pending ? (
                  <>
                    <Spinner></Spinner>
                    Loading...
                  </>
                ) : (
                  <>
                    <FilePlus />
                    Create bin
                  </>
                )}
              </Button>

              <DialogClose asChild>
                <Button type="button" variant={"outline"}>
                  <X />
                  Cancel
                </Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </DialogContent>
      </div>
    </Dialog>
  );
};
