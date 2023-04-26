import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools, persist } from "zustand/middleware";
import { wallpapers } from "../assets/images/wallpapers";

type WallpaperState = {
  activeWallpaper: number,
  wallpaperSrc: string,
  setWallpaper: (index: number) => void,
  setActiveWallpaper: (index: number) => void,
};

export const useWallpaperStore = create<WallpaperState>()(persist(devtools(immer((set) => ({
  activeWallpaper: 0,
  wallpaperSrc: wallpapers[0],
  setWallpaper: (index: number) => set((state) => {
    state.wallpaperSrc = wallpapers[index];
  }),
  setActiveWallpaper: (index: number) => set((state) => {
    state.activeWallpaper = index;
  }),
}))), {name: "wallpaperStore", version: 1}));
