import { create } from "zustand";
import { persist } from "zustand/middleware";

const VIEW_OPTIONS = {
  grid: "grid",
  table: "table",
} as const;

export type ViewOption = keyof typeof VIEW_OPTIONS;

interface ViewState {
  viewAs: ViewOption;
  setView: (view: ViewOption) => void;
}

export const useView = create<ViewState>()(
  persist(
    (set) => ({
      viewAs: "grid",

      setView: (view) => {
        set({ viewAs: view });
      },
    }),
    {
      name: "view-storage",
    }
  )
);
