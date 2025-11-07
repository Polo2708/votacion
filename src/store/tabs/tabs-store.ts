import { create } from "zustand";

interface Tab {
  path: string;
  label: string;
}

interface TabStore {
  tabs: Tab[];
  addTab: (tab: Tab) => void;
  removeTab: (path: string) => void;
  setTabs: (tabs: Tab[]) => void;
}

export const StoreTabs = create<TabStore>((set) => ({
  tabs: [],
  addTab: (tab) =>
    set((state) => {
      const exist = state.tabs.some((t) => t.path === tab.path);
      if (exist) return state;
      return { tabs: [...state.tabs, tab] };
    }),

  removeTab: (path) =>
    set((state) => ({
      tabs: state.tabs.filter((t) => t.path !== path),
    })),
  setTabs: (tabs) => set({ tabs }),
}));
