import { Logo, LinkButton } from "@/components/ui";
import { createSSRClient } from "@/lib/supabase/server";

export const Navbar = async () => {
  const supabase = await createSSRClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <nav className="p-5 flex justify-between items-center">
      {/* LOGO */}
      <Logo />

      <div className="flex items-center md:gap-x-5">
        {user ? (
          <LinkButton href="/app/dashboard" variant={"outline"}>
            Dashboard
          </LinkButton>
        ) : (
          <>
            <LinkButton
              href="/auth/login"
              variant={"outline"}
              className="hidden md:block"
            >
              Sign In
            </LinkButton>
            <LinkButton href="/auth/sign-up" variant={"default"}>
              Sign Up
            </LinkButton>
          </>
        )}
      </div>
    </nav>
  );
};
