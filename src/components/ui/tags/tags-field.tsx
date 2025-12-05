"use client";

import { useState } from "react";
import { DEFAULT_TAGS } from "./default-tags";
import {
  TagsEmpty,
  TagsGroup,
  TagsItem,
  TagsList,
} from "../shadcn-io/tags/index";
import {
  Tags,
  TagsContent,
  TagsInput,
  TagsTrigger,
  TagsValue,
} from "../shadcn-io/tags";
import { Button } from "../button";
import { CheckIcon, PlusIcon } from "lucide-react";
import { ControllerRenderProps } from "react-hook-form";
import { CreateBinSchema } from "@/schemas/bin";

interface Props {
  field: ControllerRenderProps<typeof CreateBinSchema, "tags">;
}

export const TagsField = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const [newTag, setNewTag] = useState("");
  const [tags, setTags] = useState([...DEFAULT_TAGS]);

  const handleRemove = (value: string) => {
    if (!selected.includes(value)) return;
    console.log(`remove: ${value}`);
    setSelected(selected.filter((tag) => tag !== value));
  };

  const handleSelect = (value: string) => {
    if (selected.includes(value)) {
      handleRemove(value);
      return;
    }

    console.log(`selected: ${value}`);
    setSelected([...selected, value]);
  };

  const handleCreateTag = () => {
    console.log(`created: ${newTag}`);
    setTags((prev) => [...prev, { value: newTag, label: newTag }]);
    setSelected((prev) => [...prev, newTag]);
    setNewTag("");
  };

  return (
    <Tags>
      <TagsTrigger>
        {selected.map((tag) => (
          <TagsValue key={tag} onRemove={() => handleRemove(tag)}>
            {tags.find((t) => t.value === tag)?.label}
          </TagsValue>
        ))}
      </TagsTrigger>
      <TagsContent>
        <TagsInput
          onValueChange={setNewTag}
          placeholder="Search tag..."
          id="tags"
        />
        <TagsList>
          <TagsEmpty>
            <Button
              className="mx-auto flex cursor-pointer items-center gap-2"
              onClick={handleCreateTag}
              type="button"
              variant={"outline"}
            >
              <PlusIcon className="text-muted-foreground" size={14} />
              Create new tag: {newTag}
            </Button>
          </TagsEmpty>
          <TagsGroup>
            {tags.map((tag) => (
              <TagsItem
                key={tag.value}
                onSelect={handleSelect}
                value={tag.value}
              >
                {tag.label}
                {selected.includes(tag.value) && (
                  <CheckIcon className="text-muted-foreground" size={14} />
                )}
              </TagsItem>
            ))}
          </TagsGroup>
        </TagsList>
      </TagsContent>
    </Tags>
  );
};
