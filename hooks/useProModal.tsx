import { UseProModal } from "@/typings";
import { create } from "zustand";

export const useProModal = create<UseProModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
