"use client";

import { useFormError } from "@/store";
import { TriangleAlert } from "lucide-react";

export const FormError = () => {
  const { ok, message } = useFormError();

  return (
    <>
      {!ok && (
        <div className="my-5 py-2 px-4 rounded border border-destructive bg-destructive/10">
          <p className="flex items-center gap-x-2 text-sm text-destructive-foreground">
            <TriangleAlert size={15} />
            {message}
          </p>
        </div>
      )}
    </>
  );
};
