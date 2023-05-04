import { FC } from "react";
import { Application } from "../Application/Application";
import { Tabs } from "../../../../components/Tabs";
import { WallpapersTab } from "./components/WallpapersTab/WallpapersTab";
import { ApplicationState } from "../../../../types/applications";

export const SettingsApplication: FC<ApplicationState> = (props) => (
  <Application {...props}>
    <Tabs vertical>
      <WallpapersTab/>
    </Tabs>
  </Application>
);
