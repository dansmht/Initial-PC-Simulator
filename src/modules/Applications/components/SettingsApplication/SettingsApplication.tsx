import { FC } from "react";
import classNames from "classnames";
import { Application } from "../Application/Application";
import { Tab, Tabs } from "../../../../components/Tabs";
import { useWallpaperStore } from "../../../../store/WallpaperStore";
import { wallpapers } from "../../../../assets/images/wallpapers";
import { ApplicationState } from "../../../../types/applications";
import styles from "./SettingsApplication.module.scss";

export const SettingsApplication: FC<ApplicationState> = (props) => {
  const activeWallpaper = useWallpaperStore((state) => state.activeWallpaper);
  const setActiveWallpaper = useWallpaperStore((state) => state.setActiveWallpaper);

  return (
    <Application className={styles.SettingsApplication} {...props}>
      <Tabs vertical>
        <Tab label="Wallpapers">
          <div className={styles.Wallpapers}>
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
      </Tabs>
    </Application>
  );
};
