interface FormSchemaError {
  ok: boolean;
  message: string;
}

export type FormErrorState = FormSchemaError | null;
