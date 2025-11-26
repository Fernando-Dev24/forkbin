"use client";

import Link from "next/link";
import { useAuthForm } from "@/hooks";
import { LoginSchema } from "@/schemas/auth";
import { FieldSeparator } from "@/components/ui/field";
import { Button, FormFieldPassword } from "@/components/ui";
import { FaGoogle } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { Logo } from "@/components/ui/logo";
import { FormFieldInput } from "@/components/ui";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const { isPasswordType, control, handleSubmit, onSubmit, togglePassword } =
    useAuthForm(LoginSchema, {
      email: "",
      password: "",
    });

  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("error") === "unauthorized") {
      console.log("credentials error");
    }
  }, []);

  return (
    <>
      <div className="mb-10">
        <Logo className="w-10 md:w-15" />
        <h1 className="my-3 text-4xl md:text-5xl font-medium">Login</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* EMAIL */}
        <FormFieldInput
          control={control}
          name="email"
          label="Email"
          placeholder="email@email.com"
          type="email"
          description="Enter your email"
          id="email"
        />

        {/* PASSWORD */}
        <FormFieldPassword
          control={control}
          name="password"
          label="Password"
          id="password"
          placeholder="Enter your password"
          type={isPasswordType ? "password" : "text"}
          description="It must be at least 6 characters long"
          isPasswordType={isPasswordType}
          togglePassword={togglePassword}
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
