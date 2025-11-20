import { Button, Logo } from "@/components/ui";

export const Navbar = () => {
  return (
    <nav className="p-5 flex justify-between items-center">
      {/* LOGO */}
      <Logo />

      <div className="flex items-center md:gap-x-5">
        <Button variant="outline" className="md:block hidden">
          Login
        </Button>
        <Button variant="default">Sign Up</Button>
      </div>
    </nav>
  );
};
