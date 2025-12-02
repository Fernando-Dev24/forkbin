import { useForm } from "react-hook-form";
import { SearchBinSchema } from "@/schemas/projects";
import { InferZod } from "@/interfaces";
import { FormFieldInput } from "@/components/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { Spinner } from "@/components/ui/spinner";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useTransition } from "react";

type SearchBinValues = InferZod<typeof SearchBinSchema>;
const DEBOUNCE_DELAY = 1000;

export const ProjectSearch = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [pending, startTransition] = useTransition();
  const { control, handleSubmit, watch } = useForm<SearchBinValues>({
    resolver: zodResolver(SearchBinSchema),
    defaultValues: {
      term: searchParams.get("query") || "",
    },
  });

  const term = watch("term");

  const cb = useCallback(() => {
    if (!term) return;
    const timeoutId = setTimeout(() => {
      // TODO: Redirect user with query param
      console.log(term);
    }, DEBOUNCE_DELAY);

    // Clean timeout when the usser types another letter
    return () => clearTimeout(timeoutId);
  }, [term]);

  useEffect(() => cb(), [cb]);

  return (
    <form className="w-full md:w-1/4">
      <div className="relative">
        <FormFieldInput
          control={control}
          id="search-project-query"
          name="term"
          placeholder="Search bin by title"
          type="text"
          label="Search bin"
          wrapperClassName="gap-0"
        />
        {pending && (
          <Spinner className="absolute top-1/2 -translate-y-1/2 right-3" />
        )}
      </div>
      <button className="hidden" type="submit" />
    </form>
  );
};
