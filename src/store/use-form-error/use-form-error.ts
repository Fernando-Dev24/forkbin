import { create } from "zustand";

interface FormErrorState {
  ok: boolean;
  message?: string;

  setError: (message?: string) => void;
  clearError: () => void;
}

export const useFormError = create<FormErrorState>()((set) => ({
  ok: true,
  message: undefined,

  setError: (message?: string) => set({ ok: false, message }),
  clearError: () => set({ ok: true, message: undefined }),
}));
