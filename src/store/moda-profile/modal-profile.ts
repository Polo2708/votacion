import { create } from "zustand";

interface IModalProfile {
  isOpen: boolean;
  openProfile: () => void;
  closeProfile: () => void;
}

export const useModalProfile = create<IModalProfile>((set) => ({
  isOpen: false,
  openProfile: () => set({ isOpen: true }),
  closeProfile: () => set({ isOpen: false }),
}));
