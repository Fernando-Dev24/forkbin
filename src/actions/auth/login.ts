"use server";

import { handleActionError, validateSchema } from "@/helpers";
import { InferZod } from "@/interfaces";
import { createSSRClient } from "@/lib/supabase/server";
import { LoginSchema } from "@/schemas/auth";

type FormValues = InferZod<typeof LoginSchema>;

export const onLogin = async (values: FormValues) => {
  const { ok, message, data } = validateSchema(LoginSchema, values);

  // Schema validation
  if (!ok || !data) {
    return {
      ok,
      message,
    };
  }

  try {
    const supabase = await createSSRClient();
    const { error } = await supabase.auth.signInWithPassword({
      ...data,
    });

    // Give the state the error message
    if (error) {
      return {
        ok: false,
        message: error.message,
      };
    }

    return {
      ok: true,
      message: "Login successfully",
    };
  } catch (error) {
    handleActionError(error);
    return {
      ok: false,
      message: "Something went wrong",
    };
  }
};
