export const renderTags = (tags: string[]) => {
  if (tags.length <= 4) {
    return tags;
  }

  return [tags[0], tags[1], tags[2], tags[3], `+${tags.length - 4} more`];
};
