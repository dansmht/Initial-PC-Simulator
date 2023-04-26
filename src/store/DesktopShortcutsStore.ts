import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools, persist } from "zustand/middleware";
import { initialDesktopShortcuts } from "../consts/shortcuts";
import { Shortcut } from "../components/AppShortcut/_types";

type DesktopShortcutsStore = {
  shortcuts: Shortcut[],
  renameShortcut: (id: string, newTitle: string) => void,
};

export const useDesktopShortcutsStore = create<DesktopShortcutsStore>()(persist(devtools(immer((set) => ({
  shortcuts: initialDesktopShortcuts,
  renameShortcut: (id, newTitle) => {
    set((state) => {
      const trimmedNewTitle = newTitle.trim();
      if (!trimmedNewTitle) return;

      const shortcut = state.shortcuts.find((s) => s.id === id);
      if (shortcut) {
        shortcut.currentTitle = trimmedNewTitle;
      }
    });
  },
}))), {name: "desktopShortcutsStore", version: 1}));
