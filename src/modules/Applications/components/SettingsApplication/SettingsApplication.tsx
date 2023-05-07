import { FC } from "react";
import { Application } from "../Application/Application";
import { Tab, Tabs } from "../../../../components/Tabs";
import { WallpapersTab } from "./components/WallpapersTab/WallpapersTab";
import { SvgIcons } from "../../../../assets/images/icons";
import { ApplicationState } from "../../../../types/applications";

export const SettingsApplication: FC<ApplicationState> = (props) => (
  <Application {...props}>
    <Tabs vertical>
      <Tab label="Wallpapers" icon={SvgIcons.Wallpaper}>
        <WallpapersTab/>
      </Tab>
    </Tabs>
  </Application>
);
