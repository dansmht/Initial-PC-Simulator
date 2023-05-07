import { FC } from "react";
import { Application } from "../Application/Application";
import { Tab, Tabs } from "../../../../components/Tabs";
import { WallpapersTab } from "./components/WallpapersTab/WallpapersTab";
import { SvgIcons } from "../../../../assets/images/icons";
import { ApplicationState } from "../../../../types/applications";
import styles from "./SettingsApplication.module.scss";

export const SettingsApplication: FC<ApplicationState> = (props) => (
  <Application {...props}>
    <Tabs className={styles.SettingsApplicationTabs} listClassName={styles.SettingsApplicationList} vertical>
      <Tab label="Wallpapers" icon={SvgIcons.Wallpaper}>
        <WallpapersTab/>
      </Tab>
    </Tabs>
  </Application>
);
