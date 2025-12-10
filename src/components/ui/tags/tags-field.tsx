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
import { Controller, FieldPathByValue, FieldValues } from "react-hook-form";
import { TagsArrayType, TagsFieldProps } from "@/interfaces";

export const TagsField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPathByValue<
    TFieldValues,
    TagsArrayType
  > = FieldPathByValue<TFieldValues, TagsArrayType>
>({
  control,
  name,
}: TagsFieldProps<TFieldValues, TName>) => {
  const [newTag, setNewTag] = useState<string>("");
  const [tags, setTags] =
    useState<{ id: string; label: string }[]>(DEFAULT_TAGS);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        const tagsValue = field.value as TagsArrayType;

        const handleRemove = (value: string) => {
          if (!tagsValue.includes(value)) {
            return;
          }
          field.onChange(tagsValue.filter((v) => v !== value));
        };

        const handleSelect = (value: string) => {
          if (tagsValue.includes(value)) {
            handleRemove(value);
            return;
          }
          field.onChange([...tagsValue, value]);
        };

        const handleCreateTag = () => {
          setTags((prev) => [
            ...prev,
            {
              id: newTag,
              label: newTag,
            },
          ]);
          field.onChange([...tagsValue, newTag]);
          setNewTag("");
        };

        return (
          <Tags>
            <TagsTrigger>
              {tagsValue.map((tag) => (
                <TagsValue
                  key={tag}
                  onRemove={() => handleRemove(tag)}
                  className="capitalize"
                >
                  {tags.find((t) => t.id === tag)?.label || tag}
                </TagsValue>
              ))}
            </TagsTrigger>

            <TagsContent>
              <TagsInput
                onValueChange={setNewTag}
                placeholder="Search tag..."
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
                      key={tag.id}
                      onSelect={handleSelect}
                      value={tag.id}
                    >
                      {tag.label}
                      {tagsValue.includes(tag.id) && (
                        <CheckIcon
                          className="text-muted-foreground"
                          size={14}
                        />
                      )}
                    </TagsItem>
                  ))}
                </TagsGroup>
              </TagsList>
            </TagsContent>
          </Tags>
        );
      }}
    />
  );
};
