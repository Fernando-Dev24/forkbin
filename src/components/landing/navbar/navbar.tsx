import { Button, Logo } from "@/components/ui";
import { LinkButton } from "../../ui/link-button";

export const Navbar = () => {
  return (
    <nav className="p-5 flex justify-between items-center">
      {/* LOGO */}
      <Logo />

      <div className="flex items-center md:gap-x-5">
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
      </div>
    </nav>
  );
};
