import React from "react";
import { Tab, Tabs } from "../../../../components/Tabs";

export const SettingsApplication = () => {
  return (
    <div>
      <Tabs>
        <Tab label="Tab Label 1">Tab Content 1</Tab>
        <Tab label="Tab Label 2">Tab Content 2</Tab>
        <Tab label="Tab Label 3">Tab Content 3</Tab>
        <div>
          <Tab label="Tab Label 4">Tab Content 4</Tab>
          <Tab label="Tab Label 5">Tab Content 5</Tab>
          PPP <div><Tab label="Tab Label 6">Tab Content 6</Tab></div>
        </div>
      </Tabs>
    </div>
  );
};
