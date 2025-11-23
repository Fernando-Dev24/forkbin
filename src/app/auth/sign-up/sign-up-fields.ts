import { SignUpSchema } from "./use-sign-up-form";
import z from "zod";

interface SignUpField {
  name: keyof z.infer<typeof SignUpSchema>;
  placeholder: string;
  label: string;
  renderBtn?: boolean;
  type: "text" | "password" | "email";
}

export const signUpFields: SignUpField[] = [
  {
    name: "firstName",
    label: "First name",
    placeholder: "First name",
    type: "text",
  },
  {
    name: "lastName",
    label: "Last name",
    placeholder: "Last name",
    type: "text",
  },
  {
    name: "username",
    label: "Username",
    placeholder: "@username",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Email",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Password",
    type: "password",
    renderBtn: true,
  },
  {
    name: "confirmPassword",
    label: "Confirm password",
    placeholder: "Confirm password",
    type: "password",
    renderBtn: true,
  },
];
