import { useApplicationsStore } from "../../../../store/ApplicationsStore";
import { Application } from "../Application/Application";
import { SettingsApplication } from "../SettingsApplication/SettingsApplication";

// TODO remake Components
export const Applications = () => {
  const apps = useApplicationsStore((state) => state.applications);

  return (
    <>
      {apps.map((app) => (
        <Application key={app.id} {...app}>
          {app.id === "1" && `App ${app.id} ${app.name}`}
          {app.id === "2" && <SettingsApplication/>}
        </Application>
      ))}
    </>
  );
};
