import { NextResponse } from "next/server";
import { createSSRClient } from "@/lib/supabase/server";
import { syncOauthUser } from "@/actions";

export async function GET(request: Request) {
  const requestURL = new URL(request.url);
  const code = requestURL.searchParams.get("code");

  if (code) {
    const supabase = await createSSRClient();
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error && data.user) {
      try {
        await syncOauthUser(data.user);
      } catch (error) {
        console.error("Error handling Oauth user", error);
      }
    }
  }

  return NextResponse.redirect(`${process.env.SITE_URL}/app/dashboard`);
}
