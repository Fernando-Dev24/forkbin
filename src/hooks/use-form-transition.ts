"use client";

import { useFormError } from "@/store";
import { useTransition } from "react";

export const useFormTransition = () => {
  const store = useFormError();
  const [pending, startTransition] = useTransition();

  return {
    ...store,
    pending,
    startTransition,
  };
};
