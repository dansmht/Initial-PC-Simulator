import React from "react";
import { useApplicationsStore } from "../../../../store/ApplicationsStore";
import { Application } from "../Application/Application";

export const Applications = () => {
  const apps = useApplicationsStore((state) => state.applications);

  return (
    <>
      {apps.map((app) => (
        <Application key={app.id} {...app} />
      ))}
    </>
  );
};
