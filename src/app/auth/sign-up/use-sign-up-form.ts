import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

/* types */
export const SignUpSchema = z
  .object({
    firstName: z.string().min(3, "First name must be at least 3 characters"),
    lastName: z.string().min(3, "Last name must be at least 3 characters"),
    username: z.string().min(3, "Username must be at least 3 characters"),
    email: z.email("Email format is invalid"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type SignUpValues = z.infer<typeof SignUpSchema>;

export const useSignUpForm = () => {
  const { control, handleSubmit } = useForm<SignUpValues>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const [isPasswordType, setIsPasswordType] = useState(true);

  const onSubmit = (values: SignUpValues) => {
    console.log({ values });
  };

  const togglePassword = () => {
    setIsPasswordType(!isPasswordType);
  };

  return {
    control,
    isPasswordType,
    togglePassword,
    onSubmit,
    handleSubmit,
  };
};
