import { useForm } from "react-hook-form";
import { SearchBinSchema } from "@/schemas/projects";
import { InferZod } from "@/interfaces";
import { FormFieldInput } from "@/components/ui";

type SearchBinValues = InferZod<typeof SearchBinSchema>;

export const ProjectSearch = () => {
  const { control, handleSubmit } = useForm<SearchBinValues>({
    defaultValues: {
      query: "",
    },
  });

  const onSubmit = (values: SearchBinValues) => {
    console.log({ values });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full md:w-1/4">
      <FormFieldInput
        control={control}
        id="search-project-query"
        name="query"
        placeholder="Search bin by title"
        type="text"
        label="Search bin"
        wrapperClassName="gap-0"
      />
    </form>
  );
};
