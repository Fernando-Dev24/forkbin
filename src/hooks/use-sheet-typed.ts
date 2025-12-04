import { useSheet } from "@/store";

export const useSheetType = <T>() => {
  const store = useSheet();

  return {
    ...store,
    itemToEdit: store.itemToEdit as T | null,
    onToggle: (open: boolean, itemToEdit: T | null) =>
      store.onToggle(open, itemToEdit),
  };
};
