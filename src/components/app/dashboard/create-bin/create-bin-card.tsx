"use client";

import { Button, FormFieldInput } from "@/components/ui";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useCreateBinForm } from "@/hooks";
import { CreateBinSchema } from "@/schemas/bin";
import { FilePlus, X } from "lucide-react";
import { createBinFields } from "./create-bin-fields";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Checkbox } from "@/components/ui/checkbox";
import { useId } from "react";

export const CreateBinCard = () => {
  const { control, reset, handleSubmit, onSubmit } = useCreateBinForm(
    CreateBinSchema,
    {
      title: "",
      slug: "",
      description: "",
      isPublic: false,
      isMockApi: false,
    }
  );

  const uniqueId = useId();

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Create a new bin</CardTitle>
          <CardDescription>
            Fill all fields to start editing your new bin
          </CardDescription>
        </CardHeader>

        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent className="space-y-5 mb-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {createBinFields.map(({ name, label, placeholder, ...rest }) => (
                <FormFieldInput
                  key={name}
                  control={control}
                  id={`${uniqueId}-${name}`}
                  label={label}
                  name={name}
                  placeholder={placeholder}
                  type="text"
                  wrapperClassName={rest.wrapperClassName}
                />
              ))}
            </div>

            <FieldSeparator />

            {/* CHECKBOXES */}
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
          </CardContent>

          <CardFooter className="space-x-5">
            <Button type="submit">
              <FilePlus />
              Create bin
            </Button>
            <Button variant={"outline"} type="button" onClick={() => reset()}>
              <X />
              Cancel
            </Button>
          </CardFooter>
        </form>
      </Card>
    </>
  );
};
