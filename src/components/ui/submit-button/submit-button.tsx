"use client";

import { Button } from "../button";
import { Spinner } from "../spinner";

interface Props {
  label: string;
  isPending: boolean;
}

export const SubmitButton = ({ label, isPending }: Props) => {
  return (
    <Button
      type="submit"
      disabled={isPending}
      className="w-full text-lg disabled:bg-muted disabled:text-muted-foreground"
    >
      {isPending && <Spinner />}
      {isPending ? "Loading..." : label}
    </Button>
  );
};
