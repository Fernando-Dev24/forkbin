import { Spinner } from "@/components/ui/spinner";

export const EditorLoading = () => {
  return (
    <div className="flex items-center justify-center gap-x-5">
      <Spinner />
      <p className="text-center">Loading editor...</p>
    </div>
  );
};
