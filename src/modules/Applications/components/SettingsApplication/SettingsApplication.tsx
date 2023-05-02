import { FC } from "react";
import { Application } from "../Application/Application";
import { Tab, Tabs } from "../../../../components/Tabs";
import { ApplicationState } from "../../../../types/applications";

export const SettingsApplication: FC<ApplicationState> = (props) => {
  return (
    <Application {...props}>
      <Tabs vertical>
        <Tab label="Wallpapers">
          Wallpaper
        </Tab>
      </Tabs>
    </Application>
  );
};
