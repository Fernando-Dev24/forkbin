import { Button, FormFieldInput } from "@/components/ui";
import { useUserBinSearch } from "@/hooks";
import { Trash } from "lucide-react";

export const ProjectSearch = () => {
  const { control, reset } = useUserBinSearch();

  return (
    <form className="w-full md:w-1/4 flex gap-x-2">
      <FormFieldInput
        control={control}
        id="search-project-query"
        name="term"
        placeholder="Search bin by title"
        type="text"
        label="Search bin"
        wrapperClassName="gap-0"
      />
      <Button
        type="button"
        variant={"ghost"}
        size={"icon"}
        onClick={() => reset()}
      >
        <Trash />
      </Button>
    </form>
  );
};
