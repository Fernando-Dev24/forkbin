import { InferZod } from "@/interfaces";
import { SignUpSchema } from "@/schemas/auth";

// This replaces enums use
const TYPES = {
  TEXT: "text",
  PASSWORD: "password",
  EMAIL: "email",
} as const;

type FieldType = (typeof TYPES)[keyof typeof TYPES];

interface SignUpField {
  name: keyof InferZod<typeof SignUpSchema>;
  placeholder: string;
  label: string;
  renderBtn?: boolean;
  type: FieldType;
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
    renderBtn: false,
  },
];
