import { Control, FieldPath, FieldValues } from "react-hook-form";

export interface FormFieldProps<T extends FieldValues = FieldValues> {
  name: FieldPath<T>;
  placeholder: string;
  label: string;
  type: string;
  id: string;
  control: Control<T>;
  description?: string;
  wrapperClassName?: string;
}
