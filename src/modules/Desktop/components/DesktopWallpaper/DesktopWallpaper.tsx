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
