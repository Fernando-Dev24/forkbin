import { JsonValue } from "@prisma/client/runtime/library";
import { FieldValues, FieldPathByValue, Control } from "react-hook-form";

export interface EditorFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPathByValue<TFieldValues, string> = FieldPathByValue<
    TFieldValues,
    string
  >
> {
  control: Control<TFieldValues>;
  name: TName;
  content: JsonValue;
  schema?: any;
}
