"use client";

import { useId } from "react";
import { Button, FormFieldInput } from "@/components/ui";
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

export const CreateBinDialog = () => {
  const { control, handleSubmit, onSubmit } = useCreateBinForm(
    CreateBinSchema,
    {
      title: "",
      slug: "",
      description: "",
      isMockApi: false,
      isPublic: false,
    }
  );

  const uniqueId = useId();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Create new bin</Button>
      </DialogTrigger>

      {/* DIALOG CONTENT */}
      <DialogContent className="sm:max-w-[500px] lg:max-w-[50%] overflow-y-auto">
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
            />
          ))}

          <Separator className="my-5" />

          <div className="mt-5 space-y-5">
            <Field orientation={"horizontal"}>
              <Checkbox id={`${uniqueId}-isPublic`} />
              <FieldContent>
                <FieldLabel htmlFor={`${uniqueId}-isPublic`}>Public</FieldLabel>
                <FieldDescription>
                  If you mark your bin as public, it counts on community stats,
                  and anyone may fork it
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
                  fill the schema: METHOD {">"} STATUS CODE {">"} ENDPOINT {">"}{" "}
                  response data. You can change this later.
                </FieldDescription>
              </FieldContent>
            </Field>
          </div>

          <Separator className="my-5" />

          <DialogFooter className="mt-5">
            <Button type="submit">
              <FilePlus />
              Create bin
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
    </Dialog>
  );
};
