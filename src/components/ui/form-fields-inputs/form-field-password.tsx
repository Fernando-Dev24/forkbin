"use client";

import { FormFieldProps } from "@/interfaces";
import { Eye, EyeClosed, TriangleAlert } from "lucide-react";
import { Controller, FieldValues } from "react-hook-form";
import { Button } from "../button";
import { Field, FieldLabel, FieldError, FieldDescription } from "../field";
import { Input } from "../input";

interface PasswordFieldProps<T extends FieldValues = FieldValues>
  extends FormFieldProps<T> {
  isPasswordType: boolean;
  togglePassword: () => void;
}

export const FormFieldPassword = <T extends FieldValues = FieldValues>({
  name,
  control,
  isPasswordType,
  togglePassword,
  ...props
}: PasswordFieldProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field className={props.wrapperClassName}>
          <FieldLabel htmlFor={name}>{props.label}</FieldLabel>

          <div className="relative">
            <Input
              type={props.type}
              placeholder={props.placeholder}
              id={name}
              {...field}
            />

            <Button
              type="button"
              size={"icon"}
              variant={"ghost"}
              className="absolute top-0 right-0"
              onClick={togglePassword}
            >
              {isPasswordType ? <Eye /> : <EyeClosed />}
            </Button>
          </div>

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
