import { DesktopShortcuts, DesktopWallpaper } from "../../modules/Desktop";
import styles from "./DesktopPage.module.scss";

export const DesktopPage = () => {
  return (
    <div className={styles.DesktopPage}>
      <DesktopWallpaper>
        <DesktopShortcuts/>
      </DesktopWallpaper>
    </div>
  );
};
