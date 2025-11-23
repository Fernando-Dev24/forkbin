import Link from "next/link";
import { Button } from "./button";
import { ComponentProps } from "react";

// this is the way we can type shadcn's components
type ButtonProps = ComponentProps<typeof Button>;

interface Props extends ButtonProps {
  href: string;
  children: React.ReactNode;
}

export const LinkButton = ({ href, children, ...props }: Props) => {
  return (
    <Button asChild {...props}>
      <Link href={href}>{children}</Link>
    </Button>
  );
};
