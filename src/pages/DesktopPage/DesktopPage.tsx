import { DesktopShortcuts, DesktopWallpaper } from "../../modules/Desktop";
import { Applications } from "../../modules/Applications/components/Applications/Applications";
import styles from "./DesktopPage.module.scss";

export const DesktopPage = () => {
  return (
    <div className={styles.DesktopPage}>
      <DesktopWallpaper>
        <DesktopShortcuts/>
      </DesktopWallpaper>
      <Applications/>
    </div>
  );
};
