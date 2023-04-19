import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools, persist } from "zustand/middleware";
import { Shortcut } from "../../../components/AppShortcut/_types";
import { initialDesktopShortcuts } from "../_const";

type DesktopShortcutsStore = {
  shortcuts: Shortcut[],
};

export const useDesktopShortcutsStore = create<DesktopShortcutsStore>()(persist(devtools(immer((set) => ({
  shortcuts: initialDesktopShortcuts,
}))), {name: "desktopShortcutsStore", version: 1}));
