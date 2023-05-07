import React, { FC } from "react";
import { wallpapers } from "../../../../assets/images/wallpapers";
import { useWallpaperStore } from "../../../../store/WallpaperStore";
import { HasChildren } from "../../../../types/utils";
import styles from "./DesktopWallpaper.module.scss";

type Props = HasChildren;

export const DesktopWallpaper: FC<Props> = ({children}) => {
  const activeWallpaper = useWallpaperStore((state) => state.activeWallpaper);

  return (
    <div className={styles.DesktopWallpaper} style={{backgroundImage: `url(${wallpapers[activeWallpaper]})`}}>
      {children}
    </div>
  );
};
