"use server";

import { handleActionError } from "@/helpers";
import { createSSRClient } from "@/lib/supabase/server";

export const onSignOut = async () => {
  try {
    const supabase = await createSSRClient();
    const { error } = await supabase.auth.signOut();

    if (error !== null) {
      return {
        ok: false,
        message: error.message,
      };
    }

    return {
      ok: true,
      message: "",
    };
  } catch (error) {
    return handleActionError(error);
  }
};
