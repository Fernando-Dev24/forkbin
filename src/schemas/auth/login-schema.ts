import z from "zod";

export const LoginSchema = z.object({
  email: z.email("Email format is invalid"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});
