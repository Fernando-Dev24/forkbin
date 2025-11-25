import { InferZod } from "@/interfaces";
import { CreateBinSchema } from "../../../../schemas/bin/create-bin-schema";

type NameFormField = Pick<
  InferZod<typeof CreateBinSchema>,
  "title" | "slug" | "description"
>;

interface FormField {
  name: keyof NameFormField;
  label: string;
  placeholder: string;
  wrapperClassName?: string;
}

export const createBinFields: FormField[] = [
  {
    name: "title",
    label: "Title",
    placeholder: "Enter a title for your bin",
  },
  {
    name: "slug",
    label: "Slug",
    placeholder: "Enter a slug for your bin",
  },
  {
    name: "description",
    label: "Description",
    placeholder: "Enter a short description for your bin",
    wrapperClassName: "col-span-full",
  },
];
