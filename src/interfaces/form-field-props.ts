import {
  Control,
  FieldPath,
  FieldPathByValue,
  FieldPathValue,
  FieldValues,
} from "react-hook-form";

export interface FormFieldProps<T extends FieldValues = FieldValues> {
  name: FieldPath<T>;
  placeholder: string;
  label: string;
  type: string;
  id: string;
  control: Control<T>;
  description?: string;
  wrapperClassName?: string;
  className?: string;
  renderLabel?: boolean;
}

export type TagsArrayType = string[];

export interface TagsFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPathByValue<
    TFieldValues,
    TagsArrayType
  > = FieldPathByValue<TFieldValues, TagsArrayType>
> {
  control: Control<TFieldValues>;
  name: TName;
}
