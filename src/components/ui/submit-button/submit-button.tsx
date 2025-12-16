"use client";

import { Button } from "../button";
import { Spinner } from "../spinner";

interface Props {
  label: string;
  isPending: boolean;
  className?: string;
}

const defaultClassName =
  "w-full disabled:bg-muted disabled:text-muted-foreground";

export const SubmitButton = ({
  label,
  isPending,
  className = defaultClassName,
}: Props) => {
  return (
    <Button type="submit" disabled={isPending} className={className}>
      {isPending && <Spinner />}
      {isPending ? "Loading..." : label}
    </Button>
  );
};
