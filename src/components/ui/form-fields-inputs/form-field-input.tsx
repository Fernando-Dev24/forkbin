"use client";

import { Controller, type FieldValues } from "react-hook-form";
import { Field, FieldDescription, FieldError, FieldLabel } from "../field";
import { Input } from "../input";
import { FormFieldProps } from "@/interfaces";

export const FormFieldInput = <T extends FieldValues = FieldValues>({
  name,
  control,
  id,
  ...props
}: FormFieldProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field className={props.wrapperClassName}>
          <FieldLabel htmlFor={id}>{props.label}</FieldLabel>

          <Input
            type={props.type}
            placeholder={props.placeholder}
            id={id}
            {...field}
          />

          {fieldState.error ? (
            <FieldError className="flex items-center gap-x-2">
              {fieldState.error.message}
            </FieldError>
          ) : (
            <FieldDescription>{props.description}</FieldDescription>
          )}
        </Field>
      )}
    />
  );
};
