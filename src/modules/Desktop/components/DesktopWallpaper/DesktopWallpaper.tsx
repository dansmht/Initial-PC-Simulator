import React, { FC } from "react";
import { wallpapers } from "../../../../assets/images/wallpapers";
import { useWallpaperStore } from "../../store/WallpaperStore";
import { HasChildren } from "../../../../types/utils";
import styles from "./DesktopWallpaper.module.scss";

type Props = HasChildren;

export const DesktopWallpaper: FC<Props> = ({children}) => {
  const activeWallpaper = useWallpaperStore((state) => state.activeWallpaper);
  const nextWallpaper = useWallpaperStore((state) => state.setActiveWallpaper);

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
