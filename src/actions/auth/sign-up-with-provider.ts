"use server";

import { Provider } from "@supabase/supabase-js";
import { handleActionError } from "@/helpers";
import { createSSRClient } from "@/lib/supabase/server";

export const onSignUpWithProvider = async (provider: Provider) => {
  try {
    const supabase = await createSSRClient();
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${process.env.SITE_URL}/auth/callback`,
      },
    });

    if (error) {
      return {
        ok: false,
        message: "Error testing",
      };
    }

    return {
      ok: true,
      message: `Login with ${provider}`,
      redirectUrl: data.url,
    };
  } catch (error) {
    const errorResp = handleActionError(error);
    return {
      ok: false,
      message: errorResp.message,
      redirectUrl: null,
    };
  }
};
