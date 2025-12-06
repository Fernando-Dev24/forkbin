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
import { CheckIcon, PlusIcon } from "lucide-react";
import { Button } from "../button";
import { ControllerRenderProps } from "react-hook-form";

interface Props {
  field: ControllerRenderProps<
    {
      title: string;
      description: string;
      slug: string;
      isPublic: boolean;
      isMockApi: boolean;
      tags: string[];
    },
    "tags"
  >;
}

export const TagsField = ({ field }: Props) => {
  const [newTag, setNewTag] = useState<string>("");
  const [tags, setTags] =
    useState<{ id: string; label: string }[]>(DEFAULT_TAGS);

  const handleRemove = (value: string) => {
    if (!field.value.includes(value)) {
      return;
    }
    field.onChange(field.value.filter((v) => v !== value));
  };

  const handleSelect = (value: string) => {
    if (field.value.includes(value)) {
      handleRemove(value);
      return;
    }
    field.onChange([...field.value, value]);
  };

  const handleCreateTag = () => {
    setTags((prev) => [
      ...prev,
      {
        id: newTag,
        label: newTag,
      },
    ]);
    field.onChange([...field.value, newTag]);
    setNewTag("");
  };
  return (
    <Tags>
      <TagsTrigger>
        {field.value.map((tag) => (
          <TagsValue key={tag} onRemove={() => handleRemove(tag)}>
            {tags.find((t) => t.id === tag)?.label}
          </TagsValue>
        ))}
      </TagsTrigger>

      <TagsContent>
        <TagsInput onValueChange={setNewTag} placeholder="Search tag..." />
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
              <TagsItem key={tag.id} onSelect={handleSelect} value={tag.id}>
                {tag.label}
                {field.value.includes(tag.id) && (
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
