"use server";

import { handleActionError, validateSchema } from "@/helpers";
import { InferZod } from "@/interfaces";
import { prisma } from "@/lib/prisma";
import { createSSRClient } from "@/lib/supabase/server";
import { SignUpSchema } from "@/schemas/auth";

export const onSignUp = async (formData: FormData) => {
  const values = Object.fromEntries(formData.entries());
  const { ok, data, message } = validateSchema(
    SignUpSchema,
    values as InferZod<typeof SignUpSchema>
  );

  if (!ok || !data) {
    return {
      ok,
      message,
    };
  }

  // DONE: Sign up user
  try {
    const { ok, message, userId } = await createUserInSupabase(
      data.email,
      data.password
    );

    if (!ok) {
      return {
        ok,
        message,
      };
    }

    // Create user in prisma
    await prisma.user.create({
      data: {
        id: userId,
        supabaseId: userId!,
        firstName: data.firstName,
        lastName: data.lastName,
        username: data.username,
        email: data.email,
      },
    });

    // if everthing's okay redirect a /app
    return { ok: true, message: "User created successfully" };
  } catch (error) {
    const errorResp = handleActionError(error);
    return { ...errorResp };
  }
};

export const createUserInSupabase = async (email: string, password: string) => {
  try {
    const supabase = await createSSRClient();
    const { data, error } = await supabase.auth.signUp({
      email,
      password: password,
    });

    if (error) {
      return {
        ok: false,
        message: error.message,
      };
    }

    return {
      ok: true,
      userId: data.user?.id,
    };
  } catch (error) {
    return {
      ok: false,
      message: "Error creating user in supabase",
    };
  }
};
