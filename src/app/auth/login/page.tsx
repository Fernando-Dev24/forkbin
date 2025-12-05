"use client";

import { useEffect } from "react";
import { toast } from "sonner";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useAuthForm, useFormTransition } from "@/hooks";
import { LoginSchema } from "@/schemas/auth";
import { FieldSeparator } from "@/components/ui/field";
import { Button, FormError, FormFieldPassword } from "@/components/ui";
import { FiGithub } from "react-icons/fi";
import { FormFieldInput, SubmitButton, Logo } from "@/components/ui";
import { InferZod } from "@/interfaces";
import { onLogin, onSignUpWithProvider } from "@/actions";
import { Provider } from "@supabase/supabase-js";

export default function LoginPage() {
  const { isPasswordType, control, togglePassword, handleSubmit } = useAuthForm(
    LoginSchema,
    {
      email: "",
      password: "",
    }
  );

  const searchParams = useSearchParams();
  const router = useRouter();

  /* TRANSITION */
  const { pending, startTransition, clearError, setError } =
    useFormTransition();

  const onSubmit = (values: InferZod<typeof LoginSchema>) => {
    clearError();

    startTransition(async () => {
      const actionResp = await onLogin(values);
      if (!actionResp.ok) {
        setError(actionResp.message);
        return;
      }

      toast.success("Welcome back!", {
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

  useEffect(() => {
    if (searchParams.get("error") === "unauthorized") {
      toast.error("Unauthorized", {
        description: "Please login to continue",
        position: "top-center",
        duration: 3000,
      });
    }
  }, []);

  return (
    <>
      <div className="mb-10">
        <Logo className="w-10 md:w-15" />
        <h1 className="my-3 text-4xl md:text-5xl font-medium">Login</h1>
      </div>

      <FormError />

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

        <SubmitButton label="Login" isPending={pending} />

        <FieldSeparator className="mb-3">or continue with</FieldSeparator>

        <div className="flex items-center justify-center">
          <Button
            variant={"outline"}
            className="w-3/4"
            type="button"
            onClick={() => signUpProvider("github")}
          >
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
