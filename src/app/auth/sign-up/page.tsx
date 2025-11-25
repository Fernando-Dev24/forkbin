"use client";

import Link from "next/link";
import {
  Button,
  FormFieldInput,
  FormFieldPassword,
  Logo,
} from "@/components/ui";
import { useAuthForm } from "@/hooks";
import { SignUpSchema } from "@/schemas/auth";
import { FieldSeparator } from "@/components/ui/field";
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {signUpFields.map(({ name, renderBtn, ...restProps }) => {
            if (name === "password" || name === "confirmPassword") {
              return (
                <FormFieldPassword
                  control={control}
                  isPasswordType={isPasswordType}
                  label={restProps.label}
                  placeholder={restProps.placeholder}
                  name={name}
                  togglePassword={togglePassword}
                  type={isPasswordType ? "password" : "text"}
                  key={name}
                />
              );
            }

            return (
              <FormFieldInput
                control={control}
                label={restProps.label}
                placeholder={restProps.placeholder}
                name={name}
                type="text"
                key={name}
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
