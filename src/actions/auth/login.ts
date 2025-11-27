"use server";

import { handleActionError, validateSchema } from "@/helpers";
import { createSSRClient } from "@/lib/supabase/server";
import { LoginSchema } from "@/schemas/auth";

export const onLogin = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const { ok, message, data } = validateSchema(LoginSchema, {
    email,
    password,
  });

  // Schema validation
  if (!ok || !data) {
    return {
      ok,
      message,
    };
  }

  // TODO: Login user
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
