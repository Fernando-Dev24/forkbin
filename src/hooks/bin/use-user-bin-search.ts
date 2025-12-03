import { InferZod } from "@/interfaces";
import { SearchBinSchema } from "@/schemas/projects";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";

type SearchBinValues = InferZod<typeof SearchBinSchema>;
const DEBOUNCE_DELAY = 500;

export const useUserBinSearch = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { control, watch, trigger, reset } = useForm<SearchBinValues>({
    resolver: zodResolver(SearchBinSchema),
    defaultValues: {
      term: searchParams.get("query") || "",
    },
  });

  const term = watch("term");

  const cb = useCallback(() => {
    const timeoutId = setTimeout(async () => {
      const newSearchParams = new URLSearchParams(searchParams);

      // Clean and return without title search param
      if (!term) {
        newSearchParams.delete("title");
        router.replace(`${pathname}?${newSearchParams.toString()}`);
        return;
      }

      // DONE: Validate field using trigger fn from RHF
      const isValid = await trigger("term");
      if (!isValid) return;

      if (term.trim()) {
        newSearchParams.set("title", term.trim());
      } else {
        newSearchParams.delete("title");
      }

      // DONE: Reemplazar la URL para que se actualice la UI y el valor sea capturable en el server action
      router.replace(`${pathname}?${newSearchParams.toString()}`);
    }, DEBOUNCE_DELAY);

    // Clean timeout when the usser types another letter
    return () => clearTimeout(timeoutId);
  }, [term]);

  useEffect(() => cb(), [cb]);

  return {
    control,
    reset,
  };
};
