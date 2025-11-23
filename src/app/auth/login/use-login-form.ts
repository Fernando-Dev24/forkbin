import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

/* types */
export const LoginSchema = z.object({
  email: z.email("Email format is invalid"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export type LoginValues = z.infer<typeof LoginSchema>;

export const useLoginForm = () => {
  const { control, handleSubmit } = useForm<LoginValues>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [isPasswordType, setIsPasswordType] = useState(true);

  const onSubmit = (values: LoginValues) => {
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
