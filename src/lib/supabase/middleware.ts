import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

function requestAuth(pathname: string) {
  return pathname.startsWith("/app");
}

function hasAuth(pathname: string) {
  return pathname.startsWith("/auth");
}

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value }) =>
            supabaseResponse.cookies.set(name, value)
          );
        },
      },
    }
  );

  // Protect routes
  const { pathname } = request.nextUrl;
  const { data } = await supabase.auth.getClaims();
  const user = data?.claims;

  if (requestAuth(pathname) && !user) {
    const url = new URL("/auth/login", request.url);
    url.searchParams.set("error", "unauthorized");
    return NextResponse.redirect(url);
  }

  if (hasAuth(pathname) && user) {
    const url = new URL("/app", request.url);
    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}
