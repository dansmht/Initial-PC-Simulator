import classNames from "classnames";
import { Tab } from "../../../../../../components/Tabs";
import { useWallpaperStore } from "../../../../../../store/WallpaperStore";
import { wallpapers } from "../../../../../../assets/images/wallpapers";
import styles from "./WallpapersTab.module.scss";

export const WallpapersTab = () => {
  const activeWallpaper = useWallpaperStore((state) => state.activeWallpaper);
  const setActiveWallpaper = useWallpaperStore((state) => state.setActiveWallpaper);

  return (
    <Tab label="Wallpapers">
      <div className={styles.WallpapersTab}>
        {wallpapers.map((wallpaper, index) => (
          <div
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
    </Tab>
  );
};
