import classNames from "classnames";
import { useWallpaperStore } from "../../../../../../store/WallpaperStore";
import { wallpapers } from "../../../../../../assets/images/wallpapers";
import styles from "./WallpapersTab.module.scss";

export const WallpapersTab = () => {
  const activeWallpaper = useWallpaperStore((state) => state.activeWallpaper);
  const setActiveWallpaper = useWallpaperStore((state) => state.setActiveWallpaper);

  return (
    <div className={styles.WallpapersTab}>
      {wallpapers.map((wallpaper, index) => (
        <div
          key={wallpaper}
          className={classNames(styles.Wallpaper, {[styles.Active]: index === activeWallpaper})}
          onClick={() => setActiveWallpaper(index)}
        >
          <img
            src={wallpaper}
            alt="wallpaper"
            draggable={false}
          />
        </div>
      ))}
    </div>
  );
};
