"use client";

import { useFormError } from "@/store";
import { AlertCircleIcon, TriangleAlert } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../alert";

export const FormError = () => {
  const { ok, message } = useFormError();

  return (
    <>
      {!ok && (
        <Alert variant={"destructive"}>
          <AlertCircleIcon />
          <AlertTitle>Something went wrong</AlertTitle>
          <AlertDescription>
            <p>{message}</p>
          </AlertDescription>
        </Alert>
      )}
    </>
  );
};
