import { TriangleAlert } from "lucide-react";

interface Props {
  message: string;
}

export const FormError = ({ message }: Props) => {
  return (
    <div className="my-5 py-2 px-4 rounded border border-destructive bg-destructive/10">
      <p className="flex items-center gap-x-2 text-sm text-destructive-foreground">
        <TriangleAlert size={15} />
        {message}
      </p>
    </div>
  );
};
