"use client";

import Link from "next/link";
import { Controller } from "react-hook-form";
import { useAuthForm } from "@/hooks";
import { LoginSchema } from "@/schemas/auth";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui";
import { FaGoogle } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { Eye, EyeClosed, TriangleAlert } from "lucide-react";
import { Logo } from "@/components/ui/logo";

export default function LoginPage() {
  const { isPasswordType, control, handleSubmit, onSubmit, togglePassword } =
    useAuthForm(LoginSchema, {
      email: "",
      password: "",
    });

  return (
    <>
      <div className="mb-10">
        <Logo className="w-10 md:w-15" />
        <h1 className="my-3 text-4xl md:text-5xl font-medium">Login</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* EMAIL */}
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel htmlFor="email" className="text-lg">
                Email
              </FieldLabel>
              <Input
                type="email"
                placeholder="email@email.com"
                id="email"
                {...field}
              />
              {fieldState.error ? (
                <FieldError className="flex items-center gap-x-2">
                  <TriangleAlert size={15} />
                  {fieldState.error.message}
                </FieldError>
              ) : (
                <FieldDescription>Enter your email</FieldDescription>
              )}
            </Field>
          )}
        />

        {/* PASSWORD */}
        <Controller
          name="password"
          control={control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel htmlFor="password" className="w-max text-lg">
                Password
              </FieldLabel>
              <div className="relative">
                <Input
                  type={isPasswordType ? "password" : "text"}
                  placeholder="Password"
                  id="password"
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
                  <TriangleAlert size={15} />
                  {fieldState.error.message}
                </FieldError>
              ) : (
                <FieldDescription>
                  It must be at least 6 characters
                </FieldDescription>
              )}
            </Field>
          )}
        />

        <Button type="submit" variant={"default"} className="w-full text-lg">
          Login
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
          Don&apos;t have an account?{" "}
          <Link href={"/auth/sign-up"} className="text-primary font-semibold">
            Sign Up
          </Link>
        </p>
      </form>
    </>
  );
}
