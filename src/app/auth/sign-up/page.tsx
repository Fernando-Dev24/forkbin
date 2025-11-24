"use client";

import Link from "next/link";
import { Controller } from "react-hook-form";
import { Button, Logo } from "@/components/ui";
import { useAuthForm } from "@/hooks";
import { SignUpSchema } from "@/schemas/auth";
import {
  Field,
  FieldLabel,
  FieldError,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { TriangleAlert, EyeClosed, Eye } from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { signUpFields } from "./sign-up-fields";

export default function SignUp() {
  const { control, isPasswordType, handleSubmit, onSubmit, togglePassword } =
    useAuthForm(SignUpSchema, {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

  return (
    <>
      <div className="mb-10">
        <Logo className="w-10 md:w-15" />
        <h1 className="my-3 text-4xl md:text-5xl font-medium">Sign Up</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* EMAIL */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {signUpFields.map(({ name, renderBtn, ...restProps }) => {
            if (name === "password" || name === "confirmPassword") {
              return (
                <Controller
                  name={name}
                  control={control}
                  key={name}
                  render={({ field, fieldState }) => (
                    <Field>
                      <FieldLabel htmlFor={name} className="text-lg">
                        {restProps.label}
                      </FieldLabel>
                      <div className="relative">
                        <Input
                          type={isPasswordType ? "password" : "text"}
                          placeholder={restProps.placeholder}
                          id={name}
                          {...field}
                        />
                        {renderBtn && (
                          <Button
                            type="button"
                            size={"icon"}
                            variant={"ghost"}
                            className="absolute top-0 right-0"
                            onClick={togglePassword}
                          >
                            {isPasswordType ? <Eye /> : <EyeClosed />}
                          </Button>
                        )}
                      </div>
                      {fieldState.error && (
                        <FieldError className="flex items-center gap-x-2">
                          <TriangleAlert size={15} />
                          {fieldState.error.message}
                        </FieldError>
                      )}
                    </Field>
                  )}
                />
              );
            }

            return (
              <Controller
                name={name}
                control={control}
                key={name}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel htmlFor={name} className="text-lg">
                      {restProps.label}
                    </FieldLabel>
                    <div className="relative">
                      <Input
                        type={restProps.type}
                        placeholder={restProps.placeholder}
                        id={name}
                        {...field}
                      />
                    </div>
                    {fieldState.error && (
                      <FieldError className="flex items-center gap-x-2">
                        <TriangleAlert size={15} />
                        {fieldState.error.message}
                      </FieldError>
                    )}
                  </Field>
                )}
              />
            );
          })}
        </div>

        <Button type="submit" variant={"default"} className="w-full text-lg">
          Sign up
        </Button>

        <FieldSeparator className="mb-3">or continue with</FieldSeparator>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-5">
          <Button variant={"outline"} type="button">
            <FaGoogle />
            Google
          </Button>
          <Button variant={"outline"} type="button">
            <FiGithub />
            GitHub
          </Button>
        </div>

        <p className="text-muted-foreground text-sm md:text-base">
          Do you have an account?{" "}
          <Link href={"/auth/login"} className="text-primary font-semibold">
            Login
          </Link>
        </p>
      </form>
    </>
  );
}
