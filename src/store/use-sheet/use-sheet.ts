import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface SheetState {
  isOpen: boolean;
  itemToEdit: unknown;

  onToggle: (open: boolean, itemToEdit: unknown) => void;
}

export const useSheet = create<SheetState>()(
  devtools((set) => ({
    isOpen: false,
    itemToEdit: null,

    onToggle: (open, itemToEdit) =>
      set({
        isOpen: open,
        itemToEdit: open ? itemToEdit : null,
      }),
  }))
);
