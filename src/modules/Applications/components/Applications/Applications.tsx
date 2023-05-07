import { useApplicationsStore } from "../../../../store/ApplicationsStore";
import { Application } from "../Application/Application";
import { SettingsApplication } from "../SettingsApplication/SettingsApplication";

export const Applications = () => {
  const apps = useApplicationsStore((state) => state.applications);

  return (
    <>
      {apps.map((app) => (
        <>
          {app.id === "1" && (
            <Application key={app.id} {...app}>
              App {app.id} {app.name}
            </Application>
          )}
          {app.id === "2" && <SettingsApplication key={app.id} {...app}/>}
        </>
      ))}
    </>
  );
};
