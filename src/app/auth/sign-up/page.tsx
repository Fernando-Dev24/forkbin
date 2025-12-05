"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { type Provider } from "@supabase/supabase-js";
import {
  Button,
  FormError,
  FormFieldInput,
  FormFieldPassword,
  Logo,
} from "@/components/ui";
import { useAuthForm, useFormTransition } from "@/hooks";
import { SignUpSchema } from "@/schemas/auth";
import { FieldSeparator } from "@/components/ui/field";
import { FiGithub } from "react-icons/fi";
import { signUpFields } from "./sign-up-fields";
import { InferZod } from "@/interfaces";
import { SubmitButton } from "@/components/ui";
import { onSignUp, onSignUpWithProvider } from "@/actions";

export default function SignUp() {
  const { control, isPasswordType, togglePassword, handleSubmit } = useAuthForm(
    SignUpSchema,
    {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    }
  );

  const router = useRouter();

  /* TRANSITION */
  const { pending, startTransition, clearError, setError } =
    useFormTransition();

  const onSubmit = (values: InferZod<typeof SignUpSchema>) => {
    clearError();

    startTransition(async () => {
      const response = await onSignUp(values);
      if (!response?.ok) {
        setError(response?.message || "Error creating user");
        return;
      }

      toast.success("User created successfully", {
        position: "top-center",
        duration: 3000,
      });

      router.push("/app");
    });
  };

  const signUpProvider = async (provider: Provider) => {
    clearError();
    const { ok, message, redirectUrl } = await onSignUpWithProvider(provider);
    if (!ok) {
      setError(message);
      return;
    }

    router.push(redirectUrl!);
  };

  return (
    <>
      <div className="mb-10">
        <Logo className="w-10 md:w-15" />
        <h1 className="my-3 text-4xl md:text-5xl font-medium">Sign Up</h1>
      </div>

      <FormError />

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
                  id={name}
                  renderBtn={renderBtn}
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
                id={name}
                key={name}
              />
            );
          })}
        </div>

        <SubmitButton isPending={pending} label="Sign Up" />

        <FieldSeparator className="mb-3">or continue with</FieldSeparator>

        <div className="flex items-center justify-center">
          <Button
            variant={"outline"}
            type="button"
            className="w-3/4"
            onClick={() => signUpProvider("github")}
          >
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
