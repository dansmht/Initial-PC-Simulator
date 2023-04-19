import React, { FC } from "react";
import styles from "./DesktopWallpaper.module.scss";
import { useWallpaperStore } from "../../store/WallpaperStore";
import { wallpapers } from "../../../../assets/images/wallpapers";

type Props = {
  children: React.ReactNode,
}

export const DesktopWallpaper: FC<Props> = ({children}) => {
  const activeWallpaper = useWallpaperStore((state) => state.activeWallpaper);
  const nextWallpaper = useWallpaperStore((state) => state.setActiveWallpaper);
  console.log("WS", activeWallpaper);

  const initialGrid = Array(25).fill(0)
    .map(() => Array(10).fill(0).map(() => undefined));
  console.log("GRID", initialGrid);

  return (
    <div className={styles.DesktopWallpaper} style={{backgroundImage: `url(${wallpapers[activeWallpaper]})`}}>
      DesktopWallpaper
      <button onClick={() => nextWallpaper(Math.random() < 0.5 ? 0 : 1)}>
        NEXT
      </button>
      {children}
    </div>
  );
};
